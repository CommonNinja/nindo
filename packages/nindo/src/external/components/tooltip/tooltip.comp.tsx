import React from 'react';
import ReactTooltip from 'react-tooltip';

import { ITooltipProps } from './tooltip.types';

import './tooltip.scss';

export const TooltipConfig: Partial<ITooltipProps> = {
	direction: 'top',
	pointer: '?',
	backgroundColor: '#ff4572',
	textColor: '#fff',
};

export const Tooltip = (props: ITooltipProps) => {
	const {
		content,
		pointer,
		direction,
		backgroundColor,
		textColor,
		arrowColor,
	} = { ...TooltipConfig, ...props };

	return (
		<>
			<span className="tooltip" data-tip={content}>
				<span className="tooltip-pointer">{pointer || '?'}</span>
			</span>
			<ReactTooltip
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

