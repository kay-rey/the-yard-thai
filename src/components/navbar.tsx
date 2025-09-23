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
				<Link href="/" className="text-xl font-bold text-foreground">
					The Yard
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-6">
					<Link
						href="/"
						className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						Home
					</Link>
					<Link
						href="/menu"
						className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						Menu
					</Link>
					<Link
						href="/contact"
						className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						Contact
					</Link>
				</nav>

				{/* Mobile hamburger menu */}
				<CollapsibleTrigger asChild className="md:hidden">
					<Button variant="ghost" size="icon" aria-label="Toggle menu">
						<Menu className="h-6 w-6" />
					</Button>
				</CollapsibleTrigger>
			</div>

			{/* Mobile Navigation Content */}
			<CollapsibleContent className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg">
				<div className="px-4 py-4 space-y-2">
					<Link
						href="/"
						className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						Home
					</Link>
					<Link
						href="/menu"
						className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						Menu
					</Link>
					<Link
						href="/contact"
						className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						Contact
					</Link>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
