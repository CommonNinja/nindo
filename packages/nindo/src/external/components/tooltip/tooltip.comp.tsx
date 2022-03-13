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
};

export const Tooltip = (props: TooltipProps) => {
	const { pointer, content, direction, width, backgroundColor, textColor } = props;

	return (
		<>
			<span className="tooltip" data-tip={content} >
				<span className="tooltip-pointer">{pointer || '?'}</span>
			</span>
			<ReactTooltip textColor={textColor || 'white'} place={direction || "top"} backgroundColor={backgroundColor || '#ff4572'} className={`react-tooltip`} html={true} effect="solid" />
		</>
	);
};
