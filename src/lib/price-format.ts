/**
 * Formats a price number as a currency string
 * @param price - The price as a number (e.g., 12.50)
 * @returns Formatted price string (e.g., "$12.50")
 */
export function formatPrice(price: number): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(price);
}
