import React, { ReactChild } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IPlugin, TChildren } from '../../types/plugin.types';
import { Button } from '../button/button.comp';
import { IAppState } from '../../types/state.types';
import { notificationHelper } from '../../helpers/notification.helper';
import { savePlugin } from '../../../internal/actions/editor.actions';
import { IPreSaveValidation } from '../../types/editor.types';

import './toolbar.scss';

interface IToolbarProps {
	saveCallback?: () => void;
	validation?: (data: IPlugin<any>) => IPreSaveValidation;
	extraButtons?: TChildren;
	children?: ReactChild;
}

export const Toolbar = (props: IToolbarProps) => {
	const { saveCallback = () => {
		notificationHelper.success({
			title: 'Changes saved',
			message: 'Your changes have been saved',
			position: 'tc',
			autoDismiss: 3.5,
		});
	}, children, extraButtons, validation } = props;
	const { saving, hasError, user, platform, plugin } = useSelector(
		(state: IAppState<any>) => ({
			saving: state.editor.saving,
			user: state.user,
			hasError: state.editor.hasError,
			platform: state.context.platform,
			plugin: state.plugin,
		})
	);
	const dispatch = useDispatch();

	function openAuthWindow() {
		const authBtn = document.querySelector('.open-auth') as HTMLElement;

		if (authBtn) {
			authBtn.click();
		}
	}

	function save() {
		if (saving) {
			return;
		}

		if (!user.isAuthenticated) {
			openAuthWindow();
			return;
		}

		if (!plugin.guid) {
			notificationHelper.removeAll();
			notificationHelper.error({
				title: 'Could not save changes',
				message: 'Instance ID is not defined.',
				position: 'tc',
				autoDismiss: 8.5,
			});
			return;
		}

		if (validation) {
			const { valid, message } = validation(plugin);

			if (!valid) {
				notificationHelper.removeAll();
				notificationHelper.error({
					title: 'Could not save changes',
					message,
					position: 'tc',
					autoDismiss: 8.5,
				});
				return;
			}
		}

		dispatch(savePlugin(saveCallback, undefined, platform));
	}

	return (
		<div className="editor-toolbar">
			{children ? children : <span></span>}
			{!hasError && (
				<div className="buttons-wrapper">
					{saving && <span>Saving Changes...</span>}
					{extraButtons && extraButtons}
					<Button
						className="save-button"
						color="green"
						mode="major"
						onClick={() => {
							save();
						}}
					>
						Save Changes
					</Button>
				</div>
			)}
		</div>
	);
};
