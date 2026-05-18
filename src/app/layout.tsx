import type { Metadata } from "next";
import { Lora, Nunito_Sans, Parisienne } from "next/font/google";
import LocalFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { generateRestaurantStructuredData } from "@/lib/structured-data";
import { SanityLive } from "@/sanity/lib/live";

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
	metadataBase: new URL("https://theyardthai.com"),
	title: {
		default: "The Yard Thai Cuisine - Authentic Thai Food in Agoura Hills",
		template: "%s | The Yard Thai Cuisine",
	},
	description:
		"Experience authentic Thai flavors with a modern twist at The Yard Thai Cuisine, a women-owned and operated restaurant in Agoura Hills, CA. Fresh ingredients, traditional recipes, and exceptional taste. Best Thai restaurant near you.",
	keywords: [
		"Thai restaurant",
		"Agoura Hills Thai food",
		"authentic Thai cuisine",
		"pad thai",
		"Thai curry",
		"best Thai restaurant",
		"Thai food near me",
		"Agoura Hills restaurant",
		"California Thai food",
		"traditional Thai recipes",
		"women-owned restaurant",
		"women-owned business",
	],
	alternates: {
		canonical: "https://theyardthai.com",
		languages: {
			"en-US": "https://theyardthai.com",
		},
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "The Yard Thai Cuisine - Authentic Thai Food in Agoura Hills",
		description:
			"Experience authentic Thai flavors with a modern twist at The Yard Thai Cuisine, a women-owned and operated restaurant in Agoura Hills, CA. Fresh ingredients, traditional recipes, and exceptional taste.",
		url: "https://theyardthai.com",
		siteName: "The Yard Thai Cuisine",
		images: [
			{
				url: "https://theyardthai.com/images/logo/hero.jpg",
				width: 1200,
				height: 630,
				alt: "The Yard Thai Cuisine - Authentic Thai restaurant with delicious Pad Thai",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "The Yard Thai Cuisine - Authentic Thai Food in Agoura Hills",
		description:
			"Experience authentic Thai flavors with a modern twist at The Yard Thai Cuisine, a women-owned and operated restaurant in Agoura Hills, CA. Fresh ingredients, traditional recipes, and exceptional taste.",
		images: ["https://theyardthai.com/images/logo/hero.jpg"],
	},
	verification: {
		// TODO: Add Google Search Console verification code when available
		// google: "your-google-verification-code",
	},
	other: {
		"theme-color": "#F4D03F",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head></head>
			<body
				className={`${lora.variable} ${nunitoSans.variable} ${myFont.variable} ${parisienne.variable} antialiased`}
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(generateRestaurantStructuredData()),
					}}
				/>
				<Navbar />
				<main>{children}</main>
				<Footer />
				<Analytics />
				<SanityLive />
				<Script id="animations-script" strategy="afterInteractive">
					{`
						let scrollObserver = null;
						
						// Scroll-triggered animations using Intersection Observer
						function initScrollAnimations() {
							if (!('IntersectionObserver' in window)) return;
							
							// Clean up existing observer
							if (scrollObserver) {
								scrollObserver.disconnect();
							}
							
							scrollObserver = new IntersectionObserver(
								(entries) => {
									entries.forEach((entry) => {
										if (entry.isIntersecting) {
											entry.target.classList.add('in-view');
											scrollObserver.unobserve(entry.target);
										}
									});
								},
								{
									threshold: 0.2,
									rootMargin: '0px 0px -50px 0px',
								}
							);
							
							// Reset all scroll-animate elements and observe them
							const animatedElements = document.querySelectorAll('.scroll-animate');
							animatedElements.forEach((element) => {
								element.classList.remove('in-view');
								scrollObserver.observe(element);
							});
						}
						
						// Add navbar button animations after hydration
						function initNavbarAnimations() {
							const desktopBtn = document.getElementById('desktop-order-btn');
							const mobileBtn = document.getElementById('mobile-order-btn');
							
							if (desktopBtn) {
								desktopBtn.classList.add('animate-subtle-shake');
							}
							if (mobileBtn) {
								mobileBtn.classList.add('animate-subtle-shake');
							}
						}
						
						function initAllAnimations() {
							initScrollAnimations();
							initNavbarAnimations();
						}
						
						// Initialize on page load
						if (document.readyState === 'loading') {
							document.addEventListener('DOMContentLoaded', initAllAnimations);
						} else {
							initAllAnimations();
						}
						
						// Re-initialize on URL changes (Next.js routing)
						let currentPath = window.location.pathname;
						const checkForRouteChange = () => {
							if (window.location.pathname !== currentPath) {
								currentPath = window.location.pathname;
								// Re-initialize animations for all pages
								setTimeout(initAllAnimations, 100);
							}
						};
						
						// Check for route changes periodically
						setInterval(checkForRouteChange, 100);
						
						// Also re-initialize when the page becomes visible again
						document.addEventListener('visibilitychange', () => {
							if (!document.hidden) {
								setTimeout(initAllAnimations, 100);
							}
						});
					`}
				</Script>
			</body>
		</html>
	);
}
