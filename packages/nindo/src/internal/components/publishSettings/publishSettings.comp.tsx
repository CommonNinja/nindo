import React from 'react';
import {
	InstallationCode,
	InstallationTutorials,
} from '../installationCode/installationCode.comp';
import { pluginService } from '../../services';
import { FormRow } from '../../../external/components/formRow/formRow.comp';
import { ContextMenuWrapper } from '../../../external/components/contextMenuWrapper/contextMenuWrapper.comp';
import { ContextMenuSection } from '../../../external/components/contextMenuSection/contextMenuSection.comp';

import './publishSettings.scss';
import { Tabs } from '../../../external/components/tabs/tabs.comp';
import { usePluginContext } from '../../..';

type PublishSettingsProps = {
	pluginId: string | null;
	showCode?: boolean;
	htmlCodeOnly?: boolean;
	hideTutorials?: boolean;
};

export const PublishSettingsComp = (props: PublishSettingsProps) => {
	const { pluginId, showCode = true, hideTutorials, htmlCodeOnly } = props;
	const { platform } = usePluginContext();

	function renderTutorial(pluginId: string) {
		const items = [{ id: 'App Block Installation', name: 'App Block Installation' }, { id: 'Manual Installation', name: 'Manual Installation' }]
		if (platform === 'shopify') {
			return (
				<Tabs items={items} resolveTabComp={(activeTab) => {
					if (activeTab === 'App Block Installation') {
						return (
							<ContextMenuSection title='App Block Installation'  >
								<InstallationCode
									vendor='shopify'
									componentId={pluginId}
									componentType={pluginService.pluginType}
									buttonClassName="button green"
									htmlOnly={htmlCodeOnly}
								/>
							</ContextMenuSection>
						)
					} else {
						return (
							<ContextMenuSection title='Manual Installation' >
								<InstallationCode
									componentId={pluginId}
									componentType={pluginService.pluginType}
									buttonClassName="button green"
									htmlOnly={htmlCodeOnly}
								/>
							</ContextMenuSection>
						)
					}
				}} />
			)
		}

		if (platform === 'duda') {
			return (
				<ContextMenuSection title='Installation' >
					<InstallationCode
						vendor={'duda'}
						componentId={pluginId}
						componentType={pluginService.pluginType}
						buttonClassName="button green"
						htmlOnly={htmlCodeOnly}
					/>
				</ContextMenuSection>
			)
		} else {
			return (
				<ContextMenuSection title='Manual Installation' >
					<InstallationCode
						componentId={pluginId}
						componentType={pluginService.pluginType}
						buttonClassName="button green"
						htmlOnly={htmlCodeOnly}
					/>
				</ContextMenuSection>
			)
		}
	}

	return !pluginId ? (
		<p className="center message all-centered">
			The code will be available <br />
			once you hit the "Save Changes" button.
		</p>
	) : (
		<ContextMenuWrapper className="publish-settings">
			{showCode && (
				renderTutorial(pluginId)
			)}
			{(platform !== 'shopify' && platform !== 'duda') &&
				<>
					<ContextMenuSection title="App Details">
						<FormRow>
							<label>App Instance ID</label>
							<span>{pluginId}</span>
						</FormRow>
						<FormRow>
							<label>App Type</label>
							<span>{pluginService.pluginType}</span>
						</FormRow>
					</ContextMenuSection>
					{!hideTutorials && (
						<ContextMenuSection title="Tutorials">
							<InstallationTutorials />
						</ContextMenuSection>
					)}
				</>
			}
		</ContextMenuWrapper>
	);
};

export default PublishSettingsComp;
