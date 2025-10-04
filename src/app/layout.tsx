import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "The Yard Thai Cuisine - Authentic Thai Food",
	description:
		"Experience authentic Thai flavors with a modern twist at The Yard Thai Cuisine. Fresh ingredients, traditional recipes, and exceptional taste.",
	icons: {
		icon: [
			{ url: "/logo/FullLogo.ico", sizes: "any" },
			{ url: "/logo/FullLogo.png", sizes: "32x32", type: "image/png" },
			{ url: "/logo/FullLogo.webp", sizes: "16x16", type: "image/webp" },
		],
		apple: "/logo/FullLogo.png",
	},
	openGraph: {
		title: "The Yard Thai Cuisine - Authentic Thai Food",
		description:
			"Experience authentic Thai flavors with a modern twist at The Yard Thai Cuisine. Fresh ingredients, traditional recipes, and exceptional taste.",
		url: "https://the-yard-thai.vercel.app", // Update this with your actual domain
		siteName: "The Yard Thai Cuisine",
		images: [
			{
				url: "/logo/logowithbackground.webp",
				width: 1200,
				height: 630,
				alt: "The Yard Thai Cuisine - Delicious Thai food including pad thai, curry, and fresh vegetables",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "The Yard Thai Cuisine - Authentic Thai Food",
		description:
			"Experience authentic Thai flavors with a modern twist at The Yard Thai Cuisine. Fresh ingredients, traditional recipes, and exceptional taste.",
		images: ["/logo/theyardheropicture.webp"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
