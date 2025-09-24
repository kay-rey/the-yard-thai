import Image from "next/image";

export default function AboutSection() {
	return (
		<section className="py-16 px-4 md:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
					{/* Left Column - Image */}
					<div className="order-2 lg:order-1 flex items-center">
						<div className="relative h-80 w-full overflow-hidden rounded-lg lg:h-96">
							<Image
								src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
								alt="Cozy interior of The Yard Thai restaurant with warm lighting and traditional Thai decor"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>

					{/* Right Column - Content */}
					<div className="order-1 lg:order-2 flex flex-col justify-center">
						<h2 className="mb-6 text-3xl font-bold text-[var(--charcoal)] sm:text-4xl lg:text-5xl">
							Our Story
						</h2>

						<div className="space-y-4 text-[var(--charcoal)]/80">
							<p className="text-lg leading-relaxed">
								At The Yard Thai Cuisine, we believe that authentic flavors tell
								the most compelling stories. Our journey began with a simple
								mission: to bring the vibrant, aromatic essence of Thailand to
								your table, crafted with traditional techniques and the freshest
								ingredients.
							</p>

							<p className="text-lg leading-relaxed">
								Every dish we serve is a celebration of Thailand&apos;s rich
								culinary heritage, from the complex layers of our signature
								curries to the perfect balance of sweet, sour, salty, and spicy
								in our classic pad thai. Our chefs bring decades of experience
								and an unwavering commitment to authenticity.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
