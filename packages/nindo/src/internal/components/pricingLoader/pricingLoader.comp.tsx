import React, { useEffect, useState } from 'react';

import { plansService, shopifyService } from '../../services';
import {
	ICycle,
	IPricingModel,
	IPlan,
	IUserSubscription,
} from '../../../external/types';
import { IUser } from '../../../external/types';
import { Button } from '../../../external/components/button/button.comp';
import {
	CycleSelector,
	CycleSelectorLoader,
} from '../pricingCycleSelector/pricingCycleSelector.comp';
import {
	PricingTable,
	PricingTableLoader,
} from '../pricingTable/pricingTable.comp';
import { PricingComparisonTable } from '../pricingComparisonTable/pricingComparisonTable.comp';
import { TPlatform } from '../../../external/types';
import { getPluginNameByService } from '../../helpers';

import './pricingLoader.scss';

interface ICheckoutButtonsProps {
	plan: IPlan;
	isAuthenticated: boolean;
	activeSubscription: IUserSubscription | null;
	activeCycle: ICycle;
	onSelect: (plan: IPlan, changeMode: boolean) => void;
	showDowngradeButton?: boolean;
}

const vendorFeaturesBlockList: string[] = [
	'privatePrivacy',
	'linkPrivacy',
	'numberOfInstances',
	'numberOfWebsites',
];

export const CheckoutButtons = ({
	plan,
	isAuthenticated,
	activeSubscription,
	activeCycle,
	onSelect,
	showDowngradeButton = false,
}: ICheckoutButtonsProps) => {
	let buttonElm = <span></span>;

	if (!isAuthenticated) {
		buttonElm = (
			<Button color="transparent" onClick={() => onSelect(plan, false)}>
				Sign Up
			</Button>
		);
	} else {
		// For premium plans
		if (plan.planIds) {
			// If user already has an active subscription
			if (activeSubscription) {
				if (
					plan.planIds[activeCycle.period].commonninja ===
					activeSubscription.plan.id
				) {
					buttonElm = (
						<Button
							color="transparent"
							disabled
							onClick={() => {
								return false;
							}}
						>
							Current Plan
						</Button>
					);
				} else {
					buttonElm = (
						<Button color="transparent" onClick={() => onSelect(plan, true)}>
							Switch Plan
						</Button>
					);
				}
			} else {
				buttonElm = (
					<Button color="transparent" onClick={() => onSelect(plan, false)}>
						Select Plan
					</Button>
				);
			}
		} else {
			// For basic plan
			if (activeSubscription) {
				buttonElm = (
					<Button color="transparent" onClick={() => onSelect(plan, true)}>
						Switch Plan
					</Button>
				);
			} else {
				buttonElm = (
					<Button
						color="transparent"
						disabled
						onClick={() => {
							return false;
						}}
					>
						Current Plan
					</Button>
				);
			}
		}
	}

	return <div className="checkout-buttons-wrapper">{buttonElm}</div>;
};

interface IPricingLoaderProps {
	initialServiceName: string;
	user: IUser;
	onPlanSelect: (
		plan: IPlan,
		activeCycleId: number,
		changeMode: boolean
	) => void;
	onPlanDataLoad?: (planData: IPricingModel | null) => void;
	onUserSubscriptionLoad?: (subscriptionData: any) => void;
	onServiceChange?: (serviceName: string) => void;
	rewriteDocumentTitle?: boolean;
	showCycleSelector?: boolean;
	showFullComparison?: boolean;
	vendor?: TPlatform;
}

