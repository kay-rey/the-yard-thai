import {
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
    CupSoda,
    Waves,
} from "lucide-react";

export interface Category {
	id: string;
	name: string;
	icon: React.ComponentType<{ className?: string }>;
}

export const categories: Category[] = [
	{
		id: "appetizers",
		name: "Appetizers",
		icon: HandPlatter,
	},
	{
		id: "soups",
		name: "Soups",
		icon: Soup,
	},
	{
		id: "salads",
		name: "Salads",
		icon: Leaf,
	},
	{
		id: "noodles",
		name: "Noodles",
		icon: Waves,
	},
	{
		id: "curries",
		name: "Curries",
		icon: Flame,
	},
	{
		id: "stir-fried",
		name: "Stir-Fried",
		icon: ChefHat,
	},
	{
		id: "rice",
		name: "Fried Rice",
		icon: CookingPot,
	},
	{
		id: "special",
		name: "House Specialties",
		icon: Star,
	},
	{
		id: "grilled",
		name: "Grilled",
		icon: Grid3X3,
	},
	{
		id: "noodle-soups",
		name: "Noodle Soups",
		icon: Soup,
	},
	{
		id: "drinks",
		name: "Drinks",
		icon: CupSoda,
	},
	{
		id: "desserts",
		name: "Desserts",
		icon: IceCream,
	},
	{
		id: "sides",
		name: "Sides",
		icon: Utensils,
	},
];
