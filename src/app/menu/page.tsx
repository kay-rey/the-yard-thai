import type { Metadata } from "next";
import MenuSection from "@/components/menu-section";

export const metadata: Metadata = {
	title: "Menu - Authentic Thai Cuisine | The Yard Thai Cuisine",
	description:
		"Explore our authentic Thai menu featuring pad thai, curries, noodles, and traditional dishes. Fresh ingredients, traditional recipes, and exceptional taste at The Yard Thai Cuisine in Agoura Hills.",
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
	],
	openGraph: {
		title: "Menu - Authentic Thai Cuisine | The Yard Thai Cuisine",
		description:
			"Explore our authentic Thai menu featuring pad thai, curries, noodles, and traditional dishes. Fresh ingredients, traditional recipes, and exceptional taste.",
		url: "https://theyardthai.com/menu",
		images: [
			{
				url: "https://theyardthai.com/images/logo/logowithbackground.webp",
				width: 1200,
				height: 630,
				alt: "The Yard Thai Cuisine menu featuring authentic Thai dishes",
			},
		],
	},
	twitter: {
		title: "Menu - Authentic Thai Cuisine | The Yard Thai Cuisine",
		description:
			"Explore our authentic Thai menu featuring pad thai, curries, noodles, and traditional dishes. Fresh ingredients, traditional recipes, and exceptional taste.",
		images: ["https://theyardthai.com/images/logo/logowithbackground.webp"],
	},
};

export default function MenuPage() {
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
			<MenuSection />
		</div>
	);
}
