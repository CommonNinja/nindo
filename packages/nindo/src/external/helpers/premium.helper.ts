class PremiumHelper {
	public planFeatures: any;

	public getFeatureValue(
		featureName: string,
		planFeatures?: any
	): boolean | number | null {
		const value = (this.planFeatures || planFeatures || {})[featureName];
		// In case that the feature is not defined, return true, just in case
		if (typeof value === 'undefined') {
			if (featureName.startsWith('numOf') || featureName.startsWith('number')) {
				return 1000000;
			}
			return true;
		}
		return value;
	}
}

export const premiumHelper = new PremiumHelper();
