export function calculatePricing(originalPricing: number, discount?: number) {
	if (!discount) {
		return originalPricing;
	}
	const finalPrice = originalPricing - (originalPricing * discount) / 100;
	return finalPrice % 1 === 0 ? finalPrice : finalPrice.toFixed(2);
}
