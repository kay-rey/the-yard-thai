import Image from "next/image";

export default function AboutSection() {
	return (
		<section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
					{/* Left Column - Image */}
					<div className="order-2 lg:order-1 flex items-center">
						<div className="relative h-80 w-full overflow-hidden rounded-lg lg:h-96">
							<Image
								src="/images/interior/IMG_6891.jpeg"
								alt="Cozy interior of The Yard Thai restaurant with warm lighting and traditional Thai decor"
								fill
								className="object-cover object-bottom"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>

					{/* Right Column - Content */}
					<div className="order-1 lg:order-2 flex flex-col justify-center">
						<h2 className="text-center mb-6 text-3xl font-bold text-accent sm:text-4xl lg:text-5xl">
							Our Story
						</h2>

						<div className="space-y-4 text-muted-foreground">
							<p className="text-lg leading-relaxed">
								Welcome to The Yard Thai Cuisine, a women-owned and operated
								restaurant in the heart of Agoura Hills, CA. We are passionate
								about bringing you the authentic flavors of Thailand, crafted
								with the freshest ingredients and traditional cooking techniques
								passed down through generations.
							</p>

							<p className="text-lg leading-relaxed">
								Every dish we serve celebrates Thailand&apos;s rich culinary
								heritage, from our complex signature curries to the perfect
								balance of sweet, sour, salty, and spicy in our classic pad
								thai. Our commitment to fresh, quality ingredients ensures that
								every bite tells the story of authentic Thai cuisine.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
