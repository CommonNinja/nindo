import React, { CSSProperties } from 'react';

import { fontsList } from '../../helpers/font.helper';
import { FormLabel } from '../formLabel/formLabel.comp';
import { FormRow } from '../formRow/formRow.comp';
import { Panel } from '../panel/panel.comp';
import { ColorPicker } from '../colorPicker/colorPicker.comp';
import { NinjaSelect } from '../select/select.comp';
import { NinjaSlider } from '../slider/slider.comp';
import { SystemIcon } from '../icon/icon.comp';
import { Button } from '../button/button.comp';
import {
	TAvailablePropertiesGroups,
	ICSSPropertyGroup,
	TCSSPropertyGroupName,
	TCSSProps,
} from './cssPropertiesEditor.types';

import './cssPropertiesEditor.scss';

interface ICSSPropertiesEditorProps {
	currentProperties: CSSProperties;
	onChange: (nextProperties: CSSProperties) => void;
	availablePropertiesGroups?: TAvailablePropertiesGroups;
}

const cssPropertiesGroups: ICSSPropertyGroup[] = [
	{
		name: 'typography',
		displayName: 'Typography',
		cssProperties: [
			'color',
			'fontFamily',
			'fontStyle',
			'textAlign',
			'fontWeight',
			'fontSize',
			'lineHeight',
			'letterSpacing',
		],
	},
	{
		name: 'background',
		displayName: 'Background',
		cssProperties: [
			'backgroundColor',
			'backgroundImage',
			'backgroundSize',
			'backgroundRepeat',
			'backgroundPosition',
		],
	},
	{
		name: 'borders',
		displayName: 'Borders',
		cssProperties: [
			'borderColor',
			'borderStyle',
			'borderWidth',
			'borderTopWidth',
			'borderRightWidth',
			'borderBottomWidth',
			'borderLeftWidth',
			'borderRadius',
		],
	},
	{
		name: 'spacing',
		displayName: 'Spacing',
		cssProperties: [
			'margin',
			'marginTop',
			'marginRight',
			'marginLeft',
			'marginBottom',
			'padding',
			'paddingTop',
			'paddingRight',
			'paddingBottom',
			'paddingLeft',
		],
	},
	{
		name: 'size',
		displayName: 'Size',
		cssProperties: ['width', 'height'],
	},
];

interface IMinMaxOption {
	[key: string]: {
		min?: number;
		max?: number;
		step?: number;
		unit?: 'px' | 'em';
	};
}

const maxMinOptions: IMinMaxOption = {
	height: { min: 0, max: 1000 },
	width: { min: 0, max: 1000 },
	letterSpacing: { min: 0, max: 3, step: 0.1, unit: 'em' },
	lineHeight: { min: 0, max: 3, step: 0.1, unit: 'em' },
	margin: { min: 0, max: 100 },
	marginBottom: { min: 0, max: 100 },
	marginLeft: { min: 0, max: 100 },
	marginRight: { min: 0, max: 100 },
	marginTop: { min: 0, max: 100 },
	padding: { min: 0, max: 100 },
	paddingBottom: { min: 0, max: 100 },
	paddingLeft: { min: 0, max: 100 },
	paddingRight: { min: 0, max: 100 },
	paddingTop: { min: 0, max: 100 },
	borderWidth: { min: 0, max: 20 },
	borderTopWidth: { min: 0, max: 20 },
	borderRightWidth: { min: 0, max: 20 },
	borderLeftWidth: { min: 0, max: 20 },
	borderBottomWidth: { min: 0, max: 20 },
	borderRadius: { min: 0, max: 50, unit: 'em' },
	fontSize: { min: 6, max: 120 },
};

