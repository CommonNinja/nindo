import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { darken, lighten, getLuminance } from 'color2k';

import { TChildren } from '../../types/plugin.types';

import 'react-loading-skeleton/dist/skeleton.css';

type NinjaSkeletonThemeProps = {
	children: TChildren;
	leadColor?: string;
};

const isColor = (strColor: string) => {
	const s = new Option().style;
	s.color = strColor;
	return s.color !== '';
};

export const NinjaSkeletonTheme = ({
	leadColor,
	children,
}: NinjaSkeletonThemeProps) => {
	let color = 'rgba(255,255,255,0.1)';
	let highlightColor = 'rgba(255,255,255,0.3)';

	try {
		let bg = leadColor;
		const urlParams = new URLSearchParams(
			typeof window !== 'undefined' ? window?.location?.search : ''
		);

		if (!bg) {
			bg = decodeURIComponent(urlParams.get('bg') || '');
		}

		if (!bg || !isColor(bg)) {
			bg = '#ffffff';
		}

		const brightness = getLuminance(bg);
		color = brightness > 0.5 ? darken(bg, 0.05) : lighten(bg, 0.05);
		highlightColor = brightness > 0.5 ? darken(bg, 0.1) : lighten(bg, 0.1);
	} catch (e) {}

	return (
		<SkeletonTheme baseColor={color} highlightColor={highlightColor}>
			{children}
		</SkeletonTheme>
	);
};

export const NinjaSkeleton = Skeleton;
