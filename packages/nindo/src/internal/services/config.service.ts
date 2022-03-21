let CONFIG: any = {};

export const setAppConfig = (
	config: any
) => {
	CONFIG = config;
};

export const getAppConfig = <T,>(): T => CONFIG as T;
