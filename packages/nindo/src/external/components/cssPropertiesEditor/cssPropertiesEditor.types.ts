export interface ICSSPropertyGroup {
	name: TCSSPropertyGroupName;
	cssProperties?: TCSSProps[];
	displayName?: string;
	openedByDefault?: boolean;
}

export type TAvailablePropertiesGroups =
	| TCSSPropertyGroupName
	| (TCSSPropertyGroupName | ICSSPropertyGroup)[];

export type TCSSPropertyGroupName =
	| 'typography'
	| 'background'
	| 'borders'
	| 'spacing'
	| 'size';

export type TCSSProps =
	| 'fontSize'
	| 'fontFamily'
	| 'fontStyle'
	| 'lineHeight'
	| 'letterSpacing'
	| 'textAlign'
	| 'color'
	| 'fontWeight'
	| 'backgroundColor'
	| 'backgroundImage'
	| 'backgroundSize'
	| 'backgroundRepeat'
	| 'backgroundPosition'
	| 'borderRadius'
	| 'borderColor'
	| 'borderStyle'
	| 'borderWidth'
	| 'borderTopWidth'
	| 'borderRightWidth'
	| 'borderBottomWidth'
	| 'borderLeftWidth'
	| 'margin'
	| 'marginTop'
	| 'marginRight'
	| 'marginLeft'
	| 'marginBottom'
	| 'padding'
	| 'paddingTop'
	| 'paddingRight'
	| 'paddingBottom'
	| 'paddingLeft'
	| 'width'
	| 'height';