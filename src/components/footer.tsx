import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[var(--charcoal)] text-[var(--light-cream)]">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
					{/* Restaurant Info */}
					<div className="space-y-4">
						<h3 className="text-xl font-bold text-[var(--light-cream)]">
							The Yard Thai Cuisine
						</h3>
						<p className="text-[var(--light-cream)]/80 text-sm">
							Authentic Thai flavors in the heart of the city
						</p>
					</div>

					{/* Hours */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-[var(--light-cream)]">
							Hours
						</h4>
						<div className="text-[var(--light-cream)]/80 text-sm space-y-1">
							<p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
							<p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
							<p>Sunday: 12:00 PM - 8:00 PM</p>
						</div>
					</div>

					{/* Social Media */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-[var(--light-cream)]">
							Follow Us
						</h4>
						<div className="flex justify-center md:justify-start space-x-4">
							<Link
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--light-cream)]/80 hover:text-[var(--golden-saffron)] transition-colors"
								aria-label="Follow us on Instagram"
							>
								<Instagram className="h-6 w-6" />
							</Link>
							<Link
								href="https://yelp.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--light-cream)]/80 hover:text-[var(--golden-saffron)] transition-colors"
								aria-label="Find us on Yelp"
							>
								<MapPin className="h-6 w-6" />
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-[var(--jade-green)]/30 mt-8 pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
						<p className="text-[var(--light-cream)]/60 text-sm">
							© {currentYear} The Yard Thai Cuisine. All rights reserved.
						</p>
						<p className="text-[var(--light-cream)]/60 text-sm">
							Made with ❤️ for authentic Thai cuisine lovers
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
