import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MenuItem } from "@/lib/menu-data";
import { urlFor } from "@/sanity/lib/image";
import { formatPrice } from "@/lib/price-format";

interface MenuItemCardProps {
	item: MenuItem;
	onClick: () => void;
}

export function MenuItemCard({ item, onClick }: MenuItemCardProps) {
	return (
		<Card
			className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 overflow-hidden p-0 bg-white border border-gray-200"
			onClick={onClick}
		>
			{item.image && (
				<div className="relative h-48 w-full">
					<Image
						src={urlFor(item.image).width(800).height(600).quality(90).url()}
						alt={item.imageAlt || item.name}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						placeholder="blur"
					/>
				</div>
			)}
			<CardHeader className="pb-3 px-6 pt-6">
				<div className="flex items-start justify-between">
					<CardTitle className="text-lg font-bold">{item.name}</CardTitle>
					<div className="flex flex-shrink-0 gap-1 ml-2">
						{item.popular && (
							<Badge
								variant="secondary"
								className="bg-primary text-primary-foreground"
							>
								Popular
							</Badge>
						)}
						{item.spicy && <Badge variant="destructive">🌶️ Spicy</Badge>}
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
					{formatPrice(item.price)}
				</div>
			</CardHeader>
			<CardContent className="px-6 pb-6">
				<p className="text-muted-foreground text-sm leading-relaxed">
					{item.description}
				</p>
			</CardContent>
		</Card>
	);
}
