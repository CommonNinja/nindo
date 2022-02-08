import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

import { Popup } from '../popup/popup.comp';
import { AssetsGallery } from '../../../internal/components/assetsGallery/assetsGallery.comp';
import { TChildren } from '../../types/plugin.types';
import { PremiumOpener } from '../premiumOpener/premiumOpener.comp';
import { useQuery } from '../../hooks/query.hook';
import { pluginService } from '../../../internal/services';
import { notificationHelper } from '../../helpers/notification.helper';
import { AssetType } from '../../types/asset.types';
import { usePlugin } from '../../hooks/plugin.hook';

import './assetsGalleryOpener.scss';

interface AssetsGalleryOpenerProps {
	enabled: boolean;
	submitCallback: (url: string) => void;
	pluginId?: string;
	postUploadCallback?: (url: string, name: string, guid: string) => void;
	uploadStartCallback?: () => void;
	errorCallback?: (message: string) => void;
	disabledCallback?: () => void;
	assetApiBaseUrl?: string;
	limit?: number;
	children?: TChildren;
	className?: string;
	fileSizeLimitInMB?: number;
	assetType?: AssetType;
}

export const AssetsGalleryOpener = (props: AssetsGalleryOpenerProps) => {
	const plugin = usePlugin<any>();
	const {
		children,
		submitCallback,
		errorCallback,
		uploadStartCallback,
		className,
		postUploadCallback,
		enabled,
		disabledCallback,
		assetApiBaseUrl,
		limit,
		pluginId = plugin.guid,
		fileSizeLimitInMB,
		assetType = AssetType.IMAGE,
	} = props;
	const [opened, setOpened] = useState<boolean>(false);
	const query = useQuery();
	const match = useRouteMatch();
	const { vendor } = match.params as any;
	const queryParams: string = `multi=true&assetType=${assetType}&pluginType=${
		pluginService.pluginType
	}&serviceName=${pluginService.serviceName}${
		pluginId ? '&componentId=' + pluginId : ''
	}&${query.toString()}`;
	let finalAssetApiBaseUrl = assetApiBaseUrl;

	if (!assetApiBaseUrl && vendor) {
		finalAssetApiBaseUrl = `/api/v1/${vendor}`;
	}

	function uploadDisabledCallback() {
		if (disabledCallback) {
			disabledCallback();
		} else {
			notificationHelper.removeAll();
			notificationHelper.warning({
				title: '✭ Premium Feature',
				message: "Your current plan doesn't support image uploads.",
				children: (
					<PremiumOpener>
						Upgrade your account now to enjoy premium features!
					</PremiumOpener>
				),
				position: 'tc',
				autoDismiss: 4,
			});
		}
	}

	function triggerClick() {
		setOpened(true);
	}

	function postSubmit(url: string) {
		setOpened(false);
		submitCallback(url);
	}

	return (
		<>
			<div
				className={`assets-gallery-opener ${className || ''}`}
				onClick={triggerClick}
			>
				{children || <FontAwesomeIcon icon={faImages} title="Open Gallery" />}
			</div>
			<Popup
				className="assets-gallery-popup"
				closeCallback={() => setOpened(false)}
				show={opened}
			>
				<h2>Manage Assets</h2>
				<AssetsGallery
					postUploadCallback={
						postUploadCallback ||
						(() => {
							notificationHelper.removeAll();
							notificationHelper.success({
								title: 'File has been successfully uploaded.',
								position: 'tc',
								autoDismiss: 3,
							});
						})
					}
					assetApiQueryParams={queryParams}
					assetApiBaseUrl={finalAssetApiBaseUrl}
					uploadErrorCallback={
						errorCallback ||
						((errorMessage) => {
							notificationHelper.removeAll();
							notificationHelper.error({
								title: errorMessage,
								position: 'tc',
								autoDismiss: 4.5,
							});
						})
					}
					uploadStartCallback={
						uploadStartCallback ||
						(() => {
							notificationHelper.removeAll();
							notificationHelper.info({
								title: 'Uploading file...',
								position: 'tc',
								autoDismiss: 0,
							});
						})
					}
					uploadIsAvailable={enabled}
					uploadDisabledCallback={uploadDisabledCallback}
					submitCallback={postSubmit}
					limit={limit}
					fileSizeLimitInMB={fileSizeLimitInMB}
					assetType={assetType}
				/>
			</Popup>
		</>
	);
};
