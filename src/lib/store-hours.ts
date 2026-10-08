type DayHours = {
	open1: number;
	close1: number;
	open2: number;
	close2: number;
};

type StoreStatus = {
	status: "open" | "closing-soon" | "closed";
	isOpen: boolean;
	text: string;
	circleColor: string;
	textColor: string;
	textColorFooter: string;
};

/** Convert HHMM integer to minutes since midnight */
const toMinutes = (hhmm: number) => Math.floor(hhmm / 100) * 60 + (hhmm % 100);

/** True if `current` (HHMM) is in [open, close] inclusive */
const isWithinPeriod = (current: number, open: number, close: number) =>
	toMinutes(current) >= toMinutes(open) &&
	toMinutes(current) <= toMinutes(close);

/** True if within the last `minutesBefore` minutes of close (inclusive of close) */
const isClosingSoon = (
	current: number,
	close: number,
	minutesBefore = 15
) => {
	const currentMins = toMinutes(current);
	const closeMins = toMinutes(close);
	return (
		currentMins >= closeMins - minutesBefore && currentMins <= closeMins
	);
};

/** Pacific (America/Los_Angeles) day-of-week and HHMM wall-clock time */
const getPacificDateTime = (date = new Date()) => {
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: "America/Los_Angeles",
		weekday: "short",
		hour: "numeric",
		minute: "numeric",
		hourCycle: "h23",
	}).formatToParts(date);

	const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
	const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
	const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");

	const dayMap: Record<string, number> = {
		Sun: 0,
		Mon: 1,
		Tue: 2,
		Wed: 3,
		Thu: 4,
		Fri: 5,
		Sat: 6,
	};

	return {
		day: dayMap[weekday] ?? 0,
		time: hour * 100 + minute,
	};
};

// Hours match the footer / posted schedule (Agoura Hills, Pacific time)
const HOURS: Record<number, DayHours> = {
	0: {
		// Sunday
		open1: 1130,
		close1: 1430, // 11:30 AM - 2:30 PM
		open2: 1600,
		close2: 2015, // 4:00 PM - 8:15 PM
	},
	1: {
		// Monday
		open1: 1100,
		close1: 1430, // 11:00 AM - 2:30 PM
		open2: 1600,
		close2: 2015, // 4:00 PM - 8:15 PM
	},
	2: {
		// Tuesday
		open1: 1100,
		close1: 1430,
		open2: 1600,
		close2: 2015,
	},
	3: {
		// Wednesday
		open1: 1100,
		close1: 1430,
		open2: 1600,
		close2: 2015,
	},
	4: {
		// Thursday
		open1: 1100,
		close1: 1430,
		open2: 1600,
		close2: 2015,
	},
	5: {
		// Friday
		open1: 1100,
		close1: 1430, // 11:00 AM - 2:30 PM
		open2: 1600,
		close2: 2030, // 4:00 PM - 8:30 PM
	},
	6: {
		// Saturday
		open1: 1100,
		close1: 1430, // 11:00 AM - 2:30 PM
		open2: 1600,
		close2: 2030, // 4:00 PM - 8:30 PM
	},
};

export const getStoreStatus = (): StoreStatus => {
	const { day, time: currentTime } = getPacificDateTime();
	const todayHours = HOURS[day];

	const isOpen =
		isWithinPeriod(currentTime, todayHours.open1, todayHours.close1) ||
		isWithinPeriod(currentTime, todayHours.open2, todayHours.close2);

	const closingSoon =
		isClosingSoon(currentTime, todayHours.close1) ||
		isClosingSoon(currentTime, todayHours.close2);

	if (isOpen && closingSoon) {
		return {
			status: "closing-soon",
			isOpen: true,
			text: "Closing Soon",
			circleColor: "bg-orange-500",
			textColor: "text-orange-600",
			textColorFooter: "text-orange-400",
		};
	}

	if (isOpen) {
		return {
			status: "open",
			isOpen: true,
			text: "Open",
			circleColor: "bg-green-500",
			textColor: "text-green-600",
			textColorFooter: "text-green-400",
		};
	}

	return {
		status: "closed",
		isOpen: false,
		text: "Closed",
		circleColor: "bg-red-500",
		textColor: "text-red-600",
		textColorFooter: "text-red-400",
	};
};

/** Legacy helper for backward compatibility */
export const isStoreOpen = () => getStoreStatus().isOpen;
