import React, { useRef, ChangeEvent } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import { pluginService } from '../../../internal/services';
import { TChildren } from '../../types/plugin.types';
import { useQuery } from '../../hooks/query.hook';
import { notificationHelper } from '../../helpers/notification.helper';
import { AssetType, FileTypes } from '../../types/asset.types';

export interface IFileUploadProps {
	acceptType: AssetType;
	postUploadCallback: (
		url: string,
		name: string,
		guid: string,
		assetType: AssetType
	) => void;
	enabled: boolean;
	pluginId?: string;
	uploadStartCallback?: () => void;
	errorCallback?: (message: string) => void;
	disabledCallback?: () => void;
	uploadApiUrl?: string;
	sizeLimitInMB?: number;
	children?: TChildren;
	className?: string;
}

export const FileUpload = (props: IFileUploadProps) => {
	const {
		children,
		acceptType,
		uploadApiUrl,
		errorCallback,
		uploadStartCallback,
		className,
		pluginId,
		postUploadCallback,
		sizeLimitInMB,
		enabled,
		disabledCallback,
	} = props;
	const query = useQuery();
	const match = useRouteMatch();
	const { vendor } = match.params as any;
	const accept = FileTypes.get(acceptType) as string;
	const inputRef = useRef<HTMLInputElement>(null);
	const queryParams: string = [
		`multi=true`,
		`pluginType=${pluginService.pluginType}`,
		`serviceName=${pluginService.serviceName}`,
		`componentId=${pluginId || ''}`,
		`assetType=${acceptType || ''}`,
		query.toString(),
	].join('&');
	let defaultUploadUrl = `/api/v1/asset?${queryParams}`;

	if (!uploadApiUrl && vendor) {
		defaultUploadUrl = `/api/v1/${vendor}/asset?${queryParams}`;
	}

	function defaultErrorCallback(errorMessage: string) {
		notificationHelper.removeAll();
		notificationHelper.error({
			title: errorMessage,
			position: 'tc',
			autoDismiss: 4.5,
		});
	}

	function defaultUploadStartCallback() {
		notificationHelper.removeAll();
		notificationHelper.info({
			title: 'Uploading file...',
			position: 'tc',
			autoDismiss: 0,
		});
	}

	function triggerClick() {
		if (!inputRef.current) {
			return;
		}

		if (!enabled) {
			if (typeof disabledCallback === 'function') {
				disabledCallback();
			}
			return;
		}

		inputRef.current.click();
	}

	async function fileSelected(e: ChangeEvent<HTMLInputElement>) {
		const target = e.target as HTMLInputElement;
		const file: File = (target.files as FileList)[0];

		if (!file) {
			return;
		}

		if (acceptType === 'image') {
			if (file.type.indexOf('image/') < 0) {
				(errorCallback || defaultErrorCallback)(
					'Only png, jpg, and gif formats are allowed.'
				);
				return;
			}
		} else {
			if (accept && !file.type.includes(accept.replace('*', ''))) {
				(errorCallback || defaultErrorCallback)('Unsupported file type.');
				return;
			}
		}

		// File size in mb
		const sizeInMB = file.size / 1000 / 1000;
		if (sizeLimitInMB && sizeInMB > sizeLimitInMB) {
			(errorCallback || defaultErrorCallback)(
				`File is too big. Size limitation is ${sizeLimitInMB}mb`
			);
			return;
		}

		const data = new FormData();
		data.append('files[]', file);

		(uploadStartCallback || defaultUploadStartCallback)();

		try {
			const req: any = await fetch(uploadApiUrl || defaultUploadUrl, {
				method: 'post',
				body: data,
			});
			const result = await req.json();

			notificationHelper.removeAll();

			if (result.success) {
				const { url, name, guid, assetType } = result.data;
				postUploadCallback(url, name, guid, assetType);
			} else {
				(errorCallback || defaultErrorCallback)(result.message);
			}
		} catch (e) {
			notificationHelper.removeAll();
			(errorCallback || defaultErrorCallback)(
				'Could not upload file. Please contact the support team.'
			);
		}
	}

	return (
		<div className={`file-upload ${className || ''}`} onClick={triggerClick}>
			<input
				type="file"
				name="file"
				style={{ display: 'none' }}
				ref={inputRef}
				onChange={fileSelected}
				accept={accept}
			/>
			{children || <FontAwesomeIcon title="Upload file" icon={faUpload} />}
		</div>
	);
};
