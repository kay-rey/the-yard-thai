import { MenuItem } from "@/lib/menu-data";

export const menuItems: MenuItem[] = [
	// Appetizers
	{
		id: "edamame",
		name: "Edamame",
		description: "Steamed Japanese soy bean high in protein",
		price: "$7.00",
		category: "appetizers",
		vegetarian: true,
	},
	{
		id: "chicken-or-tofu-4-skewers",
		name: "Chicken Or Tofu 4 Skewers",
		description:
			"4 skewers. Grilled chicken on skewers marinated with Thai herb served with toasted bread, fresh peanut sauce, and cucumber salad",
		price: "$16.00",
		category: "appetizers",
	},
	{
		id: "veggie-egg-rolls",
		name: "Veggie Egg Rolls",
		description:
			"4 pieces. Crispy egg roll stuffed with cabbage, carrot, celery, mushroom, and silver noodle side with plum sauce",
		price: "$12.00",
		category: "appetizers",
		vegetarian: true,
	},
	{
		id: "fresh-spring-rolls",
		name: "Fresh Spring Rolls",
		description:
			"Artisan lettuce, rice paper, mixed green, carrot, and choice of shrimp or soy protein served with tamarind peanut sauce",
		price: "$14.00",
		category: "appetizers",
	},
	{
		id: "calamari",
		name: "Calamari",
		description: "Crispy calamari served with plum sauce",
		price: "$14.00",
		category: "appetizers",
	},
	{
		id: "thai-spicy-wings",
		name: "Thai Spicy Wings",
		description: "5 pieces. Crispy and spicy with garlic sweet chili sauce",
		price: "$14.00",
		category: "appetizers",
		spicy: true,
	},
	{
		id: "gyoza-chicken-or-veggie-6-pc",
		name: "Gyoza Chicken Or Veggie 6 Pc",
		description:
			"6 pieces. Wontons filled with ground meat and veggies. Served with sesame oil and soy sauce",
		price: "$12.00",
		category: "appetizers",
	},
	{
		id: "thai-toast",
		name: "Thai Toast",
		description:
			"Ground chicken, green onion, and carrot on a slice of bread (frying) come with cucumber sauce",
		price: "$16.00",
		category: "appetizers",
	},
	{
		id: "fried-tofu-8pc",
		name: "Fried Tofu 8pc",
		description: "8 pieces. Crispy tofu with plum sauce and crunchy peanut",
		price: "$12.00",
		category: "appetizers",
		vegetarian: true,
	},
	{
		id: "fried-wontons-7pc",
		name: "Fried Wontons 7pc",
		description: "7 pieces. Choice of chicken or sweet potato",
		price: "$12.00",
		category: "appetizers",
	},
	{
		id: "mixed-tempura",
		name: "Mixed Tempura",
		description: "2 pieces of shrimp, green bean, pumpkin, and eggplant",
		price: "$16.00",
		category: "appetizers",
	},

	// Soups
	{
		id: "tom-yum-soup",
		name: "Tom Yum Soup",
		description:
			"Thai herbs, shrimp-paste, mushroom, onion, tomato, cilantro, and choice of tofu, veggie, or chicken",
		price: "$14.00",
		category: "soups",
		spicy: true,
	},
	{
		id: "tom-kha-soup",
		name: "Tom Kha Soup",
		description:
			"Coconut milk with herbs, mushroom, cilantro, and choice of tofu, veggie, or chicken",
		price: "$15.00",
		category: "soups",
	},
	{
		id: "wontons-soup",
		name: "Wontons Soup",
		description: "Chicken stuffed wontons and clear broth with bokchoys",
		price: "$14.00",
		category: "soups",
	},
	{
		id: "chicken-silver-noodle-soup",
		name: "Chicken Silver Noodle Soup",
		description:
			"Grounded chicken glass noodle, carrot, white onion, mushroom, cabbage, scallion, and cilantro",
		price: "$14.00",
		category: "soups",
	},
	{
		id: "veggie-tofu-soup",
		name: "Veggie Tofu Soup",
		description: "Mixed veggies with clear broth",
		price: "$14.00",
		category: "soups",
		vegetarian: true,
	},
	{
		id: "spicy-seafood-soup",
		name: "Spicy Seafood Soup",
		description:
			"Spicy & sour soup with herbs, Thai chili, fresh ginger, thai basil, and mushroom",
		price: "$18.00",
		category: "soups",
		spicy: true,
	},

	// Salads
	{
		id: "papaya-salad",
		name: "Papaya Salad",
		description:
			"Green papaya shredded with grilled shrimp, chili, garlic, tomato, carrot, green bean, and peanut",
		price: "$17.00",
		category: "salads",
		spicy: true,
	},
	{
		id: "thai-salad",
		name: "Thai Salad",
		description:
			"Crispy wonton, tofu, boiled egg, mix green, tomato, red onion, carrot, and cucumber with Thai peanut dressing",
		price: "$17.00",
		category: "salads",
		vegetarian: true,
	},
	{
		id: "beef-salad",
		name: "Beef Salad",
		description:
			"Beef with lime dressing, rice powder, mint leaves, tomato, cucumber, red onion, scallion, and cilantro with mixed green",
		price: "$17.00",
		category: "salads",
		spicy: true,
	},
	{
		id: "shrimp-salad",
		name: "Shrimp Salad",
		description:
			"Grilled shrimps with, lime dressing, lemongrass, tomato, cucumber, mint leaves, and carrot with mixed green",
		price: "$18.00",
		category: "salads",
	},
	{
		id: "larb-salad",
		name: "Larb Salad",
		description:
			"Minced chicken with lime dressing, red chili, rice powder, red onion, scallion, mint, and cilantro",
		price: "$17.00",
		category: "salads",
		spicy: true,
	},
	{
		id: "silver-noodle-salad",
		name: "Silver Noodle Salad",
		description:
			"Silver noodles with shrimp and chicken, lime dressing, Thai chili, red onion, scallion, carrot, tomato, cilantro, peanut, and mixed green",
		price: "$18.00",
		category: "salads",
	},
	{
		id: "nam-sod-salad",
		name: "Nam Sod Salad",
		description:
			"Minced chicken with lime dressing, fresh ginger, peanut, scallion, red onion, and cilantro with mixed green",
		price: "$17.00",
		category: "salads",
	},
	{
		id: "soy-salad",
		name: "Soy Salad",
		description:
			"Soy protein with lime dressing, tomato, cucumber, red onion, carrot, scallion, cilantro, cashew nut, and mixed green",
		price: "$18.00",
		category: "salads",
		vegetarian: true,
	},

	// Noodles
	{
		id: "pad-thai",
		name: "Pad Thai",
		description:
			"Stir-fried rice noodle with egg, grounded peanut, red onion, green onion, and bean sprout with tamarind sauce",
		price: "$17.00",
		category: "noodles",
		popular: true,
	},
	{
		id: "pad-see-eiw",
		name: "Pad See Eiw",
		description:
			"Stir-fried flat rice noodles with Chinese broccoli, egg, and sweet soy sauce",
		price: "$17.00",
		category: "noodles",
	},
	{
		id: "pad-kee-mao",
		name: "Pad Kee Mao",
		description:
			"Stir-fried flat noodles with chili garlic sauce, Thai basil, white onion, and bell pepper",
		price: "$17.00",
		category: "noodles",
		spicy: true,
	},
	{
		id: "gai-krua",
		name: "Gai Krua",
		description: "Stir-fried flat noodles with egg, bean sprout, and scallion",
		price: "$17.00",
		category: "noodles",
	},
	{
		id: "pad-woon-sen",
		name: "Pad Woon Sen",
		description:
			"Stir-fried silver noodles with egg, white onion, green onion, carrot, cabbage, bell pepper, mushroom, and bean sprout",
		price: "$17.00",
		category: "noodles",
	},
	{
		id: "chow-mein",
		name: "Chow Mein",
		description:
			"Stir-fried egg noodles with cabbage, carrot, broccoli, and mushroom with soy sauce & sesame oil",
		price: "$17.00",
		category: "noodles",
	},
	{
		id: "rad-na",
		name: "Rad Na",
		description:
			"Stir-fried flat noodles with black soy sauce and Chinese broccoli with gravy sauce",
		price: "$17.00",
		category: "noodles",
	},

	// Curries
	{
		id: "yellow-curry",
		name: "Yellow Curry",
		description: "Milder curry with potato and white onion",
		price: "$20.00",
		category: "curries",
	},
	{
		id: "green-curry",
		name: "Green Curry",
		description: "Spicy curry with eggplant, bamboo shoots, and Thai basil",
		price: "$20.00",
		category: "curries",
		spicy: true,
	},
	{
		id: "mussaman-curry",
		name: "Mussaman Curry",
		description:
			"Rich and flavorful curry with, potato, white onion, carrot, and peanut",
		price: "$20.00",
		category: "curries",
	},
	{
		id: "panang-curry",
		name: "Panang Curry",
		description: "Red curry sauce with the fresh green bean",
		price: "$20.00",
		category: "curries",
	},
	{
		id: "pumpkin-curry",
		name: "Pumpkin Curry",
		description: "Kabocha pumpkin with red curry and Thai basil",
		price: "$20.00",
		category: "curries",
	},
	{
		id: "pineapple-curry",
		name: "Pineapple Curry",
		description:
			"Milder red curry with pineapple, bell pepper, and sweet tomato",
		price: "$20.00",
		category: "curries",
	},

	// Stir-Fried
	{
		id: "spicy-thai-basil-leaves",
		name: "Spicy Thai Basil Leaves",
		description:
			"Stir-fried chili garlic with Thai basil, white onion, and bell pepper",
		price: "$19.00",
		category: "stir-fried",
		spicy: true,
	},
	{
		id: "ginger-pineapples",
		name: "Ginger Pineapples",
		description:
			"Stir-fried fresh ginger & pineapples with white onion, mushroom, carrot, and bell pepper",
		price: "$19.00",
		category: "stir-fried",
	},
	{
		id: "pepper-garlic",
		name: "Pepper Garlic",
		description:
			"Stir-fried white pepper with garlic sauce come with steamed veggie",
		price: "$19.00",
		category: "stir-fried",
	},
	{
		id: "prik-king",
		name: "Prik King",
		description: "Sauteed green bean with red curry paste",
		price: "$19.00",
		category: "stir-fried",
	},
	{
		id: "cashew-nut",
		name: "Cashew Nut",
		description:
			"Cashew nut, white onion, carrot, bell pepper, and zucchini with the shrimp paste sauce",
		price: "$19.00",
		category: "stir-fried",
	},
	{
		id: "veggie-delight",
		name: "Veggie Delight",
		description: "Stir-fried mixed veggies with garlic sauce",
		price: "$19.00",
		category: "stir-fried",
		vegetarian: true,
	},
	{
		id: "spicy-eggplant",
		name: "Spicy Eggplant",
		description:
			"Stir-fried chili garlic with Chinese eggplant, white onion, bell pepper, and Thai basil",
		price: "$19.00",
		category: "stir-fried",
		spicy: true,
	},
	{
		id: "baby-corn-delight",
		name: "Baby Corn Delight",
		description:
			"Sauteed baby corn, mushroom, snow pea, and carrot with garlic sauce",
		price: "$19.00",
		category: "stir-fried",
	},
	{
		id: "rama-spinach-delight",
		name: "Rama (Spinach Delight)",
		description: "Sauteed spinach, broccoli, and carrot with Thai peanut sauce",
		price: "$19.00",
		category: "stir-fried",
	},

	// Fried Rice
	{
		id: "house-fried-rice",
		name: "House Fried Rice",
		description:
			"Egg, white onion, scallions, and cilantro garnished with cucumber",
		price: "$18.00",
		category: "rice",
	},
	{
		id: "pineapple-fried-rice",
		name: "Pineapple Fried Rice",
		description:
			"Chicken, pineapple, egg, raisins, cashew nuts, white onion, scallions, and curry powder",
		price: "$19.00",
		category: "rice",
	},
	{
		id: "spicy-basil-fried-rice",
		name: "Spicy Basil Fried Rice",
		description:
			"Chili, garlic, Thai basil, white onion, and bell pepper garnished with cucumber",
		price: "$18.00",
		category: "rice",
		spicy: true,
	},
	{
		id: "spicy-seafood-fried-rice",
		name: "Spicy Seafood Fried Rice",
		description:
			"Mixed seafood, chili, garlic, white onion, bell pepper, and Thai basil",
		price: "$28.00",
		category: "rice",
		spicy: true,
	},

	// House Specialties
	{
		id: "khao-soi-curry-noodle",
		name: "Khao Soi Curry Noodle",
		description:
			"Northern-style curry noodles with shrimp, egg noodles, red onion, pickle, fried onion, fresh green onion, and cilantro topped with crispy noodles",
		price: "$21.00",
		category: "special",
		spicy: true,
	},
	{
		id: "chicken-over-rice",
		name: "Chicken Over Rice",
		description:
			"Boiled tender chicken over ginger garlic rice served with spicy ginger sauce and chicken broth",
		price: "$18.00",
		category: "special",
	},
	{
		id: "somtum-combo",
		name: "Somtum Combo",
		description:
			"BBQ chicken(half) & papaya salad with sticky rice. Side of spicy sauce (jaew) and plum sauce",
		price: "$28.00",
		category: "special",
		spicy: true,
	},
	{
		id: "crab-fried-rice",
		name: "Crab Fried Rice",
		description:
			"Real crab meat stir-fried with egg, rice, white onion, and scallions",
		price: "$22.00",
		category: "special",
		popular: true,
	},
	{
		id: "shrimp-in-the-pot",
		name: "Shrimp in the Pot",
		description:
			"Shrimps with glass noodle, fresh ginger, garlic, celery, and red bell pepper",
		price: "$21.00",
		category: "special",
	},
	{
		id: "orange-chicken",
		name: "Orange Chicken",
		description: "Crispy chicken with tangerine sauce side of steamed broccoli",
		price: "$18.00",
		category: "special",
	},
	{
		id: "steamed-mussels",
		name: "Steamed Mussels",
		description:
			"New Zealand mussels steaming with Thai herbs serve with (chili) garlic lime sauce",
		price: "$19.00",
		category: "special",
	},
	{
		id: "spicy-curry-fish",
		name: "Spicy Curry Fish",
		description:
			"Fried sole fish with the top of red curry sauce. Thai basil, red bell pepper, tomatoes, and Thai herbs",
		price: "$20.00",
		category: "special",
		spicy: true,
	},

	// Grilled
	{
		id: "grilled-pork",
		name: "Grilled Pork",
		description:
			"Marinated pork shoulder, tasty slightly sweet,cut thin sliced served with spicy sauce & sliced of cucumber",
		price: "$18.00",
		category: "grilled",
	},
	{
		id: "grilled-beef-crying-tiger",
		name: "Grilled Beef (Crying Tiger)",
		description: "Marinated beef with side of salad and spicy sauce",
		price: "$26.00",
		category: "grilled",
		spicy: true,
	},
	{
		id: "grilled-shrimps",
		name: "Grilled Shrimps",
		description:
			"Shrimps on skewers with chili garlic lime sauce and small salad",
		price: "$20.00",
		category: "grilled",
	},
	{
		id: "thai-bbq-chicken",
		name: "Thai BBQ Chicken",
		description:
			"A whole chicken marinated with herbs come with plum sauce and spicy sauce",
		price: "$26.00",
		category: "grilled",
	},
	{
		id: "salmon-teriyaki",
		name: "Salmon Teriyaki",
		description:
			"Grilled salmon with sweet & savory teriyaki sauce, sesame seeds, and side of steamed veggie",
		price: "$19.00",
		category: "grilled",
	},

	// Noodle Soups
	{
		id: "tom-yum-noodle-soup",
		name: "Tom Yum Noodle Soup",
		description:
			"Rice noodles with lemongrass base soup, lime leaves, galangal, mushroom, bean sprout, and cilantro",
		price: "$18.00",
		category: "noodle-soups",
		spicy: true,
	},
	{
		id: "tom-kha-noodle-soup",
		name: "Tom Kha Noodle Soup",
		description:
			"Rice noodles, galangal, bean sprout, mushroom, and cilantro with coconut lemongrass broth",
		price: "$18.00",
		category: "noodle-soups",
	},
	{
		id: "chicken-noodle-soup",
		name: "Chicken Noodle Soup",
		description:
			"Rice noodles with chicken broth, bean sprout, green onion, and cilantro",
		price: "$18.00",
		category: "noodle-soups",
	},
	{
		id: "shrimp-wontons-egg-noodle-soup",
		name: "Shrimp Wontons Egg Noodle Soup",
		description:
			"Clear broth shrimp wontons & chicken, egg noodles, bokchoy and scallion, and cilantro",
		price: "$20.00",
		category: "noodle-soups",
	},
	{
		id: "thai-noodle-soup",
		name: "Thai Noodle Soup",
		description:
			"Rice noodles, minced chicken, chili, fishcake, crispy wonton, grounded peanut, bean sprouts, scallions, and cilantro. Vegan option (soy protein)",
		price: "$18.00",
		category: "noodle-soups",
	},

	// Drinks
	{
		id: "thai-iced-tea",
		name: "Thai Iced Tea",
		description: "",
		price: "$5.00",
		category: "drinks",
	},
	{
		id: "thai-iced-coffee",
		name: "Thai Iced Coffee",
		description: "",
		price: "$5.00",
		category: "drinks",
	},
	{
		id: "house-lemonade-with-butterfly-tea",
		name: "House Lemonade with Butterfly Tea",
		description: "",
		price: "$5.50",
		category: "drinks",
	},
	{
		id: "thai-lemon-tea",
		name: "Thai Lemon Tea",
		description: "",
		price: "$5.00",
		category: "drinks",
	},
	{
		id: "black-iced-tea",
		name: "Black Iced Tea",
		description: "",
		price: "$4.00",
		category: "drinks",
	},
	{
		id: "peach-iced-tea",
		name: "Peach Iced Tea",
		description: "",
		price: "$4.00",
		category: "drinks",
	},
	{
		id: "arnold-palmer",
		name: "Arnold Palmer",
		description: "",
		price: "$4.00",
		category: "drinks",
	},
	{
		id: "matcha-iced-tea",
		name: "Matcha Iced Tea",
		description: "",
		price: "$5.00",
		category: "drinks",
	},
	{
		id: "matcha-milk-tea",
		name: "Matcha Milk Tea",
		description: "",
		price: "$6.00",
		category: "drinks",
	},
	{
		id: "hot-tea",
		name: "Hot Tea",
		description: "",
		price: "$3.00",
		category: "drinks",
	},
	{
		id: "flowers-tea",
		name: "Flowers Tea",
		description: "",
		price: "$9.00",
		category: "drinks",
	},
	{
		id: "decaffeinated-hot-tea",
		name: "Decaffeinated Hot Tea",
		description: "",
		price: "$3.00",
		category: "drinks",
	},
	{
		id: "san-pellegrino",
		name: "San Pellegrino",
		description: "500 ml",
		price: "$4.50",
		category: "drinks",
	},
	{
		id: "soft-drinks",
		name: "Soft Drinks",
		description: "",
		price: "$4.00",
		category: "drinks",
	},
	{
		id: "coke-canned",
		name: "Coke (Canned)",
		description: "",
		price: "$2.50",
		category: "drinks",
	},
	{
		id: "diet-coke-canned",
		name: "Diet Coke (Canned)",
		description: "",
		price: "$2.50",
		category: "drinks",
	},
	{
		id: "pineapple-mojito-non-alcohol",
		name: "Pineapple Mojito (Non-alcohol)",
		description: "",
		price: "$7.00",
		category: "drinks",
	},
	{
		id: "honey-green-tea-lemonade",
		name: "Honey Green Tea Lemonade",
		description: "",
		price: "$6.00",
		category: "drinks",
	},

	// Desserts
	{
		id: "mango-with-sweet-sticky-rice",
		name: "Mango with Sweet Sticky Rice",
		description: "Seasonal",
		price: "$12.00",
		category: "desserts",
		popular: true,
	},
	{
		id: "coconut-iced-cream-and-sticky-rice",
		name: "Coconut Iced Cream & Sticky Rice",
		description: "Grounded peanut topping",
		price: "$12.00",
		category: "desserts",
	},
	{
		id: "iced-cream",
		name: "Iced Cream",
		description: "Coconut, green tea, chocolate chip, and rainbow sherbet",
		price: "$7.00",
		category: "desserts",
	},
	{
		id: "mochi-iced-cream",
		name: "Mochi Iced Cream",
		description:
			"With 2 pieces. Choice of green tea, strawberry, mango, or chocolate",
		price: "$6.00",
		category: "desserts",
	},

	// Sides
	{
		id: "jasmine-rice",
		name: "Jasmine Rice",
		description: "",
		price: "$3.50",
		category: "sides",
	},
	{
		id: "brown-rice",
		name: "Brown Rice",
		description: "",
		price: "$4.50",
		category: "sides",
	},
	{
		id: "sticky-rice-plain",
		name: "Sticky Rice (Plain)",
		description: "",
		price: "$4.00",
		category: "sides",
	},
	{
		id: "sweet-sticky-rice",
		name: "Sweet Sticky Rice",
		description: "",
		price: "$6.00",
		category: "sides",
	},
	{
		id: "steamed-rice-noodle",
		name: "Steamed Rice Noodle",
		description: "",
		price: "$4.00",
		category: "sides",
	},
	{
		id: "egg-fried-rice",
		name: "Egg Fried Rice",
		description: "20 oz",
		price: "$9.00",
		category: "sides",
	},
	{
		id: "steamed-veggie",
		name: "Steamed Veggie",
		description: "",
		price: "$8.00",
		category: "sides",
	},
	{
		id: "steamed-tofu",
		name: "Steamed Tofu",
		description: "",
		price: "$6.00",
		category: "sides",
	},
	{
		id: "soy-protein",
		name: "Soy Protein",
		description: "",
		price: "$8.00",
		category: "sides",
	},
	{
		id: "kaijaew-thai-omelet",
		name: "Kaijaew (Thai Omelet)",
		description: "",
		price: "$14.00",
		category: "sides",
	},
	{
		id: "small-house-salad",
		name: "Small House Salad",
		description: "",
		price: "$8.00",
		category: "sides",
	},
	{
		id: "small-cucumber-salad",
		name: "Small Cucumber Salad",
		description: "",
		price: "$6.00",
		category: "sides",
	},
	{
		id: "shrimp-tempura",
		name: "Shrimp Tempura",
		description: "2 pieces",
		price: "$8.00",
		category: "sides",
	},
	{
		id: "fried-egg",
		name: "Fried Egg",
		description: "",
		price: "$3.00",
		category: "sides",
	},
	{
		id: "thai-peanut-sauce",
		name: "Thai Peanut Sauce",
		description: "",
		price: "$2.50",
		category: "sides",
	},
	{
		id: "teriyaki-sauce",
		name: "Teriyaki Sauce",
		description: "",
		price: "$2.00",
		category: "sides",
	},
	{
		id: "thai-spicy-sauce-jaew",
		name: "Thai Spicy Sauce (Jaew)",
		description: "",
		price: "$2.00",
		category: "sides",
	},
	{
		id: "plum-sauce",
		name: "Plum Sauce",
		description: "",
		price: "$2.00",
		category: "sides",
	},
];
