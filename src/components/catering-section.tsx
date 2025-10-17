import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Users, Calendar, Utensils } from "lucide-react";

export default function CateringSection() {
	return (
		<section className="pt-16 pb-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background">
			<div className="mx-auto max-w-6xl">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl text-accent mb-4 text-balance">
						Catering & Special Events
					</h2>
					<p className="text-lg text-muted-foreground text-balance">
						Bring authentic Thai flavors to your special occasions
					</p>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 mb-12">
					{/* Left Column - Image */}
					<div className="order-2 lg:order-1 flex items-center">
						<div className="relative h-80 w-full overflow-hidden rounded-lg lg:h-96">
							<Image
								src="/images/interior/IMG_6899.jpeg"
								alt="Beautiful restaurant interior perfect for special events and catering"
								fill
								className="object-cover object-center"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>

					{/* Right Column - Content */}
					<div className="order-1 lg:order-2 flex flex-col justify-center">
						<div className="space-y-4 text-muted-foreground">
							<p className="text-lg leading-relaxed">
								Make your special events unforgettable with authentic Thai
								cuisine from The Yard Thai Cuisine. From intimate gatherings to
								large corporate events, we bring the authentic flavors of
								Thailand directly to your venue.
							</p>

							<p className="text-lg leading-relaxed">
								Our experienced team creates customized menus that perfectly
								complement your occasion, ensuring every guest experiences the
								rich, complex flavors that make Thai cuisine so beloved.
							</p>
						</div>

						{/* Call to Action */}
						<div className="mt-8">
							<Button
								asChild
								className="text-lg font-medium bg-accent/90 hover:bg-accent flex items-center space-x-2"
							>
								<Link href="tel:+18185327272">
									<Phone className="h-5 w-5" />
									<span>Call for Catering Inquiries</span>
								</Link>
							</Button>
						</div>
					</div>
				</div>

				{/* Event Types Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<Card className="group hover:shadow-lg transition-shadow duration-200">
						<CardContent className="p-6 text-center">
							<div className="mb-4 flex justify-center">
								<div className="p-3 rounded-full bg-primary/10">
									<Users className="h-8 w-8 text-primary" />
								</div>
							</div>
							<h3 className="text-xl font-medium mb-2 text-accent">
								Corporate Events
							</h3>
							<p className="text-muted-foreground">
								Professional catering for business meetings, conferences, and
								corporate gatherings
							</p>
						</CardContent>
					</Card>

					<Card className="group hover:shadow-lg transition-shadow duration-200 ">
						<CardContent className="p-6 text-center">
							<div className="mb-4 flex justify-center">
								<div className="p-3 rounded-full bg-secondary/10">
									<Calendar className="h-8 w-8 text-secondary" />
								</div>
							</div>
							<h3 className="text-xl font-medium mb-2 text-accent">
								Private Parties
							</h3>
							<p className="text-muted-foreground">
								Birthday celebrations, anniversaries, and intimate gatherings
								with authentic Thai flavors
							</p>
						</CardContent>
					</Card>

					<Card className="group hover:shadow-lg transition-shadow duration-200 ">
						<CardContent className="p-6 text-center">
							<div className="mb-4 flex justify-center">
								<div className="p-3 rounded-full bg-accent/10">
									<Utensils className="h-8 w-8 text-accent" />
								</div>
							</div>
							<h3 className="text-xl font-medium mb-2 text-accent">
								Special Occasions
							</h3>
							<p className="text-muted-foreground">
								Weddings, graduations, and milestone celebrations with
								customizable Thai menus
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
