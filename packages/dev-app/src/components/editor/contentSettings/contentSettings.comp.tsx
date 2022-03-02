import React, { ChangeEvent } from 'react';
import {
	FormRow,
	ContextMenuWrapper,
	ContextMenuSection,
	Input,
	FormLabel,
	usePluginData,
} from '../../../exports';
import { IPluginData } from '../../plugin/plugin.types';

import './contentSettings.scss';

export const ContentSettingsComp = () => {
	const [pluginData, updateData] = usePluginData<IPluginData>();
	const { content } = pluginData;

	function setContentField(propName: string, value: any) {
		updateData({
			content: {
				...content,
				[propName]: value,
			},
		});
	}

	return (
		<ContextMenuWrapper className="content-settings">
			<ContextMenuSection title="Content Settings">
				<FormRow>
					<FormLabel>Content test field</FormLabel>
					<input
						type="text"
						value={content.test}
						placeholder="Enter text..."
						onChange={(e) => setContentField('test', e.target.value)}
					/>
				</FormRow>
			</ContextMenuSection>
		</ContextMenuWrapper>
	);
};
