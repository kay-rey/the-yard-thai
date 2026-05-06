"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const STORAGE_KEY = "yard-thai-mothers-day-promo-2026-dismissed";

const TOAST_ORDER_URL =
	"https://www.toasttab.com/local/order/the-yard-thai-cuisine-5889-kanan-rd";

const PROMO_IMAGE = {
	src: "/images/mother's-day/33475354-5F67-45E3-90A1-2960EB1B4745.JPG",
	alt: "Mother's Day at The Yard Thai Cuisine — every mom dining in receives a treat",
	width: 1581,
	height: 2048,
} as const;

export default function MothersDayPromoDialog() {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (isHome) {
			setOpen(true);
			return;
		}
		try {
			if (localStorage.getItem(STORAGE_KEY) === "1") {
				setOpen(false);
				return;
			}
		} catch {
			// storage blocked — still show on inner pages until dismissed this session
		}
		setOpen(true);
	}, [isHome, pathname]);

	const handleOpenChange = useCallback(
		(next: boolean) => {
			setOpen(next);
			if (!next && !isHome) {
				try {
					localStorage.setItem(STORAGE_KEY, "1");
				} catch {
					// ignore
				}
			}
		},
		[isHome]
	);

	function dismiss() {
		handleOpenChange(false);
	}

	return (
		<Dialog
			open={open}
			onOpenChange={handleOpenChange}
		>
			<DialogContent className="max-w-[min(100vw-2rem,24rem)] gap-0 overflow-hidden border-primary/25 p-0 sm:max-w-lg">
				<div className="flex w-full justify-center px-3 pt-4 sm:px-4 sm:pt-5">
					<Image
						src={PROMO_IMAGE.src}
						alt={PROMO_IMAGE.alt}
						width={PROMO_IMAGE.width}
						height={PROMO_IMAGE.height}
						className="h-auto max-h-[min(72vh,42rem)] w-auto max-w-full object-contain"
						sizes="(max-width: 640px) calc(100vw - 2.5rem), 512px"
						priority
					/>
				</div>
				<div className="space-y-4 p-5 sm:p-6">
					<DialogHeader className="text-center sm:text-left space-y-2">
						<DialogTitle className="text-xl font-semibold text-accent sm:text-2xl text-balance">
							Celebrate Mother&apos;s Day With Us
						</DialogTitle>
						<DialogDescription className="text-base text-muted-foreground text-pretty">
							This Mother&apos;s Day, every mom who dines in with us gets a
							special treat on the house. Enjoy authentic Thai flavors—order
							online, call, or join us at the restaurant.
						</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col gap-2">
						<Button
							className="w-full bg-primary font-semibold text-white hover:bg-primary/90"
							asChild
						>
							<Link
								href={TOAST_ORDER_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2"
								onClick={dismiss}
							>
								Order Online
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button
							variant="outline"
							className="w-full border-primary/40 hover:bg-primary/10"
							asChild
						>
							<Link
								href="tel:+18185327272"
								className="inline-flex items-center justify-center gap-2"
								onClick={dismiss}
							>
								<Phone className="h-4 w-4" />
								(818) 532-7272
							</Link>
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
