import { client } from "@/sanity/lib/client";
import {
	menuItemsQuery,
	menuItemsByCategoryQuery,
	menuItemByIdQuery,
} from "@/lib/sanity/queries";
import { categories as categoriesData } from "@/data/categories";

// Type definitions
export interface MenuItem {
	_id: string;
	name: string;
	description: string;
	price: number;
	category: string;
	spicy?: boolean;
	vegetarian?: boolean;
	popular?: boolean;
	image?: {
		asset: {
			_id: string;
			url: string;
		};
	};
	imageAlt?: string;
	slug: {
		current: string;
	};
}

// Re-export the Category type and categories from the data file
export type { Category } from "@/data/categories";

// Load and process menu data from Sanity
// Static page - data fetched once at build time
// No background revalidation, no client-side fetching
export async function getMenuItems(): Promise<MenuItem[]> {
	return await client.fetch(menuItemsQuery);
}

export async function getMenuItemsByCategory(
	categoryId: string
): Promise<MenuItem[]> {
	if (categoryId === "all") return await getMenuItems();
	return await client.fetch(menuItemsByCategoryQuery, {
		category: categoryId,
	});
}

export const getCategories = () => categoriesData;

export async function getMenuItemById(id: string): Promise<MenuItem | null> {
	return await client.fetch(menuItemByIdQuery, { id });
}