const selectOptions = {
	backgroundRepeat: [
		{ value: '', label: 'Default' },
		{ value: 'no-repeat', label: 'No Repeat' },
		{ value: 'repeat', label: 'Repeat' },
		{ value: 'repeat-x', label: 'Repeat X' },
		{ value: 'repeat-y', label: 'Repeat Y' },
	],
	backgroundSize: [
		{ value: '', label: 'Default' },
		{ value: 'auto', label: 'Auto' },
		{ value: 'cover', label: 'Cover' },
		{ value: 'contain', label: 'Contain' },
	],
	backgroundPosition: [
		{ value: '', label: 'Default' },
		{ value: 'center center', label: 'Center' },
		{ value: 'center right', label: 'Right' },
		{ value: 'center left', label: 'Left' },
	],
	fontWeight: [
		{ value: '', label: 'Default' },
		{ value: '200', label: '200' },
		{ value: '300', label: '300' },
		{ value: '500', label: '500' },
		{ value: '700', label: '700' },
	],
	fontStyle: [
		{ value: '', label: 'Default' },
		{ value: 'normal', label: 'Normal' },
		{ value: 'italic', label: 'Italic' },
		{ value: 'oblique', label: 'Oblique' },
	],
	borderStyle: [
		{ value: '', label: 'Default' },
		{ value: 'none', label: 'None' },
		{ value: 'solid', label: 'Solid' },
		{ value: 'dashed', label: 'Dashed' },
		{ value: 'dotted', label: 'Dotted' },
	],
	textAlign: [
		{ value: '', label: 'Default' },
		{ value: 'center', label: 'Center' },
		{ value: 'left', label: 'Left' },
		{ value: 'right', label: 'Right' },
	],
	fontFamily: fontsList.map((f) => ({ value: f.id, label: f.name })),
};

const getAvailablePropertyGroups = (
	availablePropertiesGroups?: TAvailablePropertiesGroups
): ICSSPropertyGroup[] => {
	const propertiesGroups: ICSSPropertyGroup[] = [];

	if (
		!availablePropertiesGroups ||
		(typeof availablePropertiesGroups !== 'string' &&
			availablePropertiesGroups.length === 0)
	) {
		cssPropertiesGroups.forEach((pg) => {
			propertiesGroups.push(pg);
		});

		return propertiesGroups;
	}

	if (typeof availablePropertiesGroups === 'string') {
		cssPropertiesGroups.forEach((pg) => {
			if (pg.name === availablePropertiesGroups) {
				propertiesGroups.push(pg);
			}
			return;
		});

		return propertiesGroups;
	}

	availablePropertiesGroups.forEach(
		(apg: TCSSPropertyGroupName | ICSSPropertyGroup) => {
			cssPropertiesGroups.forEach((pg) => {
				// Array of group names only
				if (typeof apg === 'string') {
					if (pg.name === apg) {
						propertiesGroups.push(pg);
					}
					return;
				}

				// Array of groups objects
				if (pg.name === apg.name) {
					propertiesGroups.push({
						...pg,
						...apg,
					});
				}
			});
		}
	);

	return propertiesGroups;
};

