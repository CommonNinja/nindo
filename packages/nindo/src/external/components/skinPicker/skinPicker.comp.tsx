import React, { useState } from 'react';

import { ISkin } from '../../types/skin.types';
import { notificationHelper } from '../../helpers/notification.helper';
import { SystemIcon } from '../icon/icon.comp';
import { PremiumOpener } from '../premiumOpener/premiumOpener.comp';

import './skinPicker.scss';

interface ISkinPickerProps<T> {
	skins: ISkin<T>[];
	onSelect: (skinStyles: T) => void;
	premiumSkinsAvailable?: boolean;
}

export const SkinPicker = <T,>({
	skins,
	onSelect,
	premiumSkinsAvailable,
}: ISkinPickerProps<T>) => {
	const [selectedSkin, setSelectedSkin] = useState<number>(0);
	const uniqueKey = Math.random() * (100 - 1) + 1;

	function selectSkin(skin: ISkin<T>, idx: number) {
		if (!premiumSkinsAvailable && skin.isPremium) {
			notificationHelper.removeAll();
			notificationHelper.warning({
				title: '✭ Premium Feature',
				message: `Your current premium plan doesn't support this feature.`,
				children: <PremiumOpener>Upgrade your account now!</PremiumOpener>,
				position: 'tc',
				autoDismiss: 4,
			});
			return;
		}

		setSelectedSkin(idx);
		onSelect(skin.skinStyles);
	}

	return (
		<div className="skins">
			{skins?.map((skin: ISkin<T>, idx) => (
				<div
					className={`skin ${idx === selectedSkin ? 'selected' : ''}`}
					key={`skin_${uniqueKey}_${idx}`}
					onClick={() => selectSkin(skin, idx)}
				>
					<span
						className="skin-background"
						style={{
							backgroundColor: skin.color || '#2e2e31',
							backgroundImage: skin.thumbnail ? `url(${skin.thumbnail})` : '',
						}}
					></span>
					{skin.isPremium && (
						<span className="skin-premium" title="Premium Skin">
							<SystemIcon type="star-full" />
						</span>
					)}
				</div>
			))}
		</div>
	);
};
