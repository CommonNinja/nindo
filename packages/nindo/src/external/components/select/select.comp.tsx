import React from 'react';
import Select, { GroupBase, Props } from 'react-select';
import AsyncSelect, { AsyncProps } from 'react-select/async';

import './select.scss';

type NinjaSelectCommonProps = { mode: 'dark' | 'light' };

type INinjaSelectProps = NinjaSelectCommonProps & Props;

type INinjaAsyncSelectProps = NinjaSelectCommonProps &
	AsyncProps<boolean, boolean, GroupBase<boolean>>;

export const NinjaSelect = (props: INinjaSelectProps) => {
	const { mode, ...restProps } = props;

	return (
		<Select
			{...restProps}
			className={`ninja-select ${mode}`}
			classNamePrefix="ninja-select"
		/>
	);
};

export const NinjaAsyncSelect = (props: INinjaAsyncSelectProps) => {
	const { mode, ...restProps } = props;

	return (
		<AsyncSelect
			{...restProps}
			className={`ninja-select ${mode}`}
			classNamePrefix="ninja-select"
		/>
	);
};
