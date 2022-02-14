import React from 'react';

import {
	NinjaSkeleton,
	NinjaSkeletonTheme,
} from '../../../external/components/skeleton/skeleton.comp';
import { TChildren } from '../../../external/types/plugin.types';
import {
	ICycle,
	IFeature,
	IPricingModel,
	IPlan,
	IFeatureGroup,
} from '../../../external/types/plan.types';
import { Tooltip } from '../../../external/components/tooltip/tooltip.comp';
import { calculatePricing } from '../../helpers';
import { TPlatform } from '../../../external/types/editor.types';

import './pricingTable.scss';

export const PricingTableLoader = () => {
	return (
		<div className="pricing-table-wrapper">
			<div className="pricing-table">
				{Array.from(new Array(4)).map((cat, cIdx) => (
					<div className="mini-box" key={`cat_${cIdx}`}>
						<NinjaSkeletonTheme leadColor="#efefef">
							<div
								className="title"
								style={{ width: '70%', borderBottom: 'none' }}
							>
								<NinjaSkeleton width="100%" height={30} />
							</div>
							<main>
								{Array.from(new Array(5)).map((fe, idx) => (
									<div
										key={`feature_meta_${cIdx}_${idx}`}
										style={{ display: 'block' }}
									>
										<NinjaSkeleton width="90%" height={16} />
									</div>
								))}
							</main>
						</NinjaSkeletonTheme>
					</div>
				))}
			</div>
		</div>
	);
};

export const PricingTable = ({
	planData,
	activeCycle,
	buttonsRenderer,
	fullComparisonAvailable,
	vendor,
	vendorFeaturesBlockList,
}: {
	planData: IPricingModel;
	activeCycle: ICycle;
	buttonsRenderer: (plan: IPlan) => TChildren;
	fullComparisonAvailable: boolean;
	vendor?: TPlatform;
	vendorFeaturesBlockList?: string[];
}) => {
	const highlightedFeatures: IFeature[] = [];

	planData.featureGroups.forEach((group: IFeatureGroup) => {
		group.features.forEach((feature: IFeature) => {
			if (!feature.highlight) {
				return;
			}
			highlightedFeatures.push(feature);
		});
	});

	if (!highlightedFeatures.length) {
		return <></>;
	}

	return (
		<div className="pricing-table-wrapper">
			<div className="pricing-table">
				{
					planData.plans.map((plan: IPlan) => (
						<div className={`mini-box ${plan.className}`} key={`mini_plan_${plan.className}`}>
							{/* {
				  plan.className === 'pro' &&
				  <div className="ribbon"><span>Popular</span></div>
				} */}
							<div className="title">{plan.name}</div>
							<div className="price">
								{
									plan.pricing !== calculatePricing(plan.pricing, activeCycle.discount) &&
									<span className="after-discount">&nbsp;&nbsp;${(plan.pricing)}&nbsp;&nbsp;</span>
								}
								${(calculatePricing(plan.pricing, activeCycle.discount) === 0) ? '0.00' : (calculatePricing(plan.pricing, activeCycle.discount))}
							</div>
							<p className={`per-month-txt ${plan.className}`}>{`Per month, Billed ${(activeCycle.period === 'year') ? 'annually' : 'monthly'} `}</p>
							{buttonsRenderer(plan)}
							{/* {
					fullComparisonAvailable &&
					<Button 
					  className="see-all-button" 
					  type="button" 
					  mode="default" 
					  color="transparent"
					  onClick={() => document.querySelector('.full-comparison-table-wrapper')?.scrollIntoView({ behavior: 'smooth' })}
					>See all features</Button>
				  } */}
							<main>
								{
									highlightedFeatures.map((feature) => {
										const value = plan.features[feature.name];
										return (
											<div key={`highlighted_feature_${feature.name}`}>
												<span className="value">{value}</span>
												<span className={`feature-display ${(value) ? '' : 'unchecked'}`}>{feature.display}</span>
												{
													feature.tip &&
													<Tooltip
														content={feature.tip}
													/>
												}
											</div>
										);
									})
								}
							</main>
							<footer>


							</footer>
						</div>
					))
				}
			</div>
		</div>
	);
};
