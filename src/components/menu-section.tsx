"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Utensils, Leaf, IceCream } from "lucide-react";

interface MenuItem {
	id: string;
	name: string;
	description: string;
	price: string;
	category: string;
	spicy?: boolean;
	vegetarian?: boolean;
	popular?: boolean;
	image?: string;
}

const menuItems: MenuItem[] = [
	// Appetizers
	{
		id: "fresh-spring-rolls",
		name: "Fresh Spring Rolls",
		description:
			"Fresh vegetables and herbs wrapped in rice paper, served with peanut sauce",
		price: "$8.95",
		category: "appetizers",
		vegetarian: true,
		image: "/menu-pictures/Fresh spring rolls_.jpg",
	},
	{
		id: "gyoza",
		name: "Gyoza",
		description: "Pan-fried dumplings filled with pork and vegetables",
		price: "$7.95",
		category: "appetizers",
		image: "/menu-pictures/Gyoza.jpg",
	},
	{
		id: "veggie-eggroll",
		name: "Veggie Eggroll",
		description:
			"Crispy vegetable spring rolls served with sweet and sour sauce",
		price: "$6.95",
		category: "appetizers",
		vegetarian: true,
		image: "/menu-pictures/Veggie Eggroll_.jpg",
	},
	{
		id: "thai-toast",
		name: "Thai Toast",
		description: "Crispy bread topped with ground pork and herbs",
		price: "$8.95",
		category: "appetizers",
		image: "/menu-pictures/Thai toast_.jpg",
	},

	// Salads
	{
		id: "house-salad",
		name: "House Salad",
		description: "Mixed greens with tomatoes, cucumbers, and house dressing",
		price: "$7.95",
		category: "salads",
		vegetarian: true,
	},
	{
		id: "beef-salad",
		name: "Beef Salad",
		description:
			"Grilled beef with mixed greens, tomatoes, and spicy lime dressing",
		price: "$12.95",
		category: "salads",
		spicy: true,
		image: "/menu-pictures/Beef salad_.jpg",
	},
	{
		id: "larb",
		name: "Larb",
		description:
			"Ground meat salad with fresh herbs, lime, and roasted rice powder",
		price: "$11.95",
		category: "salads",
		spicy: true,
		image: "/menu-pictures/Larb.jpg",
	},
	{
		id: "papaya-salad",
		name: "Papaya Salad",
		description:
			"Shredded green papaya with tomatoes, green beans, and spicy dressing",
		price: "$9.95",
		category: "salads",
		spicy: true,
		vegetarian: true,
		image: "/menu-pictures/Papaya salad.jpg",
	},
	{
		id: "silver-noodle-salad",
		name: "Silver Noodle Salad",
		description: "Glass noodles with shrimp, ground pork, and fresh vegetables",
		price: "$10.95",
		category: "salads",
	},

	// Soups
	{
		id: "tom-yum-thai-noodle-soup",
		name: "Tom Yum Thai Noodle Soup",
		description:
			"Spicy and sour soup with rice noodles, shrimp, and fresh herbs",
		price: "$12.95",
		category: "soups",
		spicy: true,
		popular: true,
		image: "/menu-pictures/Tom yum Thai noodle soup.jpg",
	},

	// Rice Dishes
	{
		id: "chicken-over-rice",
		name: "Chicken Over Rice",
		description: "Grilled chicken served over steamed jasmine rice",
		price: "$11.95",
		category: "rice",
		image: "/menu-pictures/Chicken over rice_.jpg",
	},
	{
		id: "crab-fried-rice",
		name: "Crab Fried Rice",
		description: "Fried rice with fresh crab meat, eggs, and vegetables",
		price: "$14.95",
		category: "rice",
		popular: true,
		image: "/menu-pictures/Crab fried rice.jpg",
	},
	{
		id: "house-fried-rice-combination",
		name: "House Fried Rice Combination",
		description: "Fried rice with chicken, beef, shrimp, and vegetables",
		price: "$13.95",
		category: "rice",
	},
	{
		id: "spicy-fried-rice",
		name: "Spicy Fried Rice",
		description:
			"Fried rice with chili paste, basil, and your choice of protein",
		price: "$12.95",
		category: "rice",
		spicy: true,
	},
	{
		id: "pineapple-fried-rice",
		name: "Pineapple Fried Rice",
		description: "Fried rice with pineapple, cashews, and curry powder",
		price: "$12.95",
		category: "rice",
	},

	// Noodles
	{
		id: "padthai",
		name: "Pad Thai",
		description:
			"Stir-fried rice noodles with shrimp, tofu, bean sprouts, and peanuts",
		price: "$12.95",
		category: "noodles",
		popular: true,
		image: "/menu-pictures/Padthai.jpg",
	},
	{
		id: "pad-see-eiw-noodle",
		name: "Pad See Eiw Noodle",
		description:
			"Wide rice noodles stir-fried with Chinese broccoli and soy sauce",
		price: "$11.95",
		category: "noodles",
	},
	{
		id: "pad-khee-mao-noodle",
		name: "Pad Khee Mao Noodle",
		description:
			"Drunken noodles with basil, chili, and your choice of protein",
		price: "$12.95",
		category: "noodles",
		spicy: true,
	},
	{
		id: "pad-woon-sen-noodle",
		name: "Pad Woon Sen Noodle",
		description: "Stir-fried glass noodles with vegetables and protein",
		price: "$11.95",
		category: "noodles",
	},
	{
		id: "chowmein-noodle",
		name: "Chowmein Noodle",
		description: "Stir-fried egg noodles with vegetables and protein",
		price: "$11.95",
		category: "noodles",
	},
	{
		id: "gai-krua-noodle",
		name: "Gai Krua Noodle",
		description: "Rice noodles with ground chicken and vegetables",
		price: "$11.95",
		category: "noodles",
	},
	{
		id: "khaw-soi-noodle",
		name: "Khaw Soi Noodle",
		description: "Northern Thai curry noodle soup with crispy and soft noodles",
		price: "$13.95",
		category: "noodles",
		spicy: true,
	},

	// Curries
	{
		id: "yellow-curry",
		name: "Yellow Curry",
		description:
			"Mild curry with potatoes, carrots, and onions in coconut milk",
		price: "$12.95",
		category: "curries",
		image: "/menu-pictures/Yellow curry_.jpg",
	},
	{
		id: "mussaman-curry",
		name: "Mussaman Curry",
		description:
			"Rich curry with potatoes, onions, and peanuts in coconut milk",
		price: "$13.95",
		category: "curries",
		image: "/menu-pictures/Mussaman curry.jpg",
	},
	{
		id: "pumpkin-curry",
		name: "Pumpkin Curry",
		description: "Creamy curry with pumpkin and vegetables in coconut milk",
		price: "$12.95",
		category: "curries",
		vegetarian: true,
	},
	{
		id: "spicy-curry-fish",
		name: "Spicy Curry Fish",
		description: "Spicy red curry with fish and vegetables",
		price: "$14.95",
		category: "curries",
		spicy: true,
	},

	// Stir-Fried Dishes
	{
		id: "spicy-basil-leaves",
		name: "Spicy Basil Leaves",
		description:
			"Stir-fried with fresh basil, chili, and your choice of protein",
		price: "$12.95",
		category: "stir-fried",
		spicy: true,
	},
	{
		id: "spicy-basil-leaves-with-beef",
		name: "Spicy Basil Leaves with Beef",
		description: "Stir-fried beef with fresh basil and chili",
		price: "$13.95",
		category: "stir-fried",
		spicy: true,
	},
	{
		id: "spicy-basil-leaves-with-grounded-chicken",
		name: "Spicy Basil Leaves with Ground Chicken",
		description: "Stir-fried ground chicken with fresh basil and chili",
		price: "$12.95",
		category: "stir-fried",
		spicy: true,
	},
	{
		id: "spicy-eggplant-with-tofu",
		name: "Spicy Eggplant with Tofu",
		description: "Stir-fried eggplant and tofu in spicy sauce",
		price: "$11.95",
		category: "stir-fried",
		spicy: true,
		vegetarian: true,
	},
	{
		id: "veggie-delights",
		name: "Veggie Delights",
		description: "Stir-fried mixed vegetables in light sauce",
		price: "$10.95",
		category: "stir-fried",
		vegetarian: true,
	},

	// Grilled Dishes
	{
		id: "grilled-beef",
		name: "Grilled Beef",
		description: "Marinated grilled beef served with sticky rice",
		price: "$15.95",
		category: "grilled",
		image: "/menu-pictures/Grilled beef_.jpg",
	},
	{
		id: "grilled-pork",
		name: "Grilled Pork",
		description: "Marinated grilled pork served with sticky rice",
		price: "$13.95",
		category: "grilled",
	},
	{
		id: "grilled-shrimp",
		name: "Grilled Shrimp",
		description: "Grilled shrimp with garlic and herbs",
		price: "$14.95",
		category: "grilled",
	},
	{
		id: "chicken-sa-tae",
		name: "Chicken Sa Tae",
		description: "Grilled chicken skewers with peanut sauce",
		price: "$12.95",
		category: "grilled",
		image: "/menu-pictures/Chicken Sa tae.jpg",
	},
	{
		id: "spicy-wings",
		name: "Spicy Wings",
		description: "Chicken wings marinated in spicy sauce",
		price: "$10.95",
		category: "grilled",
		spicy: true,
	},

	// Special Dishes
	{
		id: "orange-chicken",
		name: "Orange Chicken",
		description: "Crispy chicken in sweet and tangy orange sauce",
		price: "$13.95",
		category: "special",
	},
	{
		id: "salmon-teriyaki",
		name: "Salmon Teriyaki",
		description: "Grilled salmon with teriyaki glaze",
		price: "$16.95",
		category: "special",
	},

	// Desserts
	{
		id: "mango-sticky-rice",
		name: "Mango & Sticky Rice",
		description: "Sweet sticky rice with fresh mango and coconut milk",
		price: "$7.95",
		category: "desserts",
		vegetarian: true,
		popular: true,
		image: "/menu-pictures/Mango & sticky rice.jpg",
	},
	{
		id: "coconut-ice-cream-with-sticky-rice",
		name: "Coconut Ice Cream with Sticky Rice",
		description: "Coconut ice cream served with warm sticky rice",
		price: "$6.95",
		category: "desserts",
		vegetarian: true,
	},
];

