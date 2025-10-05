"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { menuItems, categories, type MenuItem } from "@/lib/menu-data";
import { MenuItemCard } from "@/components/menu-item-card";

export default function MenuSection() {
	const [selectedCategory, setSelectedCategory] = useState("all");

	// REFINEMENT 1: Simplified state. We only need to know which item is selected.
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
										<h2 className="text-2xl font-bold text-foreground">
											{category.name}
										</h2>
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
									{/* REFINEMENT 2: Using the extracted component */}
									{categoryItems.map((item) => (
										<MenuItemCard
											key={item.id}
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
					{/* ... (CTA Card remains the same) ... */}
				</div>
			</div>

			{/* Menu Item Modal */}
			<Dialog
				// REFINEMENT 1: State is now derived and the close handler is cleaner.
				open={!!selectedMenuItem}
				onOpenChange={(isOpen) => {
					if (!isOpen) {
						setSelectedMenuItem(null);
					}
				}}
			>
				<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
					{selectedMenuItem && (
						<>
							<DialogHeader>
								<DialogTitle className="text-3xl font-bold text-foreground pr-8">
									{selectedMenuItem.name}
								</DialogTitle>
							</DialogHeader>

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
								{selectedMenuItem.image && (
									<div className="relative h-80 lg:h-96 w-full rounded-lg overflow-hidden">
										<Image
											src={selectedMenuItem.image}
											alt={selectedMenuItem.name}
											fill
											className="object-cover"
											sizes="(max-width: 1024px) 90vw, 50vw"
											// REFINEMENT 3: Removed 'priority' as this image is not visible on initial page load.
										/>
									</div>
								)}

								<div className="flex flex-col space-y-6">
									<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
										<div className="text-3xl font-bold text-primary">
											{selectedMenuItem.price}
										</div>
										<div className="flex flex-wrap gap-2">
											{/* ... (Badges remain the same) ... */}
										</div>
									</div>

									<div>
										<h3 className="text-xl font-semibold text-foreground mb-3">
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