const renderCSSPropertyEditor = (
	cssPropName: TCSSProps,
	currentValue: any,
	onChange: (propName: string, newValue: string) => void
) => {
	const result = cssPropName.replace(/([A-Z])/g, ' $1');
	const displayName = result.charAt(0).toUpperCase() + result.slice(1);
	const numbericValue: number = parseFloat(currentValue);

	switch (cssPropName) {
		case 'backgroundColor':
		case 'borderColor':
		case 'color':
			return (
				<FormRow key={cssPropName}>
					<FormLabel>{displayName}</FormLabel>
					<ColorPicker
						onChange={(color: any) => onChange(cssPropName, color)}
						selectedColor={currentValue}
						colorFormat="hex"
						position="bottom"
					/>
				</FormRow>
			);
		case 'backgroundImage':
			break;
		case 'backgroundRepeat':
		case 'backgroundSize':
		case 'backgroundPosition':
		case 'borderStyle':
		case 'fontWeight':
		case 'fontStyle':
		case 'textAlign':
		case 'fontFamily':
			return (
				<FormRow key={cssPropName} flow="column">
					<FormLabel>{displayName}</FormLabel>
					<NinjaSelect
						mode="dark"
						isSearchable={false}
						value={
							selectOptions[cssPropName].filter(
								(o) => o.value === currentValue
							)[0] || selectOptions[cssPropName][0]
						}
						options={selectOptions[cssPropName]}
						onChange={(newValue: any) => {
							onChange(cssPropName, newValue.value);
						}}
					/>
				</FormRow>
			);
		case 'height':
		case 'width':
		case 'letterSpacing':
		case 'lineHeight':
		case 'margin':
		case 'marginBottom':
		case 'marginLeft':
		case 'marginRight':
		case 'marginTop':
		case 'padding':
		case 'paddingBottom':
		case 'paddingLeft':
		case 'paddingRight':
		case 'paddingTop':
		case 'borderWidth':
		case 'borderTopWidth':
		case 'borderRightWidth':
		case 'borderLeftWidth':
		case 'borderBottomWidth':
		case 'borderRadius':
		case 'fontSize':
			return (
				<FormRow key={cssPropName} flow="column">
					<FormLabel>
						<span>{displayName}</span>
						<span className="number-input">
							<input
								type="number"
								value={numbericValue || 0}
								onChange={(e: any) =>
									onChange(
										cssPropName,
										`${e.target.value}${
											maxMinOptions[cssPropName]?.unit || 'px'
										}`
									)
								}
							/>
							<em>{maxMinOptions[cssPropName]?.unit || 'px'}</em>
						</span>
					</FormLabel>
					<NinjaSlider
						min={maxMinOptions[cssPropName]?.min || 0}
						max={maxMinOptions[cssPropName]?.max || 1000}
						step={maxMinOptions[cssPropName]?.step || 1}
						value={numbericValue || 0}
						onChange={(num: number) =>
							onChange(
								cssPropName,
								`${num}${maxMinOptions[cssPropName]?.unit || 'px'}`
							)
						}
						theme="dark"
					/>
				</FormRow>
			);
	}

	return (
		<FormRow key={cssPropName} flow="column">
			<FormLabel>{displayName}</FormLabel>
			<input
				type="text"
				value={currentValue || ''}
				onChange={(e: any) => onChange(cssPropName, e.target.value)}
			/>
		</FormRow>
	);
};

export const CSSPropertiesEditor = (props: ICSSPropertiesEditorProps) => {
	const { currentProperties = {}, onChange, availablePropertiesGroups } = props;
	const propertiesGroups: ICSSPropertyGroup[] = getAvailablePropertyGroups(
		availablePropertiesGroups
	);

	function cssPropChanged(propName: string, value: string) {
		onChange({
			...currentProperties,
			[propName]: value,
		});
	}

	return (
		<div className="css-props-editor">
			{propertiesGroups.map((pg) => {
				return (
					<Panel
						key={`css_prop_group_${pg.name}`}
						titleComponent={
							<>
								<span>{pg.displayName}</span>
								<div className="actions">
									<Button
										title="Restore to default"
										color="transparent"
										mode="default"
										onClick={(e) => {
											e.stopPropagation();
											const restoredProps: CSSProperties = {
												...currentProperties,
											};

											(pg.cssProperties || []).forEach((cssProp) => {
												delete restoredProps[cssProp];
											});

											onChange(restoredProps);
										}}
									>
										<SystemIcon size={18} type="corner-right-down" />
									</Button>
								</div>
							</>
						}
						openedByDefault={pg.openedByDefault}
					>
						{(pg.cssProperties || []).map((cssProp) => {
							return renderCSSPropertyEditor(
								cssProp,
								currentProperties[cssProp],
								cssPropChanged
							);
						})}
					</Panel>
				);
			})}
		</div>
	);
};
