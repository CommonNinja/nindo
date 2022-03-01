import React, { useEffect } from 'react';
import {
	premiumHelper,
	Toggler,
	FormRow,
	PremiumOpener,
	ContextMenuWrapper,
	ContextMenuSection,
	NameFieldEditor,
	PrivacySelector,
	FormLabel,
	notificationHelper,
	usePluginData,
	usePlugin,
} from '../../../exports';

import { IPluginData } from '../../plugin/plugin.types';

import './pluginSettings.scss';

export const PluginSettingsComp = () => {
	const plugin = usePlugin<IPluginData>();
	const [pluginData, updateData] = usePluginData<IPluginData>();
	const { settings } = pluginData;
	let firstInput: HTMLInputElement | null = null;

	function setSettingField(settingName: string, value: any, e: any) {
		if (!premiumHelper.getFeatureValue(settingName)) {
			notificationHelper.removeAll();
			notificationHelper.warning({
				title: '✭ Premium Feature',
				message: "Your current plan doesn't support this premium feature. ",
				children: <PremiumOpener> Upgrade your account now!</PremiumOpener>,
				position: 'tc',
				autoDismiss: 4,
			});
			return;
		}

		updateData({
			settings: {
				...settings,
				[settingName]: value,
			},
		});
	}

	useEffect(() => {
		if (firstInput) {
			firstInput.focus();
			firstInput.selectionStart = firstInput.value.length;
			firstInput.selectionEnd = firstInput.value.length;
		}
	}, [firstInput]);

	return (
		<ContextMenuWrapper className="plugin-settings">
			<ContextMenuSection title="General Settings">
				<NameFieldEditor currentValue={plugin.name} />
				<PrivacySelector currentValue={plugin.privacy} />
			</ContextMenuSection>
			<ContextMenuSection title="Visibility">
				<FormRow>
					<FormLabel>Show Title</FormLabel>
					<Toggler
						isChecked={settings.showTitle}
						onChange={(e: any, value: boolean) =>
							setSettingField('showTitle', value, e)
						}
					/>
				</FormRow>
			</ContextMenuSection>
		</ContextMenuWrapper>
	);
};
