import type { Metadata } from "next";
import MenuSection from "@/components/menu-section";
import { getMenuItems } from "@/lib/menu-data";

export const metadata: Metadata = {
	title: "Menu - Authentic Thai Cuisine | The Yard Thai Cuisine",
	description:
		"Explore our 4.5-star rated authentic Thai menu featuring pad thai, curries, noodles, and traditional dishes. Fresh ingredients, traditional recipes, and exceptional taste at The Yard Thai Cuisine, a women-owned and operated restaurant in Agoura Hills.",
	keywords: [
		"Thai menu",
		"pad thai menu",
		"Thai curry menu",
		"noodle dishes",
		"Thai appetizers",
		"authentic Thai food",
		"Thai restaurant menu",
		"Agoura Hills menu",
		"traditional Thai dishes",
		"Thai cuisine menu",
		"Khao Soi Curry Noodle",
		"Pad See Eiw",
		"Tom Kha Soup",
		"Pad Kee Mao",
		"Papaya Salad",
		"Pineapple Fried Rice",
		"Yellow Curry",
		"Green Curry",
		"Spicy Eggplant",
		"Crab Fried Rice",
		"women-owned restaurant",
		"women-owned business",
	],
	openGraph: {
		title: "Menu - Authentic Thai Cuisine | The Yard Thai Cuisine",
		description:
			"Explore our 4.5-star rated authentic Thai menu featuring pad thai, curries, noodles, and traditional dishes. Fresh ingredients, traditional recipes, and exceptional taste at our women-owned and operated restaurant.",
		url: "https://theyardthai.com/menu",
		images: [
			{
				url: "https://theyardthai.com/images/logo/hero.jpg",
				width: 1200,
				height: 630,
				alt: "The Yard Thai Cuisine - Authentic Thai restaurant with delicious Pad Thai",
			},
		],
	},
	twitter: {
		title: "Menu - Authentic Thai Cuisine | The Yard Thai Cuisine",
		description:
			"Explore our 4.5-star rated authentic Thai menu featuring pad thai, curries, noodles, and traditional dishes. Fresh ingredients, traditional recipes, and exceptional taste at our women-owned and operated restaurant.",
		images: ["https://theyardthai.com/images/logo/hero.jpg"],
	},
};

// Static page - no revalidation needed
// Menu updates only when you manually redeploy or restart the server
// This prevents any background fetching while users are browsing

export default async function MenuPage() {
	const menuItems = await getMenuItems();

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-primary/10 to-background py-6 md:py-8">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-6xl text-foreground mb-4">
						Our Menu
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						Authentic Thai cuisine crafted with fresh ingredients and
						traditional recipes
					</p>
				</div>
			</section>

			{/* Menu Content */}
			<MenuSection menuItems={menuItems} />
		</div>
	);
}
