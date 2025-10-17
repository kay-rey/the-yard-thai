import type { Metadata } from "next";
import CateringPageContent from "./catering-page-content";

export const metadata: Metadata = {
	title: "Catering & Special Events - The Yard Thai Cuisine",
	description:
		"Professional Thai catering services for corporate events, private parties, and special occasions in Agoura Hills, CA. Authentic Thai cuisine delivered to your venue. Call (818) 532-7272 for inquiries.",
	keywords: [
		"Thai catering Agoura Hills",
		"corporate catering California",
		"private party catering",
		"special event catering",
		"Thai food catering",
		"authentic Thai catering",
		"event catering Agoura Hills",
		"wedding catering Thai",
		"business catering",
		"party catering Thai cuisine",
		"catering services Agoura Hills",
		"Thai restaurant catering",
		"custom menu catering",
		"professional catering",
		"catering delivery",
	],
	openGraph: {
		title: "Catering & Special Events - The Yard Thai Cuisine",
		description:
			"Professional Thai catering services for corporate events, private parties, and special occasions in Agoura Hills, CA. Authentic Thai cuisine delivered to your venue.",
		url: "https://theyardthai.com/catering",
		images: [
			{
				url: "https://theyardthai.com/images/interior/IMG_6899.jpeg",
				width: 1200,
				height: 630,
				alt: "The Yard Thai Cuisine - Professional catering services for special events",
			},
		],
	},
	twitter: {
		title: "Catering & Special Events - The Yard Thai Cuisine",
		description:
			"Professional Thai catering services for corporate events, private parties, and special occasions in Agoura Hills, CA. Authentic Thai cuisine delivered to your venue.",
		images: ["https://theyardthai.com/images/interior/IMG_6899.jpeg"],
	},
};

export default function CateringPage() {
	return <CateringPageContent />;
}
