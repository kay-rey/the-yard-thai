export function generateRestaurantStructuredData() {
	// Store hours data for structured data - based on actual Yelp hours
	const storeHours = {
		monday: {
			open1: "11:00",
			close1: "14:30", // 11:00 AM - 2:30 PM
			open2: "16:00",
			close2: "20:30", // 4:00 PM - 8:30 PM
		},
		tuesday: {
			open1: "11:00",
			close1: "14:30", // 11:00 AM - 2:30 PM
			open2: "16:00",
			close2: "20:30", // 4:00 PM - 8:30 PM
		},
		wednesday: {
			open1: "11:00",
			close1: "14:30", // 11:00 AM - 2:30 PM
			open2: "16:00",
			close2: "20:30", // 4:00 PM - 8:30 PM
		},
		thursday: {
			open1: "11:00",
			close1: "14:30", // 11:00 AM - 2:30 PM
			open2: "16:00",
			close2: "20:30", // 4:00 PM - 8:30 PM
		},
		friday: {
			open1: "11:00",
			close1: "14:30", // 11:00 AM - 2:30 PM
			open2: "16:00",
			close2: "21:00", // 4:00 PM - 9:00 PM
		},
		saturday: {
			open1: "11:00",
			close1: "14:30", // 11:00 AM - 2:30 PM
			open2: "16:00",
			close2: "20:45", // 4:00 PM - 8:45 PM
		},
		sunday: {
			open1: "11:30",
			close1: "14:30", // 11:30 AM - 2:30 PM
			open2: "16:00",
			close2: "20:30", // 4:00 PM - 8:30 PM
		},
	};

	return {
		"@context": "https://schema.org",
		"@type": ["Restaurant", "LocalBusiness"],
		name: "The Yard Thai Cuisine",
		description:
			"Experience authentic Thai flavors with a modern twist at The Yard Thai Cuisine, a women-owned and operated restaurant. Fresh ingredients, traditional recipes, and exceptional taste.",
		url: "https://theyardthai.com",
		telephone: "(818) 532-7272",
		address: {
			"@type": "PostalAddress",
			streetAddress: "5889 Kanan Rd",
			addressLocality: "Agoura Hills",
			addressRegion: "CA",
			postalCode: "91301",
			addressCountry: "US",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: "34.1361",
			longitude: "-118.7745",
		},
		openingHoursSpecification: [
			// Monday - Lunch
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Monday",
				opens: storeHours.monday.open1,
				closes: storeHours.monday.close1,
			},
			// Monday - Dinner
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Monday",
				opens: storeHours.monday.open2,
				closes: storeHours.monday.close2,
			},
			// Tuesday - Lunch
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Tuesday",
				opens: storeHours.tuesday.open1,
				closes: storeHours.tuesday.close1,
			},
			// Tuesday - Dinner
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Tuesday",
				opens: storeHours.tuesday.open2,
				closes: storeHours.tuesday.close2,
			},
			// Wednesday - Lunch
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Wednesday",
				opens: storeHours.wednesday.open1,
				closes: storeHours.wednesday.close1,
			},
			// Wednesday - Dinner
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Wednesday",
				opens: storeHours.wednesday.open2,
				closes: storeHours.wednesday.close2,
			},
			// Thursday - Lunch
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Thursday",
				opens: storeHours.thursday.open1,
				closes: storeHours.thursday.close1,
			},
			// Thursday - Dinner
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Thursday",
				opens: storeHours.thursday.open2,
				closes: storeHours.thursday.close2,
			},
			// Friday - Lunch
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Friday",
				opens: storeHours.friday.open1,
				closes: storeHours.friday.close1,
			},
			// Friday - Dinner
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Friday",
				opens: storeHours.friday.open2,
				closes: storeHours.friday.close2,
			},
			// Saturday - Lunch
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Saturday",
				opens: storeHours.saturday.open1,
				closes: storeHours.saturday.close1,
			},
			// Saturday - Dinner
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Saturday",
				opens: storeHours.saturday.open2,
				closes: storeHours.saturday.close2,
			},
			// Sunday - Lunch
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Sunday",
				opens: storeHours.sunday.open1,
				closes: storeHours.sunday.close1,
			},
			// Sunday - Dinner
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Sunday",
				opens: storeHours.sunday.open2,
				closes: storeHours.sunday.close2,
			},
		],
		servesCuisine: ["Thai", "Asian"],
		priceRange: "$$",
		acceptsReservations: true,
		hasMenu: "https://theyardthai.com/menu",
		paymentAccepted: ["Cash", "Credit Card"],
		amenityFeature: [
			{
				"@type": "LocationFeatureSpecification",
				name: "Outdoor Seating",
				value: true,
			},
			{
				"@type": "LocationFeatureSpecification",
				name: "Takeout",
				value: true,
			},
			{
				"@type": "LocationFeatureSpecification",
				name: "Delivery",
				value: true,
			},
			{
				"@type": "LocationFeatureSpecification",
				name: "Women-Owned Business",
				value: true,
			},
		],
		hasMenuItem: [
			{
				"@type": "MenuItem",
				name: "Khao Soi Curry Noodle",
				description: "Traditional Northern Thai curry noodle soup",
			},
			{
				"@type": "MenuItem",
				name: "Pad See Eiw",
				description: "Stir-fried wide rice noodles with soy sauce",
			},
			{
				"@type": "MenuItem",
				name: "Tom Kha Soup",
				description: "Coconut milk soup with galangal and lemongrass",
			},
			{
				"@type": "MenuItem",
				name: "Pad Kee Mao",
				description: "Drunken noodles with basil and chili",
			},
		],
		image: [
			"https://theyardthai.com/images/logo/FullLogo.png",
			"https://theyardthai.com/images/logo/theyardheropicture.jpg",
		],
		logo: "https://theyardthai.com/images/logo/FullLogo.png",
		sameAs: [
			"https://www.instagram.com/theyardthaicuisine/",
			"https://www.yelp.com/biz/the-yard-thai-cuisine-agoura-hills",
		],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.5",
			reviewCount: "238",
		},
	};
}

export function generateBreadcrumbStructuredData(pathname: string) {
	const baseUrl = "https://theyardthai.com";

	const breadcrumbs = [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: baseUrl,
		},
	];

	if (pathname === "/menu") {
		breadcrumbs.push({
			"@type": "ListItem",
			position: 2,
			name: "Menu",
			item: `${baseUrl}/menu`,
		});
	}

	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: breadcrumbs,
	};
}
