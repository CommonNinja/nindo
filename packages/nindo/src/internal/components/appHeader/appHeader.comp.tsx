import React from 'react';

import { User } from '../user/user.comp';
import { H3 } from '../heading/heading.comp';
import { SystemIcon } from '../../../external/components/icon/icon.comp';
import { IUserProps } from '../user/user.comp';
import { TPlatform } from '../../../external/types/editor.types';
import { useQuery } from '../../../external/hooks/query.hook';

import './appHeader.scss';

interface AppHeaderProps {
	userProps: IUserProps;
	componentName?: string;
	hidePoweredBy?: boolean;
	logoImageUrl?: string;
	logoUrl?: string;
	anonymousUser?: boolean;
	vendor?: TPlatform;
}

const defaultIcon =
	'https://website-assets.commoninja.com/general/default-icon.png';
const defaultLogo =
	'https://website-assets.commoninja.com/general/logo-white.png';

export const AppHeader = (props: AppHeaderProps) => {
	const {
		componentName,
		logoUrl,
		logoImageUrl,
		hidePoweredBy,
		anonymousUser,
		userProps,
		vendor,
	} = props;
	const { componentType } = userProps;
	const query = useQuery();

	function renderLogo() {
		if (!componentName) {
			return (
				<a href={logoUrl || '/'}>
					<img src={logoImageUrl || defaultLogo} alt={componentName} />
				</a>
			);
		}

		return (
			<div className="flex-wrapper plugin">
				<a href={logoUrl || '/'}>
					<img src={logoImageUrl || defaultIcon} alt={componentName} />
				</a>
				<H3 accented={true}>
					<a href={logoUrl || '/'}>{componentName}</a>
				</H3>
				{!hidePoweredBy && (
					<p className="powered-by">
						<span>/ &nbsp; </span>by &nbsp;
						<a
							href="https://www.commoninja.com/"
							target="_blank"
							rel="noopener noreferrer"
							title="Common Ninja"
						>
							Common Ninja
						</a>
					</p>
				)}
			</div>
		);
	}

	return (
		<header id="app-header">
			<div className="app-top-header">
				<div className="inner wrapper flex-wrapper">
					<figure className="logo">
						{renderLogo()}
					</figure>
					{!anonymousUser && (
						<nav className="flex-wrapper">
							<User {...userProps} />
						</nav>
					)}
					{(vendor === 'duda' ||
						vendor === 'shopify' ||
						vendor === 'bigcommerce' ||
						vendor === 'shift4shop') && (
						<nav className="flex-wrapper">
							<a
								title="Back to Dashboard"
								className="dashboard-link"
								rel="noopener noreferrer"
								href={`/${vendor}/dashboard/${componentType}?${query.toString()}`}
							>
								<SystemIcon type="arrow-left" size={16} /> Back to Dashboard
							</a>
						</nav>
					)}
				</div>
			</div>
		</header>
	);
};
