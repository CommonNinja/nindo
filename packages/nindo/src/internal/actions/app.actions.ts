import { premiumHelper } from '../../external/helpers/premium.helper';
import { AppActionTypes, IAppData } from '../../external/types/backofficeApp.types';

export const gotAppData = (data: IAppData<any>) => {
	return (dispatch: Function) => {
		// Set premium features in global service
		if (data.planFeatures && typeof data.planFeatures === 'object') {
			premiumHelper.planFeatures = data.planFeatures;
		}

		dispatch({
			type: AppActionTypes.APP_GOT_DATA,
			data,
		});
	};
};

export const appDataUpdated = (data: any) => {
	return (dispatch: Function) => {
		dispatch({
			type: AppActionTypes.APP_DATA_UPDATED,
			data,
		});
	};
};

export const appPlanFeaturesUpdated = (data: any) => ({
	type: AppActionTypes.APP_PLAN_FEATURES_UPDATED,
	data,
});