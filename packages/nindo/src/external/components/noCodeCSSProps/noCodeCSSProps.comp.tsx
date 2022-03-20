import React, { CSSProperties, useState } from 'react';
import { Button } from '../button/button.comp';
import { CSSPropertiesEditor } from '../cssPropertiesEditor/cssPropertiesEditor.comp';
import { FormLabel } from '../formLabel/formLabel.comp';
import { FormRow } from '../formRow/formRow.comp';
import { SystemIcon } from '../icon/icon.comp';
import { INoCodeCSSItem } from './noCodeCSSProps.types';

export const NoCodeCSSProps = ({ items, onChange }: {
	items: INoCodeCSSItem[];
	onChange: (propName: string, value: CSSProperties) => void;
}) => {
	const [activeProp, setActiveProp] = useState<string>('');

	function renderCSSPropertiesEditor() {
		const activeItem: INoCodeCSSItem | undefined = items.find((item) => item.propName === activeProp);
		if (!activeItem) {
			return <></>;
		}

		return (
			<div className="css-props-editor-wrapper">
				<Button
					className="close-css-props-editor"
					onClick={() => setActiveProp('')}
				>
					<SystemIcon size={20} type="arrow-left" />
					<span>Back</span>
				</Button>
				<CSSPropertiesEditor
					currentProperties={{ ...activeItem.value }}
					onChange={(nextProperties) => {
						onChange(activeProp, nextProperties);
					}}
					availablePropertiesGroups={activeItem.allowedProps}
				/>
			</div>
		);
	}

	return (
		<>
			{
				items.map((item) => (
					<FormRow key={`nocode-css-${item.propName}`}>
						<FormLabel>{item.label || item.propName}</FormLabel>
						<Button
							className="customize-btn"
							color="transparent"
							onClick={() => setActiveProp(item.propName)}
						>
							Customize
						</Button>
					</FormRow>
				))
			}
			{renderCSSPropertiesEditor()}
		</>
	);
};