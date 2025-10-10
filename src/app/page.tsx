import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import FeaturedSection from "@/components/featured-section";

export const metadata: Metadata = {
	title: "The Yard Thai Cuisine - Authentic Thai Food in Agoura Hills, CA",
	description:
		"Experience the best authentic Thai cuisine in Agoura Hills at The Yard Thai Cuisine. Fresh ingredients, traditional recipes, and exceptional taste. Located at 5889 Kanan Rd. Call (818) 532-7272 for reservations.",
	keywords: [
		"Thai restaurant Agoura Hills",
		"best Thai food near me",
		"authentic Thai cuisine California",
		"pad thai Agoura Hills",
		"Thai curry restaurant",
		"Agoura Hills dining",
		"Thai food delivery",
		"restaurant reservations",
		"family Thai restaurant",
		"traditional Thai recipes",
	],
	openGraph: {
		title: "The Yard Thai Cuisine - Authentic Thai Food in Agoura Hills, CA",
		description:
			"Experience the best authentic Thai cuisine in Agoura Hills at The Yard Thai Cuisine. Fresh ingredients, traditional recipes, and exceptional taste.",
		url: "https://theyardthai.com",
		images: [
			{
				url: "https://theyardthai.com/images/logo/logowithbackground.webp",
				width: 1200,
				height: 630,
				alt: "The Yard Thai Cuisine - Authentic Thai restaurant logo",
			},
		],
	},
	twitter: {
		title: "The Yard Thai Cuisine - Authentic Thai Food in Agoura Hills, CA",
		description:
			"Experience the best authentic Thai cuisine in Agoura Hills at The Yard Thai Cuisine. Fresh ingredients, traditional recipes, and exceptional taste.",
		images: ["https://theyardthai.com/images/logo/logowithbackground.webp"],
	},
};

export default function Home() {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<FeaturedSection />
		</div>
	);
}
