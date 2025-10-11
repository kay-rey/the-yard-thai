#!/usr/bin/env tsx

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { join } from "path";
import { config } from "dotenv";
import { menuItems } from "../src/data/menu-items";

// Load environment variables from .env.local
config({ path: join(process.cwd(), ".env.local") });

// Sanity client configuration
const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	apiVersion: "2025-01-01",
	useCdn: false,
	token: process.env.SANITY_API_WRITE_TOKEN!, // You'll need to create this token
});

interface MenuItem {
	id: string;
	name: string;
	description: string;
	price: string;
	category: string;
	spicy?: boolean;
	vegetarian?: boolean;
	popular?: boolean;
	image?: string;
}

async function uploadImage(imagePath: string): Promise<string | null> {
	try {
		const fullPath = join(process.cwd(), "public", imagePath);
		const imageBuffer = readFileSync(fullPath);

		const asset = await client.assets.upload("image", imageBuffer, {
			filename: imagePath.split("/").pop() || "image.jpg",
		});

		console.log(`✅ Uploaded image: ${imagePath}`);
		return asset._id;
	} catch (error) {
		console.error(`❌ Failed to upload image ${imagePath}:`, error);
		return null;
	}
}

async function createMenuItem(item: MenuItem): Promise<void> {
	try {
		let imageAssetId: string | null = null;

		// Upload image if it exists
		if (item.image) {
			imageAssetId = await uploadImage(item.image);
		}

		// Convert price string to number (remove $ and convert to float)
		const priceNumber = parseFloat(item.price.replace("$", ""));

		// Create the menu item document
		const document = {
			_type: "menuItem",
			name: item.name,
			description: item.description,
			price: priceNumber,
			category: item.category,
			spicy: item.spicy || false,
			vegetarian: item.vegetarian || false,
			popular: item.popular || false,
			imageAlt: item.name, // Use the actual name for alt text
			slug: {
				_type: "slug",
				current: item.id, // Use the existing ID as the slug
			},
			...(imageAssetId && {
				image: {
					_type: "image",
					asset: {
						_type: "reference",
						_ref: imageAssetId,
					},
				},
			}),
		};

		const result = await client.create(document);
		console.log(`✅ Created menu item: ${item.name}`);
	} catch (error) {
		console.error(`❌ Failed to create menu item ${item.name}:`, error);
	}
}

async function migrateMenuItems() {
	console.log("🚀 Starting migration of menu items to Sanity...");
	console.log(`📊 Total items to migrate: ${menuItems.length}`);

	let successCount = 0;
	let errorCount = 0;

	for (let i = 0; i < menuItems.length; i++) {
		const item = menuItems[i];
		console.log(`\n📝 Processing ${i + 1}/${menuItems.length}: ${item.name}`);

		try {
			await createMenuItem(item);
			successCount++;
		} catch (error) {
			console.error(`❌ Error processing ${item.name}:`, error);
			errorCount++;
		}

		// Add a small delay to avoid rate limiting
		await new Promise((resolve) => setTimeout(resolve, 100));
	}

	console.log("\n🎉 Migration completed!");
	console.log(`✅ Successfully migrated: ${successCount} items`);
	console.log(`❌ Failed to migrate: ${errorCount} items`);
}

// Check environment variables
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
	console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID is required");
	process.exit(1);
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
	console.error("❌ NEXT_PUBLIC_SANITY_DATASET is required");
	process.exit(1);
}

if (!process.env.SANITY_API_WRITE_TOKEN) {
	console.error("❌ SANITY_API_WRITE_TOKEN is required");
	console.log("💡 Create a write token at: https://sanity.io/manage");
	process.exit(1);
}

// Run the migration
migrateMenuItems().catch(console.error);
