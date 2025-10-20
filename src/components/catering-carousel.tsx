"use client";

import { useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

// Curated selection of the best catering images for the main page carousel
const cateringCarouselImages = [
	{
		src: "/images/catering/catering-spread.JPG",
		alt: "Beautiful catering spread showcasing variety of Thai dishes",
	},
	{
		src: "/images/catering/party-catering.jpg",
		alt: "Professional party catering setup with elegant presentation",
	},
	{
		src: "/images/catering/corporate-catering.jpeg",
		alt: "Corporate catering event with professional setup",
	},
	{
		src: "/images/catering/chicken-satay.JPG",
		alt: "Delicious chicken satay skewers ready for catering",
	},
	{
		src: "/images/catering/spring-rolls-and-chicken-wings.JPG",
		alt: "Fresh spring rolls and chicken wings appetizer platter",
	},
	{
		src: "/images/catering/mango-sticky-rice.jpg",
		alt: "Traditional Thai dessert - mango sticky rice",
	},
];

export default function CateringCarousel() {
	return (
		<div className="relative w-full">
			<Carousel
				className="w-full"
				opts={{
					align: "start",
					loop: true,
				}}
				plugins={[
					Autoplay({
						delay: 3000,
						stopOnInteraction: false,
						stopOnMouseEnter: true,
					}),
				]}
			>
				<CarouselContent>
					{cateringCarouselImages.map((image, index) => (
						<CarouselItem key={index}>
							<div className="relative h-80 w-full overflow-hidden rounded-lg lg:h-96">
								<Image
									src={image.src}
									alt={image.alt}
									fill
									className="object-cover object-center"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									priority={index === 0}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-2" />
				<CarouselNext className="right-2" />
			</Carousel>
		</div>
	);
}
