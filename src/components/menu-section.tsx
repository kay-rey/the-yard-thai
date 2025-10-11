"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { getCategories, type MenuItem } from "@/lib/menu-data";
import { MenuItemCard } from "@/components/menu-item-card";
import { urlFor } from "@/sanity/lib/image";
import { formatPrice } from "@/lib/price-format";

interface MenuSectionProps {
	menuItems: MenuItem[];
}

export default function MenuSection({ menuItems }: MenuSectionProps) {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(
		null
	);

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
	}, [selectedCategory, menuItems]);

	const categories = getCategories();
	const categoriesToRender =
		selectedCategory === "all"
			? categories
			: categories.filter((c) => c.id === selectedCategory);

	return (
		<section>
			<div className="container mx-auto px-4">
				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-2">
					<Button
						variant={selectedCategory === "all" ? "default" : "outline"}
						onClick={() => setSelectedCategory("all")}
						className={`mb-2 transition-all duration-200 ${
							selectedCategory === "all"
								? "bg-primary text-primary-foreground shadow-md"
								: "bg-white border-2 border-primary/20 text-charcoal hover:border-primary hover:bg-warm-amber/12 hover:text-charcoal hover:shadow-lg"
						}`}
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
								className={`mb-2 transition-all duration-200 ${
									selectedCategory === category.id
										? "bg-primary text-primary-foreground shadow-md"
										: "bg-white border-2 border-primary/20 text-charcoal hover:border-primary hover:bg-warm-amber/12 hover:text-charcoal hover:shadow-lg"
								}`}
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
							<React.Fragment key={category.id}>
								<div
									className={`sticky top-16 z-40 bg-background py-2 -mx-4 px-4 border-b ${
										index > 0 ? "mt-8" : ""
									}`}
								>
									<div className="flex items-center gap-3">
										<category.icon className="w-6 h-6 text-primary" />
										<h2 className="text-2xl text-foreground">
											{category.name}
										</h2>
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
									{categoryItems.map((item) => (
										<MenuItemCard
											key={item._id}
											item={item}
											onClick={() => setSelectedMenuItem(item)}
										/>
									))}
								</div>
							</React.Fragment>
						);
					})}
				</div>

				{/* Order Online CTA */}
				<div className="text-center mt-16">
					<Card className="max-w-2xl mx-auto mb-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
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

			{/* Menu Item Modal */}
			<Dialog
				open={!!selectedMenuItem}
				onOpenChange={(isOpen) => {
					if (!isOpen) {
						setSelectedMenuItem(null);
					}
				}}
			>
				<DialogContent
					className={`transition-all duration-300 max-h-[90vh] overflow-y-auto bg-white ${
						selectedMenuItem?.image ? "max-w-5xl" : "max-w-md"
					}`}
				>
					{selectedMenuItem && (
						<>
							<DialogHeader>
								<DialogTitle className="text-3xl text-foreground pr-8">
									{selectedMenuItem.name}
								</DialogTitle>
							</DialogHeader>

							<div
								className={
									selectedMenuItem.image
										? "flex flex-col lg:flex-row gap-8 pt-4"
										: "pt-4"
								}
							>
								{selectedMenuItem.image && (
									<div
										// FINAL CHANGE: Responsive aspect ratio for mobile vs. desktop
										className="relative w-full lg:w-1/2 rounded-xl overflow-hidden aspect-[4/3] lg:aspect-square"
									>
										<Image
											src={urlFor(selectedMenuItem.image)
												.width(800)
												.height(600)
												.url()}
											alt={selectedMenuItem.imageAlt || selectedMenuItem.name}
											fill
											className="object-cover"
											sizes="(max-width: 1024px) 90vw, 50vw"
										/>
									</div>
								)}

								<div
									className={`flex flex-col space-y-6 ${
										selectedMenuItem.image ? "lg:w-1/2" : "w-full"
									}`}
								>
									<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
										<div className="text-3xl font-bold text-primary">
											{formatPrice(selectedMenuItem.price)}
										</div>
										<div className="flex flex-wrap gap-2">
											{selectedMenuItem.popular && (
												<Badge
													variant="secondary"
													className="bg-primary text-primary-foreground text-sm px-3 py-1"
												>
													Popular
												</Badge>
											)}
											{selectedMenuItem.spicy && (
												<Badge
													variant="destructive"
													className="text-sm px-3 py-1"
												>
													🌶️ Spicy
												</Badge>
											)}
											{selectedMenuItem.vegetarian && (
												<Badge
													variant="outline"
													className="border-green-500 text-green-600 text-sm px-3 py-1"
												>
													🌱 Vegetarian
												</Badge>
											)}
										</div>
									</div>

									<div>
										<h3 className="text-xl text-foreground mb-3">
											Description
										</h3>
										<p className="text-muted-foreground text-base leading-relaxed">
											{selectedMenuItem.description}
										</p>
									</div>

									<div className="pt-4 mt-auto">
										<Button
											size="lg"
											className="w-full text-lg font-bold"
											asChild
										>
											<a
												href="https://www.toasttab.com/local/order/the-yard-thai-cuisine-5889-kanan-rd"
												target="_blank"
												rel="noopener noreferrer"
											>
												Order This Item
											</a>
										</Button>
									</div>
								</div>
							</div>
						</>
					)}
				</DialogContent>
			</Dialog>
		</section>
	);
}
