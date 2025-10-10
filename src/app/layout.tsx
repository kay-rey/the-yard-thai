import type { Metadata } from "next";
import { Lora, Nunito_Sans, Parisienne } from "next/font/google";
import LocalFont from "next/font/local";
import Script from "next/script";
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
								// Only re-initialize if we're on the homepage
								if (currentPath === '/') {
									setTimeout(initAllAnimations, 100);
								}
							}
						};
						
						// Check for route changes periodically
						setInterval(checkForRouteChange, 100);
						
						// Also re-initialize when the page becomes visible again
						document.addEventListener('visibilitychange', () => {
							if (!document.hidden && window.location.pathname === '/') {
								setTimeout(initAllAnimations, 100);
							}
						});
					`}
				</Script>
			</body>
		</html>
	);
}
