import { create } from '@storybook/theming';
import logo from '../stories/assets/cn-logo.svg';

export default create({
	base: 'light',
	brandTitle: 'Common Ninja',
	brandUrl: 'https://commoninja.com/',
	brandImage: logo,
});
