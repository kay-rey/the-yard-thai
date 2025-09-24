"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Navbar() {
	return (
		<Collapsible className="sticky top-0 z-50 w-full border-b bg-background">
			{/* Main navbar content */}
			<div className="flex h-16 items-center justify-between px-4 md:px-6">
				{/* Logo */}
				<Link href="/" className="text-3xl font-bold text-foreground">
					The Yard Thai
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-6">
					<Button
						variant="link"
						asChild
						className="text-foreground hover:text-primary text-lg font-bold"
					>
						<Link href="/">Home</Link>
					</Button>
					<Button
						variant="link"
						asChild
						className="text-foreground hover:text-primary text-lg font-bold"
					>
						<Link href="/menu">Menu</Link>
					</Button>
					<Button variant="default" asChild className="text-lg font-bold">
						<Link href="/contact">Order Online</Link>
					</Button>
				</nav>

				{/* Mobile hamburger menu */}
				<CollapsibleTrigger asChild className="md:hidden">
					<Button
						variant="ghost"
						size="lg"
						aria-label="Toggle menu"
						className="h-12 w-12"
					>
						<Menu className="h-6 w-6" />
					</Button>
				</CollapsibleTrigger>
			</div>

			{/* Mobile Navigation Content */}
			<CollapsibleContent className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg">
				<div className="px-4 py-4 space-y-2">
					<Button
						variant="link"
						asChild
						className="w-full justify-start text-foreground hover:text-primary text-lg font-bold"
					>
						<Link href="/">Home</Link>
					</Button>
					<Button
						variant="link"
						asChild
						className="w-full justify-start text-foreground hover:text-primary text-lg font-bold"
					>
						<Link href="/menu">Menu</Link>
					</Button>
					<Button
						variant="default"
						asChild
						className="w-full justify-start text-lg font-bold"
					>
						<Link href="/contact">Order Online</Link>
					</Button>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
