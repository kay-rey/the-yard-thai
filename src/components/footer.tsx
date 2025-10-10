import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";
import { getStoreStatus } from "@/lib/store-hours";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const storeStatus = getStoreStatus();

	return (
		<footer className="bg-foreground text-background">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
					{/* Restaurant Info */}
					<div className="space-y-2">
						<h3 className="text-xl text-background">The Yard Thai Cuisine</h3>
						<p className="text-background/90 text-md font-parisienne">
							A Taste of Tradition
						</p>
					</div>

					{/* Hours */}
					<div className="space-y-4">
						<div className="flex items-center justify-center md:justify-start space-x-3">
							<h4 className="text-lg text-background">Hours</h4>
							{/* Store Status Indicator */}
							<div className="flex items-center space-x-2">
								<div
									className={`w-3 h-3 rounded-full ${storeStatus.circleColor}`}
									style={{
										boxShadow: "0 0 0 0.5px rgba(255,255,255,0.3)",
									}}
								></div>
								<span
									className={`text-sm font-medium ${storeStatus.textColorFooter}`}
									style={{
										textShadow:
											"-0.5px -0.5px 0 rgba(255,255,255,0.1), 0.5px -0.5px 0 rgba(255,255,255,0.1), -0.5px 0.5px 0 rgba(255,255,255,0.1), 0.5px 0.5px 0 rgba(255,255,255,0.1)",
									}}
								>
									{storeStatus.text}
								</span>
							</div>
						</div>

						{/* --- UPDATED HOURS SECTION --- */}
						<div className="text-background/90 text-sm space-y-1">
							<p>Mon - Thu: 11:00 AM - 2:30 PM, 4:00 PM - 8:15 PM</p>
							<p>Fri - Sat: 11:00 AM - 2:30 PM, 4:00 PM - 8:30 PM</p>
							<p>Sunday: 11:30 AM - 2:30 PM, 4:00 PM - 8:15 PM</p>
						</div>
					</div>

					{/* Social Media */}
					<div className="space-y-4">
						<h4 className="text-lg text-background">Follow Us</h4>
						<div className="flex justify-center md:justify-start space-x-4">
							<Link
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-background/90 hover:text-accent transition-colors"
								aria-label="Follow us on Instagram"
							>
								<Instagram className="h-6 w-6" />
							</Link>
							<Link
								href="https://yelp.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-background/90 hover:text-accent transition-colors"
								aria-label="Find us on Yelp"
							>
								<MapPin className="h-6 w-6" />
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-background/80 mt-8 pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
						<p className="text-background/80 text-sm">
							© {currentYear} The Yard Thai Cuisine. All rights reserved.
						</p>
						<p>
							<Link
								href="https://kevbreyes.com/"
								className="text-sm text-background/80 hover:text-accent transition-colors"
							>
								Made by 🐨
							</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
