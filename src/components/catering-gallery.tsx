"use client";

import { useState } from "react";
import Image from "next/image";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
} from "@/components/ui/dialog";

// Curated selection of the best catering images
const cateringImages = [
	{
		src: "/images/catering/catering-spread.JPG",
		alt: "Beautiful catering spread showcasing variety of Thai dishes",
		title: "Catering Spread",
	},
	{
		src: "/images/catering/party-catering.jpg",
		alt: "Professional party catering setup with elegant presentation",
		title: "Party Catering",
	},
	{
		src: "/images/catering/corporate-catering.jpeg",
		alt: "Corporate catering event with professional setup",
		title: "Corporate Event",
	},
	{
		src: "/images/catering/chicken-satay.JPG",
		alt: "Delicious chicken satay skewers ready for catering",
		title: "Chicken Satay",
	},
	{
		src: "/images/catering/spring-rolls-and-chicken-wings.JPG",
		alt: "Fresh spring rolls and chicken wings appetizer platter",
		title: "Appetizer Platter",
	},
	{
		src: "/images/catering/mango-sticky-rice.jpg",
		alt: "Traditional Thai dessert - mango sticky rice",
		title: "Mango Sticky Rice",
	},
	{
		src: "/images/catering/dumplings.JPG",
		alt: "Steamed dumplings perfect for catering events",
		title: "Steamed Dumplings",
	},
	{
		src: "/images/catering/spicy-fish-curry.jpeg",
		alt: "Authentic Thai spicy fish curry for catering",
		title: "Spicy Fish Curry",
	},
	{
		src: "/images/catering/pineapple-rice.JPG",
		alt: "Colorful pineapple fried rice in catering presentation",
		title: "Pineapple Fried Rice",
	},
	{
		src: "/images/catering/butterfly-tea-lemonade.jpg",
		alt: "Refreshing butterfly tea lemonade for catering events",
		title: "Butterfly Tea Lemonade",
	},
	{
		src: "/images/catering/fruit-punch.jpg",
		alt: "Fresh fruit punch perfect for special events",
		title: "Fruit Punch",
	},
	{
		src: "/images/catering/veggie-spring-roll.jpeg",
		alt: "Fresh vegetable spring rolls for healthy catering options",
		title: "Vegetable Spring Rolls",
	},
];

export default function CateringGallery() {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	return (
		<div className="py-8 px-4 md:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-center mb-6 text-3xl text-accent sm:text-4xl lg:text-5xl">
						Our Catering in Action
					</h2>
					<p className="text-lg text-muted-foreground text-balance">
						See the quality and presentation of our authentic Thai cuisine at
						various events and celebrations
					</p>
				</div>

				{/* Image Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{cateringImages.map((image, index) => (
						<Dialog key={index}>
							<DialogTrigger asChild>
								<div className="group cursor-pointer">
									<div className="relative h-64 w-full overflow-hidden rounded-lg">
										<Image
											src={image.src}
											alt={image.alt}
											fill
											className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
											sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										/>
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
										<div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<h3 className="text-lg font-semibold">{image.title}</h3>
										</div>
									</div>
								</div>
							</DialogTrigger>
							<DialogContent className="max-w-4xl p-0">
								<DialogTitle className="sr-only">{image.title}</DialogTitle>
								<div className="relative">
									<Image
										src={image.src}
										alt={image.alt}
										width={1200}
										height={800}
										className="w-full h-auto rounded-lg"
										sizes="(max-width: 1024px) 100vw, 80vw"
									/>
									<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
										<h3 className="text-2xl font-bold text-white mb-2">
											{image.title}
										</h3>
										<p className="text-white/90">{image.alt}</p>
									</div>
								</div>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</div>
		</div>
	);
}
