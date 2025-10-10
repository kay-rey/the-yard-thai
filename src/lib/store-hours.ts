// Function to check store status (open, closing soon, or closed)
export const getStoreStatus = () => {
	// Get current time in Pacific timezone (Agoura Hills timezone)
	const now = new Date();
	const pacificTime = new Date(
		now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
	);
	const currentDay = pacificTime.getDay(); // 0 = Sunday, 1 = Monday, etc.
	const currentTime = pacificTime.getHours() * 100 + pacificTime.getMinutes(); // Convert to HHMM format

	// Define hours for each day
	const hours = {
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
			close1: 1430, // 11:00 AM - 2:30 PM
			open2: 1600,
			close2: 2015, // 4:00 PM - 8:15 PM
		},
		3: {
			// Wednesday
			open1: 1100,
			close1: 1430, // 11:00 AM - 2:30 PM
			open2: 1600,
			close2: 2015, // 4:00 PM - 8:15 PM
		},
		4: {
			// Thursday
			open1: 1100,
			close1: 1430, // 11:00 AM - 2:30 PM
			open2: 1600,
			close2: 2015, // 4:00 PM - 8:15 PM
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

	const todayHours = hours[currentDay as keyof typeof hours];

	// Check if current time falls within either open period
	const isOpen =
		(currentTime >= todayHours.open1 && currentTime <= todayHours.close1) ||
		(currentTime >= todayHours.open2 && currentTime <= todayHours.close2);

	// Check if closing soon (15 minutes before closing)
	const closingSoon1 =
		currentTime >= todayHours.close1 - 15 && currentTime < todayHours.close1;
	const closingSoon2 =
		currentTime >= todayHours.close2 - 15 && currentTime < todayHours.close2;
	const isClosingSoon = closingSoon1 || closingSoon2;

	if (isClosingSoon) {
		return {
			status: "closing-soon",
			isOpen: true,
			text: "Closing Soon",
			circleColor: "bg-orange-500",
			textColor: "text-orange-600",
			textColorFooter: "text-orange-400",
		};
	} else if (isOpen) {
		return {
			status: "open",
			isOpen: true,
			text: "Open",
			circleColor: "bg-green-500",
			textColor: "text-green-600",
			textColorFooter: "text-green-400",
		};
	} else {
		return {
			status: "closed",
			isOpen: false,
			text: "Closed",
			circleColor: "bg-red-500",
			textColor: "text-red-600",
			textColorFooter: "text-red-400",
		};
	}
};

// Legacy function for backward compatibility
export const isStoreOpen = () => {
	return getStoreStatus().isOpen;
};