export const PricingLoader = ({
	initialServiceName,
	user,
	onPlanDataLoad,
	onUserSubscriptionLoad,
	onServiceChange,
	onPlanSelect,
	rewriteDocumentTitle,
	showCycleSelector = true,
	showFullComparison = true,
	vendor,
}: IPricingLoaderProps) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [localError, setLocalError] = useState<string>('');
	const [planData, setPlanData] = useState<null | IPricingModel>(null);
	const [activeSubscription, setActiveSubscription] =
		useState<null | IUserSubscription>(null);
	const [serviceName] = useState<string>(initialServiceName || 'bracketsninja');
	const [activeCycleId, setActiveCycleId] = useState<number>(0);

	async function loadUserSubscriptions() {
		if (!user.isAuthenticated && !vendor) {
			return;
		}

		try {
			let result;
			if (vendor === 'shopify') {
				result = await shopifyService.getUserSubscription();
			} else {
				result = await plansService.getUserSubscription(serviceName, vendor);
			}
			if (!result.success || !result.data?.docs?.[0]) {
				onUserSubscriptionLoad?.(null);
				return;
			}

			const subscriptionData: IUserSubscription = result.data.docs[0];
			setActiveSubscription(subscriptionData);
			onUserSubscriptionLoad?.(subscriptionData);
		} catch (e) {
			onUserSubscriptionLoad?.(null);
		}
	}

	async function getPlanData() {
		setLoading(true);
		setLocalError('');

		try {
			const plansRes = await plansService.getPlanData(serviceName);
			if (!plansRes.success || !plansRes.data?.docs?.[0]) {
				throw new Error(plansRes.message || 'Could not load plan.');
			}
			const plansData: IPricingModel = plansRes.data.docs[0];
			let activeCycle = 0;

			// If cycle selector is hidden, select the first default cycle
			if (showCycleSelector) {
				plansData.cycles.forEach((p, idx) => {
					if (p.default) {
						activeCycle = idx;
					}
				});
			}

			setPlanData(plansData);
			onPlanDataLoad?.(plansData);
			setActiveCycleId(activeCycle);

			if (rewriteDocumentTitle) {
				document.title = `Pricing for ${getPluginNameByService(
					plansData.services[0],
					plansData.name
				)}`;
			}
		} catch (e) {
			onPlanDataLoad?.(null);
			setLocalError((e as Error).message);
		}

		setLoading(false);
	}

	useEffect(() => {
		if (user.isAuthenticated) {
			loadUserSubscriptions();
		}
	}, [user.isAuthenticated]);

	useEffect(() => {
		onServiceChange?.(serviceName);
		getPlanData();
		loadUserSubscriptions();
	}, [serviceName]);

	function renderLoader() {
		return (
			<>
				<CycleSelectorLoader />
				<PricingTableLoader />
			</>
		);
	}

	function renderButtons(plan: IPlan) {
		if (!planData) {
			return <></>;
		}

		return (
			<CheckoutButtons
				activeCycle={planData.cycles[activeCycleId]}
				activeSubscription={activeSubscription}
				isAuthenticated={user.isAuthenticated}
				plan={plan}
				onSelect={(selectedPlan: IPlan, changeMode: boolean) => {
					onPlanSelect(selectedPlan, activeCycleId, changeMode);
				}}
				showDowngradeButton={vendor === 'shopify'} // Not ideal, but should work for now
			/>
		);
	}

	function renderBody() {
		if (localError || !planData) {
			return <p className="center">Cannot load plan info.</p>;
		}

		return (
			<>
				{showCycleSelector && (
					<CycleSelector
						activeCycleId={activeCycleId}
						planData={planData}
						setActiveCycleId={setActiveCycleId}
					/>
				)}
				{activeSubscription && (
					<div className="active-subscription center">
						<p>
							Your account is currently associated with a subscription plan:{' '}
							<strong>{activeSubscription.plan.name}</strong>{' '}
						</p>
					</div>
				)}
				<PricingTable
					activeCycle={planData.cycles[activeCycleId]}
					planData={planData}
					buttonsRenderer={renderButtons}
					fullComparisonAvailable={showFullComparison}
					vendor={vendor}
					vendorFeaturesBlockList={vendorFeaturesBlockList}
				/>
				{showFullComparison && (
					<PricingComparisonTable
						activeCycle={planData.cycles[activeCycleId]}
						planData={planData}
						serviceName={serviceName}
						buttonsRenderer={renderButtons}
						vendor={vendor}
						vendorFeaturesBlockList={vendorFeaturesBlockList}
					/>
				)}
			</>
		);
	}

	return (
		<div className="pricing-loader">
			{loading ? renderLoader() : renderBody()}
		</div>
	);
};
