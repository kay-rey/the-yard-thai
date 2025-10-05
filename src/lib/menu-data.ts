import { HandPlatter, Leaf, Utensils, IceCream, Soup, CookingPot, Flame, ChefHat, Grid3X3, Star } from "lucide-react";
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

export interface Category {
	id: string;
	name: string;
	icon: string;
}

// Icon mapping
const iconMap = {
	HandPlatter,
	Leaf,
	Utensils,
	IceCream,
	Soup,
	CookingPot,
	Flame,
	ChefHat,
	Grid3X3,
	Star,
};

// Load and process menu data
export const menuItems: MenuItem[] = menuItemsData;

export const categories = categoriesData.map((category) => ({
	...category,
	icon: iconMap[category.icon as keyof typeof iconMap],
}));

// Utility functions
export const getMenuItemsByCategory = (categoryId: string): MenuItem[] => {
	if (categoryId === "all") return menuItems;
	return menuItems.filter((item) => item.category === categoryId);
};

export const getCategories = () => categories;

export const getMenuItemById = (id: string): MenuItem | undefined => {
	return menuItems.find((item) => item.id === id);
};
