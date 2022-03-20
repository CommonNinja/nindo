import React from 'react';
import {
	InstallationCode,
	InstallationTutorials,
} from '../installationCode/installationCode.comp';
import { pluginService } from '../../services';
import { FormRow } from '../../../external/components/formRow/formRow.comp';
import { ContextMenuWrapper } from '../../../external/components/contextMenuWrapper/contextMenuWrapper.comp';
import { ContextMenuSection } from '../../../external/components/contextMenuSection/contextMenuSection.comp';
import { Tabs } from '../../../external/components/tabs/tabs.comp';
import { useAppContext } from '../../../external/hooks/context.hook';

import './publishSettings.scss';

type PublishSettingsProps = {
	pluginId: string | null;
};

export const PublishSettingsComp = (props: PublishSettingsProps) => {
	const { pluginId } = props;
	const { platform } = useAppContext();

	function renderForShopify() {
		const items = [
			{ id: 'blocks', name: 'App Block Installation' },
			{ id: 'manual', name: 'Manual Installation' },
		];

		return (
			<Tabs
				items={items}
				resolveTabComp={(activeTab) => {
					return (
						<ContextMenuSection title="Installation Instructions">
							<InstallationCode
								platform={platform}
								activeTab={activeTab as any}
								componentId={pluginId || ''}
								componentType={pluginService.pluginType}
								buttonClassName="button green"
							/>
						</ContextMenuSection>
					);
				}}
			/>
		);
	}

	function renderForDuda() {
		return (
			<ContextMenuSection title="Installation Instructions">
				<InstallationCode
					platform={platform}
					componentId={pluginId || ''}
					componentType={pluginService.pluginType}
					buttonClassName="button green"
				/>
			</ContextMenuSection>
		);
	}

	function renderForOthers() {
		return (
			<>
				<ContextMenuSection title="Installation Instructions">
					<InstallationCode
						platform={platform}
						componentId={pluginId || ''}
						componentType={pluginService.pluginType}
						buttonClassName="button green"
					/>
				</ContextMenuSection>
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
				<ContextMenuSection title="Tutorials">
					<InstallationTutorials />
				</ContextMenuSection>
			</>
		);
	}

	function renderTutorial() {
		if (platform === 'shopify') {
			return renderForShopify();
		}

		if (platform === 'duda') {
			return renderForDuda();
		}

		return renderForOthers();
	}

	if (!pluginId) {
		return (
			<p className="center message all-centered">
				The code will be available <br />
				once you hit the "Save Changes" button.
			</p>
		);
	}

	return (
		<ContextMenuWrapper className="publish-settings">
			{renderTutorial()}
		</ContextMenuWrapper>
	);
};

export default PublishSettingsComp;
