import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { EditorToolbar } from '../editorToolbar/editorToolbar.comp';
import { ExportMenu, IExtraMenuItem } from '../exportMenu/exportMenu.comp';
import { savePlugin, nameUpdated, contextUpdated } from '../../actions';
import { TChildren } from '../../../external/types/plugin.types';
import {
	IPreSaveValidation,
	TPlatform,
} from '../../../external/types/editor.types';
import { useQuery } from '../../../external/hooks/query.hook';
import { notificationHelper } from '../../../external/helpers/notification.helper';
import { BackgroundPicker } from '../backgroundPicker/backgroundPicker.comp';

import './mainArea.scss';

interface IMainAreaProps {
	withContextMenu: boolean;
	mainComp: TChildren;
	showExportMenu: boolean;
	exportIsAvailable?: boolean;
	showHistoryButtons?: boolean;
	defaultPluginName?: string;
	vendor?: TPlatform;
	extraMenuItems?: IExtraMenuItem[];
	extraToolbarButtons?: TChildren;
	preSaveValidation?: () => IPreSaveValidation;
}

const pluginPath =
	process.env.REACT_APP_NINJA_PLUGIN_PATH || 'YOUR_PLUGIN_PATH';

export const MainArea = ({
	withContextMenu,
	mainComp,
	showExportMenu,
	exportIsAvailable,
	defaultPluginName,
	showHistoryButtons,
	vendor,
	extraMenuItems,
	extraToolbarButtons,
	preSaveValidation,
}: IMainAreaProps) => {
	const { user, plugin, hasError, saving } = useSelector((state: any) => ({
		user: state.user,
		hasError: state.editor.hasError,
		saving: state.editor.saving,
		plugin: state.plugin,
	}));

	const [backgroundColor, setBackgroundColor] = useState<string>('');

	const dispatch = useDispatch();
	const query = useQuery();
	const history = useHistory();
	const location = useLocation();

	function postCreationCallback(pluginId: string) {
		const nextUrl = `${
			location.pathname
		}/${pluginId}?${query.toString()}`.replace(`//${pluginId}`, `/${pluginId}`);
		history.push(nextUrl);

		// Update plugin context with new ID
		dispatch(contextUpdated({ instanceId: pluginId }));

		notificationHelper.success({
			title: 'Your changes have been successfully saved.',
			message: 'It might take a minute to see the updates live.',
			position: 'tc',
			autoDismiss: 3,
		});
	}

	function save() {
		if (preSaveValidation) {
			const { valid, message } = preSaveValidation();

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

		dispatch(
			savePlugin(
				plugin.guid ? undefined : postCreationCallback,
				undefined,
				vendor
			)
		);
	}

	return (
		<section
			className={`main-area ${withContextMenu ? 'with-context-menu' : ''}`}
			style={{
				background: backgroundColor,
			}}
		>
			<BackgroundPicker
				onSelect={setBackgroundColor}
				selectedColor={backgroundColor}
			/>
			{/* Editor toolbar with save, and preview buttons */}
			<EditorToolbar
				hasError={hasError}
				saving={saving}
				plugin={plugin}
				user={user}
				showHistoryButtons={showHistoryButtons}
				saveCallback={() => save()}
				nameUpdatedCallback={(newName: string) =>
					dispatch(nameUpdated(newName))
				}
				defaultPluginName={defaultPluginName}
				previewPath={`/${pluginPath}/editor/preview`}
				extraButtons={extraToolbarButtons}
			>
				<ExportMenu
					plugin={plugin}
					shareUrl={`https://www.commoninja.com/${pluginPath}/lp/${plugin.galleryId}`}
					hideExportMenu={!showExportMenu}
					canUserExport={exportIsAvailable}
					extraMenuItems={extraMenuItems}
				/>
			</EditorToolbar>

			{/* Main Plugin Preview */}
			<div className="editor-plugin-preview">{mainComp}</div>
		</section>
	);
};
