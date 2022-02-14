import React, { useRef } from 'react';

import { TChildren } from '../../../external/types/plugin.types';
import {
	ICycle,
	IPricingModel,
	IPlan,
	IFeatureGroup,
	IFeature,
} from '../../../external/types/plan.types';
import { calculatePricing } from '../../helpers';
import { SystemIcon } from '../../../external/components/icon/icon.comp';
import { TPlatform } from '../../../external/types/editor.types';

import './pricingComparisonTable.scss';

const StarSvg = ({ icon }: { icon: string }) => {
	if (icon === 'checked') {
		return (
			<svg
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="15" cy="15" r="15" fill="#4C73F0" />
				<path
					d="M17.4142 4.64204C16.1994 5.37192 15.3439 6.1018 14.593 7.04482C13.9518 7.85221 13.4051 8.84369 12.9934 9.94173C12.9327 10.1064 12.8736 10.2647 12.8618 10.2954C12.8449 10.3406 12.8095 10.368 12.656 10.4568C12.2662 10.6813 12.0283 10.8589 11.7043 11.1609C11.0479 11.7745 10.5923 12.5125 10.3629 13.3328L10.3241 13.47L10.2582 13.4797C10.2228 13.4862 10.0895 13.4991 9.96465 13.5088C8.82738 13.596 7.83017 13.4845 6.78064 13.1568C6.28288 13.0017 5.61469 12.7256 5.1203 12.4705C4.98869 12.4026 4.87901 12.3494 4.87564 12.3526C4.87226 12.3558 4.92626 12.4462 4.99544 12.5561C5.72099 13.6912 6.57141 14.6084 7.56019 15.3189C8.42242 15.939 9.47532 16.4622 10.6902 16.8756C10.81 16.9159 10.8201 16.9224 10.8674 17.0031C11.0361 17.2922 11.3128 17.6394 11.5929 17.9171C12.1481 18.4661 12.7589 18.8456 13.5334 19.1169L13.6835 19.1702L13.7139 19.3317C13.8236 19.9162 13.8658 20.357 13.8675 20.9384C13.8675 21.6149 13.8118 22.0848 13.6498 22.7275C13.4811 23.3977 13.1453 24.2131 12.742 24.9252C12.6796 25.035 12.6323 25.1271 12.6357 25.1303C12.6441 25.14 13.0238 24.9155 13.3056 24.7331C15.3574 23.409 16.6296 21.7215 17.4902 19.1815C17.556 18.9893 17.6083 18.8246 17.6083 18.8133C17.6083 18.802 17.6522 18.7697 17.7062 18.7423C18.0537 18.5533 18.3997 18.2966 18.7405 17.9688C19.2838 17.4472 19.6601 16.8804 19.9098 16.2071L19.979 16.0214L20.0971 16.0117C20.438 15.9826 21.1804 16.0004 21.5735 16.0456C22.6298 16.1715 23.7316 16.5236 24.793 17.0774C24.9145 17.1404 25.0191 17.1921 25.0241 17.1921C25.036 17.1921 24.874 16.9402 24.6529 16.6188C24.1248 15.8486 23.519 15.1784 22.839 14.6068C22.0899 13.9803 21.0623 13.3731 20.0853 12.9856L19.8879 12.9065L19.8255 12.7595C19.3716 11.7018 18.5144 10.8186 17.4396 10.3034C17.1881 10.1839 17.0312 10.121 16.7477 10.0305C16.5031 9.95142 16.5301 9.99341 16.4879 9.62685C16.3141 8.12511 16.5436 6.80422 17.2286 5.35577C17.2809 5.24435 17.4024 5.00698 17.5003 4.82612C17.5965 4.64688 17.6707 4.49994 17.664 4.49994C17.6555 4.49994 17.5442 4.56453 17.4142 4.64204ZM15.5329 12.7757C16.2753 12.8935 16.8726 13.4296 17.07 14.1563C17.1122 14.3097 17.1308 14.6666 17.1055 14.8426C17.011 15.5111 16.5149 16.1005 15.8568 16.3266C15.6105 16.4105 15.5126 16.4251 15.187 16.4251C14.9288 16.4234 14.863 16.4186 14.7415 16.3879C14.3669 16.2943 14.1104 16.1522 13.8371 15.8922C13.4692 15.5402 13.2971 15.1671 13.2769 14.6795C13.2651 14.4017 13.287 14.2419 13.3663 14.011C13.4726 13.7074 13.6211 13.4829 13.8708 13.2536C14.0919 13.0502 14.3129 12.9242 14.6048 12.8354C14.9102 12.7418 15.2005 12.724 15.5329 12.7757Z"
					fill="#F7F7FF"
				/>
			</svg>
		);
	}
	return (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="15" cy="15" r="15" fill="#D5D1D1" />
			<circle
				cx="15"
				cy="15"
				r="13.5"
				stroke="black"
				stroke-opacity="0.2"
				stroke-width="3"
			/>
			<path
				d="M11 21L15 17L19 21L21 19L17 15L21 11L19 9L15 13L11 9L9 11L13 15L9 19L11 21Z"
				fill="black"
				fill-opacity="0.3"
			/>
		</svg>
	);
};

