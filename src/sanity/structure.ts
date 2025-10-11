import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Content")
		.items([
			// Menu Items organized by category
			S.listItem()
				.title("Menu Items")
				.child(
					S.list()
						.title("Menu Items by Category")
						.items([
							S.listItem()
								.title("All Menu Items")
								.child(
									S.documentList()
										.title("All Menu Items")
										.filter('_type == "menuItem"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.divider(),
							S.listItem()
								.title("🍽️ Appetizers")
								.child(
									S.documentList()
										.title("Appetizers")
										.filter('_type == "menuItem" && category == "appetizers"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🍲 Soups")
								.child(
									S.documentList()
										.title("Soups")
										.filter('_type == "menuItem" && category == "soups"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🥗 Salads")
								.child(
									S.documentList()
										.title("Salads")
										.filter('_type == "menuItem" && category == "salads"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🍜 Noodles")
								.child(
									S.documentList()
										.title("Noodles")
										.filter('_type == "menuItem" && category == "noodles"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🌶️ Curries")
								.child(
									S.documentList()
										.title("Curries")
										.filter('_type == "menuItem" && category == "curries"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🍳 Stir-Fried")
								.child(
									S.documentList()
										.title("Stir-Fried")
										.filter('_type == "menuItem" && category == "stir-fried"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🍚 Fried Rice")
								.child(
									S.documentList()
										.title("Fried Rice")
										.filter('_type == "menuItem" && category == "rice"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("⭐ House Specialties")
								.child(
									S.documentList()
										.title("House Specialties")
										.filter('_type == "menuItem" && category == "special"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🔥 Grilled")
								.child(
									S.documentList()
										.title("Grilled")
										.filter('_type == "menuItem" && category == "grilled"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🍜 Noodle Soups")
								.child(
									S.documentList()
										.title("Noodle Soups")
										.filter('_type == "menuItem" && category == "noodle-soups"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🥤 Drinks")
								.child(
									S.documentList()
										.title("Drinks")
										.filter('_type == "menuItem" && category == "drinks"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🍰 Desserts")
								.child(
									S.documentList()
										.title("Desserts")
										.filter('_type == "menuItem" && category == "desserts"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
							S.listItem()
								.title("🍽️ Sides")
								.child(
									S.documentList()
										.title("Sides")
										.filter('_type == "menuItem" && category == "sides"')
										.defaultOrdering([{ field: "name", direction: "asc" }])
								),
						])
				),
			S.divider(),
			// Other document types
			...S.documentTypeListItems().filter(
				(listItem) => !["menuItem"].includes(listItem.getId()!)
			),
		]);