const categories = [
	{ id: "appetizers", name: "Appetizers", icon: Utensils },
	{ id: "salads", name: "Salads", icon: Leaf },
	{ id: "soups", name: "Soups", icon: Utensils },
	{ id: "rice", name: "Rice Dishes", icon: Utensils },
	{ id: "noodles", name: "Noodles", icon: Utensils },
	{ id: "curries", name: "Curries", icon: Utensils },
	{ id: "stir-fried", name: "Stir-Fried", icon: Utensils },
	{ id: "grilled", name: "Grilled", icon: Utensils },
	{ id: "special", name: "Special Dishes", icon: Utensils },
	{ id: "desserts", name: "Desserts", icon: IceCream },
];

export default function MenuSection() {
	const [selectedCategory, setSelectedCategory] = useState("all");

	const filteredItems =
		selectedCategory === "all"
			? menuItems
			: menuItems.filter((item) => item.category === selectedCategory);

	return (
		<section className="py-2 md:py-3">
			<div className="container mx-auto px-4">
				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-2 mb-8">
					<Button
						variant={selectedCategory === "all" ? "default" : "outline"}
						onClick={() => setSelectedCategory("all")}
						className="mb-2"
					>
						All Items
					</Button>
					{categories.map((category) => {
						const Icon = category.icon;
						return (
							<Button
								key={category.id}
								variant={
									selectedCategory === category.id ? "default" : "outline"
								}
								onClick={() => setSelectedCategory(category.id)}
								className="mb-2"
							>
								<Icon className="w-4 h-4 mr-2" />
								{category.name}
							</Button>
						);
					})}
				</div>

				{/* Menu Items */}
				<div className="space-y-8">
					{categories.map((category) => {
						const categoryItems =
							selectedCategory === "all"
								? menuItems.filter((item) => item.category === category.id)
								: menuItems.filter(
										(item) =>
											item.category === category.id &&
											item.category === selectedCategory
								  );

						if (categoryItems.length === 0) return null;

						return (
							<div key={category.id} className="space-y-4">
								<div className="flex items-center gap-3">
									<category.icon className="w-6 h-6 text-primary" />
									<h2 className="text-2xl font-bold text-foreground">
										{category.name}
									</h2>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{categoryItems.map((item) => (
										<Card
											key={item.id}
											className="hover:shadow-lg transition-shadow overflow-hidden p-0 bg-white border border-gray-200"
										>
											{/* Image */}
											{item.image && (
												<div className="relative h-48 w-full">
													<Image
														src={item.image}
														alt={item.name}
														fill
														className="object-cover"
														sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
													/>
												</div>
											)}

											<CardHeader className="pb-3 px-6 pt-6">
												<div className="flex items-start justify-between">
													<CardTitle className="text-lg font-bold">
														{item.name}
													</CardTitle>
													<div className="flex gap-1 ml-2">
														{item.popular && (
															<Badge
																variant="secondary"
																className="bg-primary text-primary-foreground"
															>
																Popular
															</Badge>
														)}
														{item.spicy && (
															<Badge variant="destructive">🌶️ Spicy</Badge>
														)}
														{item.vegetarian && (
															<Badge
																variant="outline"
																className="border-green-500 text-green-600"
															>
																🌱 Veg
															</Badge>
														)}
													</div>
												</div>
												<div className="text-primary font-bold text-xl">
													{item.price}
												</div>
											</CardHeader>
											<CardContent className="px-6 pb-6">
												<p className="text-muted-foreground text-sm leading-relaxed">
													{item.description}
												</p>
											</CardContent>
										</Card>
									))}
								</div>
							</div>
						);
					})}
				</div>

				{/* Order Online CTA */}
				<div className="text-center mt-16">
					<Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
						<CardContent className="py-8">
							<h3 className="text-2xl font-bold text-foreground mb-4">
								Ready to Order?
							</h3>
							<p className="text-muted-foreground mb-6">
								Experience authentic Thai flavors delivered to your door
							</p>
							<Button size="lg" className="text-lg font-bold" asChild>
								<a
									href="https://www.toasttab.com/local/order/the-yard-thai-cuisine-5889-kanan-rd"
									target="_blank"
									rel="noopener noreferrer"
								>
									Order Online Now
								</a>
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
