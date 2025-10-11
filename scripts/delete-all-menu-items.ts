#!/usr/bin/env tsx

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { join } from "path";

// Load environment variables
config({ path: join(process.cwd(), ".env.local") });

// Sanity client configuration
const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	apiVersion: "2025-01-01",
	useCdn: false,
	token: process.env.SANITY_API_WRITE_TOKEN!,
});

async function deleteAllMenuItems() {
	console.log("🗑️ Starting deletion of all menu items...");

	try {
		// First, get all menu item IDs
		const menuItems = await client.fetch(`
			*[_type == "menuItem"] {
				_id
			}
		`);

		console.log(`📊 Found ${menuItems.length} menu items to delete`);

		if (menuItems.length === 0) {
			console.log("✅ No menu items found to delete");
			return;
		}

		// Delete all menu items
		const deletePromises = menuItems.map((item: any) =>
			client.delete(item._id)
		);

		await Promise.all(deletePromises);

		console.log(`✅ Successfully deleted ${menuItems.length} menu items`);
	} catch (error) {
		console.error("❌ Error deleting menu items:", error);
	}
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

// Run the deletion
deleteAllMenuItems().catch(console.error);
