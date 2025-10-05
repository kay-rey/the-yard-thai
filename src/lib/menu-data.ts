import { menuItems as menuItemsData } from "@/data/menu-items";
import { categories as categoriesData } from "@/data/categories";

// Type definitions
export interface MenuItem {
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

// Re-export the Category type and categories from the data file
export type { Category } from "@/data/categories";

// Load and process menu data
export const menuItems: MenuItem[] = menuItemsData;
export const categories = categoriesData;

// Utility functions
export const getMenuItemsByCategory = (categoryId: string): MenuItem[] => {
	if (categoryId === "all") return menuItems;
	return menuItems.filter((item) => item.category === categoryId);
};

export const getCategories = () => categories;

export const getMenuItemById = (id: string): MenuItem | undefined => {
	return menuItems.find((item) => item.id === id);
};
