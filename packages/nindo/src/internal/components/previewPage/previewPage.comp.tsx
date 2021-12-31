import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { gotPluginData } from '../../actions/plugin.actions';
import { pluginContextUpdated } from '../../actions/pluginContext.actions';

interface IPreviewPageProps {
	children: any;
}

export const PreviewPage = (props: IPreviewPageProps) => {
	const dispatch = useDispatch();

	function handleFrameTasks(e: any) {
		try {
			const message = JSON.parse(e.data);

			switch (message.type) {
				case 'editor.update':
					dispatch(gotPluginData(message.plugin));
					break;
				default:
					return;
			}
		} catch (e) {
			// console.error('Cannot parse message');
		}
	}

	useEffect(() => {
		window.addEventListener('message', handleFrameTasks);

		// Set plugin context
		dispatch(
			pluginContextUpdated({
				instanceId: '',
				mode: 'preview',
			})
		);

		return () => {
			window.removeEventListener('message', handleFrameTasks);
		};
	}, []);

	return <div className="plugin-preview">{props.children}</div>;
};
