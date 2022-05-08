class PremiumHelper {
	public planFeatures: any;

	public getFeatureValue<T = boolean | number | null>(
		featureName: string,
		planFeatures?: any
	): T {
		const value = (this.planFeatures || planFeatures || {})[featureName];
		// In case that the feature is not defined, return true, just in case
		if (typeof value === 'undefined') {
			if (featureName.startsWith('numOf') || featureName.startsWith('number')) {
				return 1000000 as any;
			}
			return true as any;
		}
		return value;
	}
}

export const premiumHelper = new PremiumHelper();
