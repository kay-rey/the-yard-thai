"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const mothersDayCarouselImages = [
	{
		src: "/images/mother's-day/1B231025-6C28-4CC2-A1B7-AD0F644DA44A.jpeg",
		alt: "Mother's Day celebration with authentic Thai dishes at The Yard Thai Cuisine",
	},
	{
		src: "/images/mother's-day/2C5096DF-8A8C-4E3F-BAF3-E14C356E8D0A.PNG",
		alt: "Festive table spread for Mother's Day dining at The Yard Thai",
	},
	{
		src: "/images/mother's-day/33475354-5F67-45E3-90A1-2960EB1B4745.JPG",
		alt: "Colorful Thai cuisine perfect for treating Mom on Mother's Day",
	},
	{
		src: "/images/mother's-day/73E3CE34-DC54-4083-8585-0874012A0D4A.jpeg",
		alt: "Elegant Mother's Day meal featuring Thai flavors in Agoura Hills",
	},
	{
		src: "/images/mother's-day/EE718496-92BE-4F93-B017-BCC2B4171E49.jpeg",
		alt: "Share a memorable Mother's Day with family at The Yard Thai Cuisine",
	},
	{
		src: "/images/mother's-day/FDA3BCA4-CDE5-4EB8-BB4B-58D558BA848E.jpeg",
		alt: "Mother's Day dining experience with fresh Thai food and warm hospitality",
	},
];

export default function MothersDayCarousel() {
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
					{mothersDayCarouselImages.map((image, index) => (
						<CarouselItem key={image.src}>
							<div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg">
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
