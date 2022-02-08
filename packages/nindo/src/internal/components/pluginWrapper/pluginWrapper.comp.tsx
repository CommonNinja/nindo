import React, { CSSProperties } from 'react';
import { useSelector } from 'react-redux';

import { IPluginComp } from '../../../external/types/plugin.types';
import { fontHelper, FontT } from '../../../external/helpers/font.helper';
import { IAppState } from '../../../external/types/state.types';

import './pluginWrapper.scss';

interface IPluginWrapperProps<T> {
	pluginComp: IPluginComp;
	ignoreCustomCSS?: boolean;
}

export const PluginWrapper = ({
	ignoreCustomCSS,
	pluginComp,
}: IPluginWrapperProps<any>) => {
	const Plugin = pluginComp;
	const pluginData = useSelector((state: IAppState<any>) => state.plugin);
	const { styles } = pluginData.data;
	const activeFont: FontT = fontHelper.getFontDetails(styles.fontId);
	const pluginStyles: CSSProperties = { ...(styles.background || {}) };

	if (activeFont && activeFont.id !== 'default') {
		pluginStyles.fontFamily = activeFont.family;
	}

	return (
		<div id="plugin-wrapper" style={pluginStyles}>
			{/* Font loading */}
			{activeFont && activeFont.id !== 'default' && (
				<link href={activeFont.url} rel="stylesheet" />
			)}

			{/* Custom CSS */}
			{!ignoreCustomCSS && (
				<style
					dangerouslySetInnerHTML={{ __html: styles.customCSS || '' }}
				></style>
			)}

			<Plugin />
		</div>
	);
};
