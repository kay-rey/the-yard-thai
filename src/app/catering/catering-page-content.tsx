import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Phone,
	Users,
	Calendar,
	Utensils,
	CheckCircle,
	Star,
} from "lucide-react";

export default function CateringPageContent() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="pt-20 pb-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl lg:text-6xl text-accent mb-6 text-balance scroll-animate slide-in-up delay-100">
							Catering & Special Events
						</h1>
						<p className="text-xl text-muted-foreground text-balance scroll-animate slide-in-up delay-200 max-w-3xl mx-auto">
							Bring the authentic flavors of Thailand to your special occasions
							with our professional catering services
						</p>
					</div>

					{/* Hero Image */}
					<div className="relative h-80 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-lg scroll-animate scale-in delay-200">
						<Image
							src="/images/interior/IMG_6891.jpeg"
							alt="Beautiful restaurant interior showcasing our elegant dining space perfect for special events"
							fill
							className="object-cover object-center"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
							priority
						/>
					</div>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl text-accent mb-4 text-balance scroll-animate slide-in-up delay-100">
							Our Catering Services
						</h2>
						<p className="text-lg text-muted-foreground text-balance scroll-animate slide-in-up delay-200">
							From intimate gatherings to large corporate events, we create
							memorable dining experiences
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="group hover:shadow-lg transition-shadow duration-200 scroll-animate scale-in delay-200">
							<CardContent className="p-6 text-center">
								<div className="mb-4 flex justify-center">
									<div className="p-3 rounded-full bg-primary/10">
										<Users className="h-8 w-8 text-primary" />
									</div>
								</div>
								<h3 className="text-xl font-bold mb-3 text-accent">
									Corporate Events
								</h3>
								<p className="text-muted-foreground mb-4">
									Professional catering for business meetings, conferences, and
									corporate gatherings
								</p>
								<ul className="text-sm text-muted-foreground space-y-1">
									<li>• Business lunches and dinners</li>
									<li>• Conference catering</li>
									<li>• Team building events</li>
									<li>• Client entertainment</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-shadow duration-200 scroll-animate scale-in delay-200">
							<CardContent className="p-6 text-center">
								<div className="mb-4 flex justify-center">
									<div className="p-3 rounded-full bg-secondary/10">
										<Calendar className="h-8 w-8 text-secondary" />
									</div>
								</div>
								<h3 className="text-xl font-bold mb-3 text-accent">
									Private Parties
								</h3>
								<p className="text-muted-foreground mb-4">
									Birthday celebrations, anniversaries, and intimate gatherings
									with authentic Thai flavors
								</p>
								<ul className="text-sm text-muted-foreground space-y-1">
									<li>• Birthday celebrations</li>
									<li>• Anniversary dinners</li>
									<li>• Family reunions</li>
									<li>• Holiday parties</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-lg transition-shadow duration-200 scroll-animate scale-in delay-200">
							<CardContent className="p-6 text-center">
								<div className="mb-4 flex justify-center">
									<div className="p-3 rounded-full bg-accent/10">
										<Utensils className="h-8 w-8 text-accent" />
									</div>
								</div>
								<h3 className="text-xl font-bold mb-3 text-accent">
									Special Occasions
								</h3>
								<p className="text-muted-foreground mb-4">
									Weddings, graduations, and milestone celebrations with
									customizable Thai menus
								</p>
								<ul className="text-sm text-muted-foreground space-y-1">
									<li>• Wedding receptions</li>
									<li>• Graduation parties</li>
									<li>• Milestone celebrations</li>
									<li>• Cultural events</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-16 px-4 md:px-6 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Content */}
						<div>
							<h2 className="text-3xl md:text-4xl text-accent mb-6 text-balance scroll-animate slide-in-up delay-100">
								Why Choose Our Catering?
							</h2>
							<div className="space-y-6">
								<div className="flex items-start space-x-4 scroll-animate slide-in-up delay-200">
									<CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
									<div>
										<h3 className="text-lg font-semibold mb-2 text-accent">
											Authentic Thai Cuisine
										</h3>
										<p className="text-muted-foreground">
											Traditional recipes and fresh ingredients ensure every
											dish delivers the authentic flavors of Thailand
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4 scroll-animate slide-in-up delay-200">
									<CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
									<div>
										<h3 className="text-lg font-semibold mb-2 text-accent">
											Customizable Menus
										</h3>
										<p className="text-muted-foreground">
											We work with you to create the perfect menu for your
											event, accommodating dietary restrictions and preferences
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4 scroll-animate slide-in-up delay-200">
									<CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
									<div>
										<h3 className="text-lg font-semibold mb-2 text-accent">
											Professional Service
										</h3>
										<p className="text-muted-foreground">
											Our experienced team ensures seamless service from
											planning to execution, making your event stress-free
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4 scroll-animate slide-in-up delay-200">
									<CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
									<div>
										<h3 className="text-lg font-semibold mb-2 text-accent">
											Fresh & Quality Ingredients
										</h3>
										<p className="text-muted-foreground">
											We use only the freshest ingredients and traditional
											cooking methods to deliver exceptional quality
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Image */}
						<div className="relative h-80 w-full overflow-hidden rounded-lg scroll-animate slide-in-right delay-200">
							<Image
								src="/images/interior/IMG_6962.jpeg"
								alt="Professional catering setup showcasing our attention to detail and presentation"
								fill
								className="object-cover object-center"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
				<div className="mx-auto max-w-4xl text-center">
					<div className="mb-8">
						<h2 className="text-3xl md:text-4xl text-accent mb-4 text-balance scroll-animate slide-in-up delay-100">
							Ready to Plan Your Event?
						</h2>
						<p className="text-lg text-muted-foreground text-balance scroll-animate slide-in-up delay-200">
							Contact us today to discuss your catering needs and let us create
							an unforgettable dining experience for your special occasion
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-animate slide-in-up delay-200">
						<Button
							asChild
							className="text-lg font-bold bg-accent/90 hover:bg-accent flex items-center space-x-2 px-8 py-3"
						>
							<Link href="tel:+18185327272">
								<Phone className="h-5 w-5" />
								<span>Call (818) 532-7272</span>
							</Link>
						</Button>
						<div className="text-sm text-muted-foreground">
							<p>Available for consultation and booking</p>
							<p className="flex items-center justify-center space-x-1 mt-1">
								<Star className="h-4 w-4 text-primary fill-current" />
								<span>4.5-star rated catering service</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
