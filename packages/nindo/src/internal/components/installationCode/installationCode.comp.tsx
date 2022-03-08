import React from 'react';

import { TComponentType } from '../../../external/types/component.types';

import { FormRow } from '../../../external/components/formRow/formRow.comp';
import { CopyInput } from '../../../external/components/copyInput/copyInput.comp';

import './installationCode.scss';

type InstallationCodeProps = {
	componentId: string;
	componentType: TComponentType;
	buttonClassName?: string;
	className?: string;
	htmlOnly?: boolean;
};

export const InstallationCode = (props: InstallationCodeProps) => {
	const { componentId, componentType, className, buttonClassName, htmlOnly } =
		props;
	let scriptStr = `<div class="commonninja_component" comp-type="${componentType}" comp-id="${componentId}"></div>`;
	if (!htmlOnly) {
		scriptStr = `<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>\n${scriptStr}`;
	}

	return (
		<div className={`installation-code ${className ? className : ''}`}>
			<FormRow flow="column">
				<label>
					Place this code wherever you want the app to appear on your website
					(HTML editor, theme, template, etc).
				</label>
				<CopyInput
					value={scriptStr}
					inputType="textarea"
					buttonClassName={buttonClassName}
				/>
			</FormRow>
		</div>
	);
};

export const InstallationTutorials = () => {
	return (
		<div className="installation-tutorials">
			<a href="https://help.commoninja.com/hc/en-us/sections/360002482278-Adding-Common-Ninja-s-Apps-to-Your-Website" target='_blank'>
				Learn how to install on any platform
			</a>
		</div>
	);
};
