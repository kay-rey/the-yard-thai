import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="relative h-[100dvh] sm:h-[100dvh] md:h-[100dvh] lg:h-[calc(100vh-4rem)] w-full overflow-hidden">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0">
				<Image
					src="/images/logo/hero.jpg"
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
				<div className="mx-auto max-w-4xl px-4 text-center text-background">
					{/* Main Heading */}
					<h1 className="mb-6 text-7xl md:text-8xl">The Yard Thai Cuisine</h1>

					{/* Subheading */}
					<p className="mb-8 text-4xl md:text-5xl font-parisienne">
						A Taste of Tradition
					</p>

					{/* Call-to-Action Buttons */}
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
						<Button
							size="lg"
							className="px-8 py-3 text-lg font-semibold sm:px-10 hover:bg-muted-foreground/80 hover:text-white/80"
							asChild
						>
							<Link
								href="https://www.toasttab.com/local/order/the-yard-thai-cuisine-5889-kanan-rd"
								target="_blank"
								rel="noopener noreferrer"
							>
								Order Online
							</Link>
						</Button>
						<Button
							size="lg"
							className="bg-white text-primary  px-8 py-3 text-lg font-semibold sm:px-10 hover:bg-muted-foreground/80 hover:text-white/80"
							asChild
						>
							<Link href="/menu">View Menu</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
