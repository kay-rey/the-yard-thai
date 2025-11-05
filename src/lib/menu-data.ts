import { sanityFetch } from "@/sanity/lib/live";
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
// Uses sanityFetch for real-time updates via Sanity Live Content API
// Content changes in Sanity Studio appear automatically without redeployment
export async function getMenuItems(): Promise<MenuItem[]> {
	const { data } = await sanityFetch({ query: menuItemsQuery });
	return data as MenuItem[];
}

export async function getMenuItemsByCategory(
	categoryId: string
): Promise<MenuItem[]> {
	if (categoryId === "all") return await getMenuItems();
	const { data } = await sanityFetch({
		query: menuItemsByCategoryQuery,
		params: { category: categoryId },
	});
	return data as MenuItem[];
}

export const getCategories = () => categoriesData;

export async function getMenuItemById(id: string): Promise<MenuItem | null> {
	const { data } = await sanityFetch({
		query: menuItemByIdQuery,
		params: { id },
	});
	return data as MenuItem | null;
}
