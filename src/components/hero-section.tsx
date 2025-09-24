import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="relative h-screen w-full overflow-hidden">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0">
				<Image
					src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
					alt="Delicious Thai cuisine with colorful dishes including pad thai, curry, and fresh vegetables"
					fill
					className="object-cover"
					priority
					sizes="100vw"
				/>
				{/* Dark Overlay */}
				<div className="absolute inset-0 bg-black/40" />
			</div>

			{/* Content */}
			<div className="relative z-10 flex h-full items-center justify-center">
				<div className="mx-auto max-w-4xl px-4 text-center text-white">
					{/* Main Heading */}
					<h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
						The Yard Thai Cuisine
					</h1>

					{/* Subheading */}
					<p className="mb-8 text-lg font-medium text-gray-200 sm:text-xl md:text-2xl">
						Authentic Flavors, Modern Twist
					</p>

					{/* Call-to-Action Buttons */}
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
						<Button
							size="lg"
							className="bg-[var(--jade-green)] px-8 py-3 text-lg font-semibold text-white hover:bg-[var(--warm-sand)] hover:text-[var(--charcoal)] active:bg-[var(--warm-sand)] active:text-[var(--charcoal)] active:scale-95 transition-all duration-200 sm:px-10 touch-manipulation"
						>
							Order Online
						</Button>
						<Button
							size="lg"
							className="border-2 border-white bg-white px-8 py-3 text-lg font-semibold text-[var(--charcoal)] hover:bg-[var(--golden-saffron)] hover:border-[var(--golden-saffron)] active:bg-[var(--golden-saffron)] active:border-[var(--golden-saffron)] active:scale-95 transition-all duration-200 sm:px-10 touch-manipulation"
						>
							View Menu
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
