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
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-primary/10 to-background py-6 md:py-8">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-6xl text-foreground mb-4">
						Catering & Special Events
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						Bring the authentic flavors of Thailand to your special occasions
						with our professional catering services
					</p>
				</div>
			</section>

			{/* Hero Image Section */}
			<section className="py-4 px-4">
				<div className="container mx-auto">
					<div className="relative h-80 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-lg">
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
			<section className="py-8 px-4 md:px-6 lg:px-8 bg-muted/50">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl text-accent mb-4 text-balance">
							Our Catering Services
						</h2>
						<p className="text-lg text-muted-foreground text-balance">
							From intimate gatherings to large corporate events, we create
							memorable dining experiences
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="group hover:shadow-lg transition-shadow duration-200">
							<CardContent className="p-6 text-center">
								<div className="mb-4 flex justify-center">
									<div className="p-3 rounded-full bg-primary/10">
										<Users className="h-8 w-8 text-primary" />
									</div>
								</div>
								<h3 className="text-xl font-medium mb-3 text-accent">
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

						<Card className="group hover:shadow-lg transition-shadow duration-200">
							<CardContent className="p-6 text-center">
								<div className="mb-4 flex justify-center">
									<div className="p-3 rounded-full bg-primary/10">
										<Calendar className="h-8 w-8 text-primary" />
									</div>
								</div>
								<h3 className="text-xl font-medium mb-3 text-accent">
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

						<Card className="group hover:shadow-lg transition-shadow duration-200">
							<CardContent className="p-6 text-center">
								<div className="mb-4 flex justify-center">
									<div className="p-3 rounded-full bg-primary/10">
										<Utensils className="h-8 w-8 text-primary" />
									</div>
								</div>
								<h3 className="text-xl font-medium mb-3 text-accent">
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
					{/* Header */}
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl text-accent mb-4 text-balance">
							Why Choose Our Catering?
						</h2>
					</div>

					{/* Content Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Benefit 1 */}
						<div className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="p-3 rounded-full bg-primary/10">
									<CheckCircle className="h-8 w-8 text-primary" />
								</div>
							</div>
							<h3 className="text-lg font-medium mb-3 text-accent">
								Authentic Thai Cuisine
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Traditional recipes and fresh ingredients ensure every dish
								delivers the authentic flavors of Thailand
							</p>
						</div>

						{/* Benefit 2 */}
						<div className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="p-3 rounded-full bg-primary/10">
									<CheckCircle className="h-8 w-8 text-primary" />
								</div>
							</div>
							<h3 className="text-lg font-medium mb-3 text-accent">
								Customizable Menus
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								We work with you to create the perfect menu for your event,
								accommodating dietary restrictions and preferences
							</p>
						</div>

						{/* Benefit 3 */}
						<div className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="p-3 rounded-full bg-primary/10">
									<CheckCircle className="h-8 w-8 text-primary" />
								</div>
							</div>
							<h3 className="text-lg font-medium mb-3 text-accent">
								Professional Service
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Our experienced team ensures seamless service from planning to
								execution, making your event stress-free
							</p>
						</div>

						{/* Benefit 4 */}
						<div className="text-center">
							<div className="mb-4 flex justify-center">
								<div className="p-3 rounded-full bg-primary/10">
									<CheckCircle className="h-8 w-8 text-primary" />
								</div>
							</div>
							<h3 className="text-lg font-medium mb-3 text-accent">
								Fresh & Quality Ingredients
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed">
								We use only the freshest ingredients and traditional cooking
								methods to deliver exceptional quality
							</p>
						</div>
					</div>

					{/* Image Section */}
					<div className="mt-16">
						<div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden rounded-lg">
							<Image
								src="/images/interior/IMG_6962.jpeg"
								alt="Professional catering setup showcasing our attention to detail and presentation"
								fill
								className="object-cover object-center"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
				<div className="mx-auto max-w-4xl text-center">
					<div className="mb-8">
						<h2 className="text-3xl md:text-4xl text-accent mb-4 text-balance">
							Ready to Plan Your Event?
						</h2>
						<p className="text-lg text-muted-foreground text-balance">
							Contact us today to discuss your catering needs and let us create
							an unforgettable dining experience for your special occasion
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
