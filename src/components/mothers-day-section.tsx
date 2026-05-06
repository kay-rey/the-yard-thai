import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Phone } from "lucide-react";
import MothersDayCarousel from "@/components/mothers-day-carousel";

const TOAST_ORDER_URL =
	"https://www.toasttab.com/local/order/the-yard-thai-cuisine-5889-kanan-rd";

export default function MothersDaySection() {
	return (
		<section
			id="mothers-day"
			className="scroll-mt-24 pt-8 pb-8 px-4 md:pt-12 md:pb-16 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/50"
		>
			<div className="mx-auto max-w-6xl">
				<div className="text-center mb-6 md:mb-8">
					<div className="mb-3 flex justify-center">
						<div className="rounded-full bg-primary/10 p-3 scroll-animate scale-in delay-100">
							<Heart
								className="h-8 w-8 text-primary"
								aria-hidden
							/>
						</div>
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl text-accent mb-4 text-balance scroll-animate slide-in-up delay-100">
						Celebrate Mother&apos;s Day With Us
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 mb-8">
					<div className="order-2 lg:order-1 flex items-center justify-center">
						<MothersDayCarousel />
					</div>
					<div className="order-1 lg:order-2 flex flex-col justify-center">
						<div className="space-y-4 text-muted-foreground">
							<p className="text-lg leading-relaxed scroll-animate slide-in-up delay-200">
							On Mother&apos;s Day, every mom who joins us for dine-in receives a
							special treat from our kitchen—our way of saying thank you.
							</p>
							<p className="text-lg leading-relaxed scroll-animate slide-in-up delay-200">
								Whether you&apos;re gathering the family at our tables or
								ordering her favorites to enjoy at home, we&apos;d love to be
								part of your Mother&apos;s Day.
							</p>
							<p className="text-lg leading-relaxed scroll-animate slide-in-up delay-200">
								Reserve a table or stop by for dine-in, or order online for
								pickup and delivery—call us with any questions.
							</p>
						</div>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-start">
							<Button
								size="lg"
								className="w-full sm:w-auto text-lg font-semibold bg-primary hover:bg-primary/90 text-white"
								asChild
							>
								<Link
									href={TOAST_ORDER_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2"
								>
									Order Online
									<ArrowRight className="h-5 w-5" />
								</Link>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="w-full sm:w-auto text-lg font-semibold border-primary/40 hover:bg-primary/10"
								asChild
							>
								<Link
									href="tel:+18185327272"
									className="inline-flex items-center justify-center gap-2"
								>
									<Phone className="h-5 w-5" />
									<span>(818) 532-7272</span>
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
