"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { menuItems, categories, type MenuItem } from "@/lib/menu-data";

export default function MenuSection() {
	const [selectedCategory, setSelectedCategory] = useState("all");

	// Memoize the grouped menu items for performance
	const groupedMenuItems = useMemo(() => {
		const grouped: { [key: string]: MenuItem[] } = {};
		const itemsToGroup =
			selectedCategory === "all"
				? menuItems
				: menuItems.filter((item) => item.category === selectedCategory);

		for (const item of itemsToGroup) {
			if (!grouped[item.category]) {
				grouped[item.category] = [];
			}
			grouped[item.category].push(item);
		}
		return grouped;
	}, [selectedCategory]);

	const categoriesToRender =
		selectedCategory === "all"
			? categories
			: categories.filter((c) => c.id === selectedCategory);

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
				<div>
					{categoriesToRender.map((category, index) => {
						const categoryItems = groupedMenuItems[category.id];

						if (!categoryItems || categoryItems.length === 0) return null;

						return (
							// Use React.Fragment to avoid adding an extra div that constrains the sticky header
							<React.Fragment key={category.id}>
								<div
									// Add margin-top for spacing, but not on the first header
									className={`sticky top-16 z-40 bg-background/95 backdrop-blur-sm py-2 -mx-4 px-4 ${
										index > 0 ? "mt-8" : ""
									}`}
								>
									<div className="flex items-center gap-3">
										<category.icon className="w-6 h-6 text-primary" />
										<h2 className="text-2xl font-bold text-foreground">
											{category.name}
										</h2>
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
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
							</React.Fragment>
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
