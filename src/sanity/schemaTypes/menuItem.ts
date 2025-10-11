import { defineField, defineType } from "sanity";

export default defineType({
	name: "menuItem",
	title: "Menu Item",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) => Rule.required().min(1).max(100),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
		defineField({
			name: "price",
			title: "Price",
			type: "number",
			description: "Enter price as a number (e.g., 12.50 for $12.50)",
			validation: (Rule) => Rule.required().min(0).precision(2),
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			options: {
				list: [
					{ title: "Appetizers", value: "appetizers" },
					{ title: "Soups", value: "soups" },
					{ title: "Salads", value: "salads" },
					{ title: "Noodles", value: "noodles" },
					{ title: "Curries", value: "curries" },
					{ title: "Stir-Fried", value: "stir-fried" },
					{ title: "Fried Rice", value: "rice" },
					{ title: "House Specialties", value: "special" },
					{ title: "Grilled", value: "grilled" },
					{ title: "Noodle Soups", value: "noodle-soups" },
					{ title: "Drinks", value: "drinks" },
					{ title: "Desserts", value: "desserts" },
					{ title: "Sides", value: "sides" },
				],
				layout: "dropdown",
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "imageAlt",
			title: "Image Alt Text",
			type: "string",
			description:
				"Auto-generated from item name (e.g., 'Spicy Seafood Rice').",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
				slugify: (input: string) =>
					input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.replace(/[^\w\-]+/g, "")
						.replace(/\-\-+/g, "-")
						.replace(/^-+/, "")
						.replace(/-+$/, ""),
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "spicy",
			title: "Spicy",
			type: "boolean",
			initialValue: false,
		}),
		defineField({
			name: "vegetarian",
			title: "Vegetarian",
			type: "boolean",
			initialValue: false,
		}),
		defineField({
			name: "popular",
			title: "Popular",
			type: "boolean",
			initialValue: false,
		}),
	],
	preview: {
		select: {
			title: "name",
			subtitle: "price",
			media: "image",
			category: "category",
			spicy: "spicy",
			vegetarian: "vegetarian",
			popular: "popular",
		},
		prepare(selection) {
			const { title, subtitle, media, category, spicy, vegetarian, popular } =
				selection;
			const badges = [];
			if (spicy) badges.push("🌶️ Spicy");
			if (vegetarian) badges.push("🌱 Veg");
			if (popular) badges.push("⭐ Popular");

			return {
				title,
				subtitle: `${subtitle} • ${category}${
					badges.length > 0 ? ` • ${badges.join(" ")}` : ""
				}`,
				media,
			};
		},
	},
});
