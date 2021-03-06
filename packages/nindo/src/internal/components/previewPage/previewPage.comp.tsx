import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { gotPluginData } from '../../actions/plugin.actions';
import { contextUpdated } from '../../actions/context.actions';
import { IPlugin } from '../../../external';

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
					{
						const { plugin }: { plugin: IPlugin<any> } = message;
						dispatch(gotPluginData(plugin));
						// Set plugin context
						dispatch(
							contextUpdated({
								instanceId: plugin.guid || '',
								platform:
									plugin.creationSource !== 'website'
										? plugin.creationSource
										: undefined,
							})
						);
					}
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
			contextUpdated({
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