export const PricingComparisonTable = ({
	planData,
	serviceName,
	activeCycle,
	buttonsRenderer,
	vendor,
	vendorFeaturesBlockList,
}: {
	planData: IPricingModel;
	serviceName: string;
	activeCycle: ICycle;
	buttonsRenderer: (plan: IPlan) => TChildren;
	vendor?: TPlatform;
	vendorFeaturesBlockList?: string[];
}) => {
	const ref = useRef<any>();

	function scrollToTable() {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}

	function vendorFeaturesFilter(feature: IFeature) {
		if (!vendor || !vendorFeaturesBlockList) {
			return true;
		}

		if (vendorFeaturesBlockList.includes(feature.name)) {
			return false;
		}

		return true;
	}

	function getBrowserName() {
		if (typeof navigator === 'undefined') {
			return '';
		}

		const userAgent = navigator.userAgent;
		let browserName = 'other';

		if (userAgent.match(/chrome|chromium|crios/i)) {
			browserName = 'chrome';
		} else if (userAgent.match(/firefox|fxios/i)) {
			browserName = 'firefox';
		} else if (userAgent.match(/safari/i)) {
			browserName = 'safari';
		} else if (userAgent.match(/opr\//i)) {
			browserName = 'opera';
		} else if (userAgent.match(/edg/i)) {
			browserName = 'edge';
		}

		browserName = `browser-${browserName}`;

		if (
			[
				'iPad Simulator',
				'iPhone Simulator',
				'iPod Simulator',
				'iPad',
				'iPhone',
				'iPod',
			].includes(navigator.platform)
		) {
			browserName += ' os-ios';
		}

		return browserName;
	}

	return (
		<div className="full-comparison-table-wrapper">
			<button onClick={scrollToTable} className={`full-plan-btn ${getBrowserName()}`}>Full Plans Comparison <SystemIcon type='chevron-down' size={30} /></button>

			<main ref={ref} className="full-comparison-table-overflow ">
				<div className="full-comparison-table">
					{
						planData.featureGroups.map((group: IFeatureGroup) => (
							<React.Fragment key={`group_${group.name}`}>
								<header>
									<div className="group-title">
										<h4>{group.display}</h4>
									</div>
									{
										planData.plans.map((plan: IPlan) => (
											<div className={`plan-container ${plan.name}`} key={plan.name}>
												<h6 className="title">{plan.name}</h6>
												<div className="price">
													${calculatePricing(plan.pricing, activeCycle.discount)}
													<span>/ Month</span>
													{
														plan.pricing !== calculatePricing(plan.pricing, activeCycle.discount) &&
														<span className="after-discount">&nbsp;&nbsp;${plan.pricing}&nbsp;&nbsp;</span>
													}
												</div>
												{buttonsRenderer(plan)}
											</div>
										))
									}
								</header>
								<section className="pricing-table-content-wrapper">
									{
										group.features.filter(vendorFeaturesFilter).map((feature) => (
											<div className="pricing-table-content" key={`group_${feature.display}`}>
												<h5 className="feature-name">{feature.display}</h5>
												{
													planData.plans.map((plan: IPlan) => {
														const value = plan.features[feature.name];
														return (
															<p className={`feature-value ${value ? 'checked' : ''}`}> {
																typeof value === 'boolean' ?
																	<StarSvg icon={value ? 'checked' : 'unChecked'} /> :
																	value
															}</p>
														)
													})
												}
											</div>
										))
									}
								</section>
							</React.Fragment>
						))
					}
				</div>
			</main>
		</div>
	);
};
