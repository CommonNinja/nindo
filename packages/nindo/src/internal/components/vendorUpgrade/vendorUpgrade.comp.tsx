import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { PricingLoader } from '../pricingLoader/pricingLoader.comp';
import { shopifyService } from '../../services';
import { TPlatform } from '../../../external/types/editor.types';
import { IUser } from '../../../external/types/user.types';
import { IPlan, IPricingModel } from '../../../external/types/plan.types';
import { notificationHelper } from '../../../external/helpers/notification.helper';

interface IVendorUpgradeProps {
  user: IUser
  serviceName: string
  vendor: TPlatform | null
}

export const VendorUpgrade = ({ vendor, user, serviceName }: IVendorUpgradeProps) => {
  const [planData, setPlanData] = useState<null | IPricingModel>(null);
  const [postUpgrade, setPostUpgrade] = useState<boolean>(false);
  const dispatch = useDispatch();

  async function onPlanSelect(plan: IPlan, activeCycleId: number) {
    notificationHelper.removeAll();

    if (vendor === 'shopify') {
      const activeCycle = planData?.cycles[activeCycleId];

      try {
        setPostUpgrade(true);
        const result = await shopifyService.createUserSubscription(plan.planIds?.[activeCycle?.period || 'month'].commonninja || '');
        if (result?.data?.confirmationUrl && typeof window !== 'undefined' && window.top) {
          window.top.location.href = result?.data?.confirmationUrl;
          return;
        }
      } catch (e) {
        dispatch(
          notificationHelper.error({
            title: (e as Error).message,
            position: 'tc',
            autoDismiss: 4.5,
          })
        );
      }

      setPostUpgrade(false);
    } else {
      dispatch(
        notificationHelper.error({
          title: 'Unsupported vendor',
          position: 'tc',
          autoDismiss: 4.5,
        })
      );
    }
  }

  if (postUpgrade) {
    return <p className="center" style={{ padding: '20px' }}>Redirecting to checkout page...</p>;
  }

  return (
    <PricingLoader 
      initialServiceName={serviceName}
      user={user}
      onPlanDataLoad={(nextPlanData) => setPlanData(nextPlanData)}
      onPlanSelect={onPlanSelect}
      vendor={vendor as TPlatform}
      showEnterpriseBox={false}
      showCycleSelector={false}
    />
  );
}