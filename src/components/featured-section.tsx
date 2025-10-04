import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturedSection() {
	return (
		<section className="py-16 px-4 bg-muted/50">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 text-balance">
						Featured Dishes
					</h2>
					<p className="text-lg text-muted-foreground text-balance">
						Discover our most popular authentic Thai creations
					</p>
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
					<Card className="group hover:shadow-lg transition-shadow duration-300 p-0 overflow-hidden">
						<div className="relative">
							<Image
								src="/menu-pictures/missing-pictures/Green curry.jpg"
								alt="Green Curry"
								width={300}
								height={192}
								className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<CardContent className="p-4">
							<h3 className="font-semibold text-lg mb-2">Green Curry</h3>
							<p className="text-sm text-muted-foreground">
								Aromatic coconut curry with fresh herbs and vegetables
							</p>
						</CardContent>
					</Card>

					<Card className="group hover:shadow-lg transition-shadow duration-300 p-0 overflow-hidden">
						<div className="relative">
							<Image
								src="/menu-pictures/padthai.jpg"
								alt="Pad Thai"
								width={300}
								height={192}
								className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<CardContent className="p-4">
							<h3 className="font-semibold text-lg mb-2">Pad Thai</h3>
							<p className="text-sm text-muted-foreground">
								Classic stir-fried noodles with tamarind and peanuts
							</p>
						</CardContent>
					</Card>

					<Card className="group hover:shadow-lg transition-shadow duration-300 p-0 overflow-hidden">
						<div className="relative">
							<Image
								src="/menu-pictures/Mango & sticky rice.jpg"
								alt="Mango Sticky Rice"
								width={300}
								height={192}
								className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<CardContent className="p-4">
							<h3 className="font-semibold text-lg mb-2">Mango Sticky Rice</h3>
							<p className="text-sm text-muted-foreground">
								Sweet coconut rice with fresh mango slices
							</p>
						</CardContent>
					</Card>

					<Card className="group hover:shadow-lg transition-shadow duration-300 p-0 overflow-hidden">
						<div className="relative">
							<Image
								src="/menu-pictures/missing-pictures/Tom yum soup.jpg"
								alt="Tom Yum Soup"
								width={300}
								height={192}
								className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<CardContent className="p-4">
							<h3 className="font-semibold text-lg mb-2">Tom Yum Soup</h3>
							<p className="text-sm text-muted-foreground">
								Spicy and sour soup with fresh herbs and shrimp
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="text-center mt-12">
					<Button variant="default" asChild className="text-lg font-bold bg-accent/90">
						<Link href="/menu">View Full Menu</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
