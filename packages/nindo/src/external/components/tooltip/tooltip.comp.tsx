import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { v4 as uuidv4 } from 'uuid';


import './tooltip.scss';

export const TooltipConfig: Partial<ITooltipProps> = {
	direction: 'top',
	pointer: '?',
	backgroundColor: '#ff4572',
	textColor: '#fff',
};

interface ITooltipProps {
	content: string;
	direction?: 'bottom' | 'left' | 'right' | 'top';
	pointer?: string;
	width?: number;
	backgroundColor?: string;
	textColor?: string;
	arrowColor?: string;
}

export const Tooltip = (props: ITooltipProps) => {
	const {
		content,
		pointer,
		direction = 'top',
		backgroundColor,
		textColor,
		arrowColor,
	} = { ...TooltipConfig, ...props };

	const tooltipId = uuidv4()

	useEffect(() => {
		ReactTooltip.rebuild();
	});

	return (
		<>
			<span className="tooltip" data-for={tooltipId} data-tip={content}>
				<span className="tooltip-pointer">{pointer || '?'}</span>
			</span>
			<ReactTooltip
				id={tooltipId}
				arrowColor={arrowColor}
				textColor={textColor || 'white'}
				place={direction}
				backgroundColor={backgroundColor}
				className="react-tooltip"
				html={true}
				effect="solid"
			/>
		</>
	);
};

