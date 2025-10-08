"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section className="relative h-[calc(100dvh-4rem)] w-full overflow-hidden">
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
				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50" />
				{/* Decorative Pattern Overlay */}
				<div
					className="absolute inset-0 opacity-30"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1a244' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			{/* Floating Decorative Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Floating Spices */}
				<div
					className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float"
					style={{ animationDelay: "0s" }}
				/>
				<div
					className="absolute top-32 right-16 w-3 h-3 bg-secondary/30 rounded-full animate-float"
					style={{ animationDelay: "1s" }}
				/>
				<div
					className="absolute top-48 left-1/4 w-2 h-2 bg-accent/25 rounded-full animate-float"
					style={{ animationDelay: "2s" }}
				/>
				<div
					className="absolute bottom-32 right-20 w-5 h-5 bg-primary/15 rounded-full animate-float"
					style={{ animationDelay: "1.5s" }}
				/>
				<div
					className="absolute bottom-20 left-20 w-3 h-3 bg-secondary/20 rounded-full animate-float"
					style={{ animationDelay: "0.5s" }}
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 flex h-full items-center justify-center">
				<div className="mx-auto max-w-6xl px-4 text-center">
					{/* Main Heading with Enhanced Typography */}
					<h1
						className={`mb-6 text-7xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-tight transition-all duration-1000 delay-200 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						<span className="block">The Yard</span>
						<span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
							Thai Cuisine
						</span>
					</h1>

					{/* Subheading with Better Spacing */}
					<p
						className={`mb-4 text-4xl font-parisienne text-white/90 transition-all duration-1000 delay-400 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-6"
						}`}
					>
						A Taste of Tradition
					</p>

					{/* Restaurant Info Cards */}
					<div
						className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 delay-800 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}
					>
						<div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
							<MapPin className="w-4 h-4 text-primary" />
							<span className="text-sm text-white">Agoura Hills, CA</span>
						</div>
						<div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
							<Clock className="w-4 h-4 text-primary" />
							<span className="text-sm text-white">Open Daily</span>
						</div>
						<div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
							<Utensils className="w-4 h-4 text-primary" />
							<span className="text-sm text-white">Dine In & Takeout</span>
						</div>
					</div>

					{/* Enhanced Call-to-Action Buttons */}
					<div
						className={`flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 transition-all duration-1000 delay-1000 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}
					>
						<Button
							size="lg"
							className="group px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg lg:px-12 lg:py-6 lg:text-xl font-semibold bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
							asChild
						>
							<Link
								href="https://www.toasttab.com/local/order/the-yard-thai-cuisine-5889-kanan-rd"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								Order Online
								<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
							</Link>
						</Button>
						<Button
							size="lg"
							className="group px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg lg:px-12 lg:py-6 lg:text-xl font-semibold bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
							asChild
						>
							<Link href="/menu" className="flex items-center gap-2">
								View Menu
								<Utensils className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
