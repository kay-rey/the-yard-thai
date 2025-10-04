import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="relative h-screen w-full overflow-hidden">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0">
				<Image
					src="/menu-pictures/theyardheropicture.jpg"
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
							className="px-8 py-3 text-lg font-semibold sm:px-10 hover:bg-muted-foreground/80 hover:text-white/80"
						>
							Order Online
						</Button>
						<Button
						
							size="lg"
							className="bg-white text-primary  px-8 py-3 text-lg font-semibold sm:px-10 hover:bg-muted-foreground/80 hover:text-white/80"
						>
							View Menu
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
