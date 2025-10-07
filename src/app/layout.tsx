import type { Metadata } from "next";
import { Lora, Nunito_Sans, Parisienne } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const myFont = LocalFont({
	src: "./fonts/coolvetica-rg.otf",
	display: "swap",
	variable: "--font-coolvetica",
});

const lora = Lora({
	variable: "--font-lora",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const parisienne = Parisienne({
	variable: "--font-parisienne",
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://the-yard-thai.vercel.app"),
	title: "The Yard Thai Cuisine - Authentic Thai Food",
	description:
		"Experience authentic Thai flavors with a modern twist at The Yard Thai Cuisine. Fresh ingredients, traditional recipes, and exceptional taste.",
	icons: {
		icon: [
			{ url: "/images/logo/FullLogo.ico", sizes: "any" },
			{ url: "/images/logo/FullLogo.png", sizes: "32x32", type: "image/png" },
			{ url: "/images/logo/FullLogo.webp", sizes: "16x16", type: "image/webp" },
		],
		apple: "/images/logo/FullLogo.png",
	},
	openGraph: {
		title: "The Yard Thai Cuisine - Authentic Thai Food",
		description:
			"Experience authentic Thai flavors with a modern twist at The Yard Thai Cuisine. Fresh ingredients, traditional recipes, and exceptional taste.",
		url: "https://the-yard-thai.vercel.app", // Update this with your actual domain
		siteName: "The Yard Thai Cuisine",
		images: [
			{
				url: "/images/logo/logowithbackground.webp",
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
		images: ["/images/logo/theyardheropicture.webp"],
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
				className={`${lora.variable} ${nunitoSans.variable} ${myFont.variable} ${parisienne.variable} antialiased`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
