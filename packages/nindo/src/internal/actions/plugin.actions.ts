import {
  PluginActionTypes,
  IPluginSettings,
  TPluginState,
  TPluginPrivacy,
  IPluginStyles,
  IPluginColors,
  IPluginBackground,
  IPluginContent,
  IPlugin,
  IPluginData,
} from '../../external/types/plugin.types';
import { historyChange, savedStateChange } from './history.actions';
import { userService } from '../services';
import { premiumHelper } from '../../external/helpers/premium.helper';

export const gotPluginData = (data: IPlugin<any>) => {
  return (dispatch: Function) => {
    // Set premium features in global service
    if (data.planFeatures && typeof data.planFeatures === 'object') {
      premiumHelper.planFeatures = data.planFeatures;
    }

    dispatch({
      type: PluginActionTypes.GOT_DATA,
      data,
    });
  };
};

export const dataUpdated = (data: IPluginData | any) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const plugin: IPlugin<any> = state.plugin;

    dispatch(savedStateChange(false));

    dispatch(
      historyChange({
        ...plugin,
        data: {
          ...plugin.data,
          ...data,
        },
      }),
    );

    dispatch({
      type: PluginActionTypes.DATA_UPDATED,
      data,
    });
  };
};

export const contentUpdated = (data: IPluginContent | any) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const plugin: IPlugin<any> = state.plugin;

    dispatch(savedStateChange(false));

    dispatch(
      historyChange({
        ...plugin,
        data: {
          ...plugin.data,
          content: data,
        },
      }),
    );

    dispatch({
      type: PluginActionTypes.CONTENT_UPDATED,
      data,
    });
  };
};

export const settingsUpdated = (data: IPluginSettings | any) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const plugin: IPlugin<any> = state.plugin;

    dispatch(savedStateChange(false));

    dispatch(
      historyChange({
        ...plugin,
        data: {
          ...plugin.data,
          settings: data,
        },
      }),
    );

    dispatch({
      type: PluginActionTypes.SETTINGS_UPDATED,
      data,
    });
  };
};

export const nameUpdated = (name: string) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const plugin: IPlugin<any> = state.plugin;

    dispatch(savedStateChange(false));

    dispatch(
      historyChange({
        ...plugin,
        name,
      }),
    );

    dispatch({
      type: PluginActionTypes.NAME_UPDATED,
      name,
    });
  };
};

export const statusUpdated = (status: TPluginState) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const plugin: IPlugin<any> = state.plugin;

    dispatch(savedStateChange(false));

    dispatch(
      historyChange({
        ...plugin,
        status,
      }),
    );

    dispatch({
      type: PluginActionTypes.STATUS_UPDATED,
      status,
    });
  };
};

export const descriptionUpdated = (description: string) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const plugin: IPlugin<any> = state.plugin;

    dispatch(savedStateChange(false));

    dispatch(
      historyChange({
        ...plugin,
        description,
      }),
    );

    dispatch({
      type: PluginActionTypes.DESCRIPTION_UPDATED,
      description,
    });
  };
};

export const privacyUpdated = (privacy: TPluginPrivacy) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const plugin: IPlugin<any> = state.plugin;

    dispatch(savedStateChange(false));

    dispatch(
      historyChange({
        ...plugin,
        privacy,
      }),
    );

    dispatch({
      type: PluginActionTypes.PRIVACY_UPDATED,
      privacy,
    });
  };
};

export const stylesUpdated = (data: IPluginStyles | any) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const plugin: IPlugin<any> = state.plugin;

    dispatch(savedStateChange(false));

    dispatch(
      historyChange({
        ...plugin,
        data: {
          ...plugin.data,
          styles: data,
        },
      }),
    );

    dispatch({
      type: PluginActionTypes.STYLES_UPDATED,
      styles: data,
    });
  };
};

export const colorsUpdated = (colors: IPluginColors | any) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const plugin: IPlugin<any> = state.plugin;

    dispatch(savedStateChange(false));

    dispatch(
      historyChange({
        ...plugin,
        data: {
          ...plugin.data,
          styles: {
            ...plugin.data.styles,
            colors,
          },
        },
      }),
    );

    dispatch({
      type: PluginActionTypes.COLORS_UPDATED,
      colors,
    });
  };
};

export const backgroundUpdated = (background: IPluginBackground) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const plugin: IPlugin<any> = state.plugin;

    dispatch(savedStateChange(false));

    dispatch(
      historyChange({
        ...plugin,
        data: {
          ...plugin.data,
          styles: {
            ...plugin.data.styles,
            background,
          },
        },
      }),
    );

    dispatch({
      type: PluginActionTypes.BACKGROUND_UPDATED,
      background,
    });
  };
};

export const planFeaturesUpdated = (data: any) => ({
  type: PluginActionTypes.PLAN_FEATURES_UPDATED,
  data,
});

export const getPlanFeatures = (pluginId?: string) => {
  return async (dispatch: Function) => {
    try {
      const result = await userService.getPlanFeatures(pluginId);
      if (result.success && result.data) {
        dispatch(planFeaturesUpdated(result.data));
      }
    } catch (e) {}
  };
};
