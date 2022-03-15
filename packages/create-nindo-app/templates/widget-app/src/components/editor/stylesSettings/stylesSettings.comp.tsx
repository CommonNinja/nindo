import React, { useState } from 'react';
import loadable from '@loadable/component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
	premiumHelper,
	PremiumOpener,
	Tabs,
	Popup,
	ContextMenuWrapper,
	ContextMenuSection,
	Loader,
	FontFamilySelector,
	usePluginData,
	NoCodeCSSProps,
} from '@commonninja/nindo';

import { IPluginData } from '../../plugin/plugin.types';
import { Plugin } from '../../plugin/plugin.comp';

import './stylesSettings.scss';

const CustomCSSEditor = loadable(() => import('@commonninja/nindo'), {
	resolveComponent: (module) => module['CustomCSSEditor'],
	fallback: <Loader />,
});

export const StylesSettingsComp = () => {
	const [pluginData, updateData] = usePluginData<IPluginData>();
	const [cssPopupOpened, setCssPopupOpened] = useState<boolean>(false);
	const { styles } = pluginData;

	function stylePropChanged(propName: string, value: any) {
		updateData({
			styles: {
				...styles,
				[propName]: value,
			},
		});
	}

	function onCustomCSSChange(newValue: string) {
		stylePropChanged('customCSS', newValue);
	}

	function fontChanged(id: string) {
		stylePropChanged('fontId', id);
	}

	function renderAdvancedTab() {
		return (
			<>
				<ContextMenuSection title="Custom Styles">
					<NoCodeCSSProps
						onChange={(propName, value) => stylePropChanged(propName, value)}
						items={[
							{
								value: styles.background,
								propName: 'background',
								label: 'Main Wrapper',
							},
							{
								value: styles.title,
								propName: 'title',
								label: 'Title',
							},
						]}
					/>
				</ContextMenuSection>
				<ContextMenuSection title="Custom CSS" className="center">
					{premiumHelper.getFeatureValue('customCSS') ? (
						<div className="custom-css-button">
							<button
								className="button major"
								onClick={() => setCssPopupOpened(true)}
							>
								Click to Edit
							</button>
						</div>
					) : (
						<p style={{ margin: 0 }}>
							<FontAwesomeIcon
								icon={faStar}
								title="Premium Feature"
								style={{ marginRight: 5 }}
							/>
							This feature is available for premium members only.{' '}
							<PremiumOpener>Upgrade Now!</PremiumOpener>
						</p>
					)}
				</ContextMenuSection>
			</>
		);
	}

	function renderBasicTab() {
		return (
			<>
				<ContextMenuSection title="Font">
					<FontFamilySelector
						selectedFontId={styles.fontId || 'font_open_sans'}
						updateFont={fontChanged}
					/>
				</ContextMenuSection>
			</>
		);
	}

	return (
		<ContextMenuWrapper className="styles-settings">
			<Tabs
				items={[
					{
						id: 'basic',
						name: 'Basic',
					},
					{
						id: 'advanced',
						name: 'Advanced',
					},
				]}
				resolveTabComp={(id) => {
					if (id === 'basic') {
						return renderBasicTab();
					}

					if (id === 'advanced') {
						return renderAdvancedTab();
					}
				}}
			/>
			{cssPopupOpened && (
				<Popup
					show={cssPopupOpened}
					closeCallback={() => setCssPopupOpened(false)}
					className="custom-css-popup"
				>
					<CustomCSSEditor
						css={styles.customCSS}
						defaultStyles={''}
						onUpdate={(newStyles) => {
							onCustomCSSChange(newStyles);
							setCssPopupOpened(false);
						}}
						pluginComp={Plugin}
					/>
				</Popup>
			)}
		</ContextMenuWrapper>
	);
};
