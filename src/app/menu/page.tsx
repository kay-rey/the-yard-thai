import MenuSection from "@/components/menu-section";

export default function MenuPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
						Our Menu
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
						Authentic Thai cuisine crafted with fresh ingredients and
						traditional recipes
					</p>
				</div>
			</section>

			{/* Menu Content */}
			<MenuSection />
		</div>
	);
}
