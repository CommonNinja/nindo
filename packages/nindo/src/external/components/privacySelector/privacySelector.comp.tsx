import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { premiumHelper } from '../../helpers/premium.helper';
import { privacyUpdated } from '../../../internal/actions/plugin.actions';
import { TPluginPrivacy } from '../../types/plugin.types';
import { FormLabel } from '../formLabel/formLabel.comp';
import { FormRow } from '../formRow/formRow.comp';
import { Tooltip } from '../tooltip/tooltip.comp';

export const PrivacySelector = ({
	currentValue,
}: {
	currentValue: TPluginPrivacy;
}) => {
	const match = useRouteMatch();
	const { vendor } = match.params as any;
	const dispatch = useDispatch();
	const privateModeAvailable: boolean =
		!!premiumHelper.getFeatureValue('linkPrivacy');

	function updatePrivacy(value: TPluginPrivacy) {
		dispatch(privacyUpdated(value));
	}

	if (vendor) {
		return <></>;
	}

	return (
		<FormRow>
			<FormLabel isPremium={true}>
				Plugin Privacy
				<Tooltip
					content={`
            <strong>Public</strong> - the plugin will be visible in Common Ninja's showcase page.<br />
            <strong>Link</strong> - the plugin won't be visible in our gallery. Only users with a direct link will be able to access it.<br />
            <strong>Private</strong> - the plugin will be visible only to you.
          `}
					direction="bottom"
				/>
			</FormLabel>
			<select
				value={currentValue}
				onChange={(e: any) => updatePrivacy(e.target.value)}
			>
				<option value="public">Public</option>
				<option value="link" disabled={!privateModeAvailable}>
					Sharable Link {!privateModeAvailable ? ' - Premium Only' : ''}
				</option>
				<option value="private" disabled={!privateModeAvailable}>
					Private {!privateModeAvailable ? ' - Premium Only' : ''}
				</option>
			</select>
		</FormRow>
	);
};
