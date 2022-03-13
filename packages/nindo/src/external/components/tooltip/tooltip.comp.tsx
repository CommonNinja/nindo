import React from 'react';
import ReactTooltip from 'react-tooltip';

import './tooltip.scss';

type TooltipProps = {
	content: string;
	direction?: 'bottom' | 'left' | 'right' | 'top';
	pointer?: string;
	width?: number;
	backgroundColor?: string
	textColor?: string
	arrowColor?: string
};

export const Tooltip = (props: TooltipProps) => {
	const { pointer, content, direction, width, backgroundColor, textColor, arrowColor } = props;

	return (
		<>
			<span className="tooltip" data-tip={content} >
				<span className="tooltip-pointer">{pointer || '?'}</span>
			</span>
			<ReactTooltip arrowColor={arrowColor} textColor={textColor || 'white'} place={direction} backgroundColor={backgroundColor} className={`react-tooltip`} html={true} effect="solid" />
		</>
	);
};
