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
	const [activeItem, setActiveItem] = useState<INoCodeCSSItem | null>(null);

	function renderCSSPropertiesEditor() {
		if (!activeItem) {
			return <></>;
		}

		return (
			<div className="css-props-editor-wrapper">
				<Button
					className="close-css-props-editor"
					onClick={() => setActiveItem(null)}
				>
					<SystemIcon size={20} type="arrow-left" />
					<span>Back</span>
				</Button>
				<CSSPropertiesEditor
					currentProperties={activeItem.value}
					onChange={(nextProperties) => {
						onChange(activeItem.propName, nextProperties);
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
						<FormLabel>{item.label || item.value}</FormLabel>
						<Button
							className="customize-btn"
							color="transparent"
							onClick={() => setActiveItem(item)}
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