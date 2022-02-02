import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
// import ImageResize from 'quill-image-resize-module-react';

import { AssetsGalleryOpener } from '../assetsGalleryOpener/assetsGalleryOpener.comp';

import 'react-quill/dist/quill.snow.css';
import './richEditor.scss';

const Quill = require('quill');
let Icons, TextAlignStyle, Size, Link;

if (typeof Quill !== 'undefined') {
	// Quill.register('modules/imageResize', ImageResize);

	const iconSvg =
		'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTIxLjg2IDEyMi44OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIxLjg2IDEyMi44OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO308L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03Mi4wOSwxOC43Mmg0Mi4zN2MyLjA1LDAsMy44OSwwLjg0LDUuMjIsMi4xOGMxLjM0LDEuMzQsMi4xOCwzLjIsMi4xOCw1LjIydjg5LjM2IGMwLDIuMDUtMC44NCwzLjg5LTIuMTgsNS4yMmMtMS4zNCwxLjM0LTMuMiwyLjE4LTUuMjIsMi4xOEgyNC40OGMtMi4wNSwwLTMuODktMC44NC01LjIyLTIuMThjLTEuMzQtMS4zNC0yLjE4LTMuMi0yLjE4LTUuMjIgVjcxLjQ2YzIuNDcsMSw1LjA1LDEuNzgsNy43MiwyLjI5djIwLjI4aDAuMDNsMCwwQzM3LjcyLDgxLjcsNDYuMjYsNzUuNjEsNTkuMDgsNjUuMmMwLjA1LDAuMDUsMC4xLDAuMSwwLjE1LDAuMTUgYzAuMDMsMC4wMywwLjAzLDAuMDYsMC4wNiwwLjA2bDI2LjgyLDMxLjczbDQuMS0yNS4yNGMwLjI4LTEuNjIsMS44LTIuNzMsMy40Mi0yLjQ1YzAuNjIsMC4wOSwxLjE4LDAuNCwxLjYyLDAuODFsMTguODIsMTkuNzcgVjI3LjkxYzAtMC40LTAuMTYtMC43NS0wLjQ0LTAuOTljLTAuMjUtMC4yNS0wLjYyLTAuNDQtMC45OS0wLjQ0SDc0LjA1QzczLjY0LDIzLjgsNzIuOTgsMjEuMjEsNzIuMDksMTguNzJMNzIuMDksMTguNzJ6IE0zMi43OSwwIEM1MC45LDAsNjUuNTgsMTQuNjgsNjUuNTgsMzIuNzljMCwxOC4xMS0xNC42OCwzMi43OS0zMi43OSwzMi43OUMxNC42OCw2NS41OCwwLDUwLjksMCwzMi43OUMwLDE0LjY4LDE0LjY4LDAsMzIuNzksMEwzMi43OSwweiBNMTUuMzcsMzMuMzdoMTEuMDR2MTUuNzZoMTIuNDVWMzMuMzdoMTEuMzZMMzIuOCwxNi40NEwxNS4zNywzMy4zN0wxNS4zNywzMy4zN0wxNS4zNywzMy4zN3ogTTk0LjI3LDM1LjY2IGMyLjk1LDAsNS42NiwxLjIxLDcuNTgsMy4xNGMxLjk2LDEuOTYsMy4xNCw0LjYzLDMuMTQsNy41OWMwLDIuOTUtMS4yMSw1LjY2LTMuMTQsNy41OGMtMS45NiwxLjk2LTQuNjMsMy4xNC03LjU4LDMuMTQgYy0yLjk1LDAtNS42Ni0xLjIxLTcuNTktMy4xNGMtMS45Ni0xLjk2LTMuMTQtNC42My0zLjE0LTcuNThjMC0yLjk1LDEuMjEtNS42NSwzLjE0LTcuNTlDODguNjUsMzYuODQsOTEuMzIsMzUuNjYsOTQuMjcsMzUuNjYgTDk0LjI3LDM1LjY2TDk0LjI3LDM1LjY2eiIvPjwvZz48L3N2Zz4=';
	Icons = Quill.import('ui/icons');
	Icons[
		'uimage'
	] = `<i class="upload-image-icon" title="Upload Image" aria-hidden="true"><img src="data:image/svg+xml;base64,${iconSvg}" /></i>`;
	Icons.align['left'] = Icons.align[''];

	TextAlignStyle = Quill.import('attributors/style/align');
	TextAlignStyle.whitelist = ['left', 'center', 'right'];
	Quill.register(TextAlignStyle, true);

	Size = Quill.import('attributors/style/size');
	Size.whitelist = [
		'8px',
		'10px',
		'12px',
		'14px',
		'16px',
		'18px',
		'24px',
		'36px',
	];
	Quill.register(Size, true);

	Link = Quill.import('formats/link');
	Link.sanitize = function (url: string) {
		// prefix default protocol.
		let protocol = url.slice(0, url.indexOf(':'));
		if (this.PROTOCOL_WHITELIST.indexOf(protocol) === -1) {
			url = `https://${url}`;
		}
		// Link._sanitize function
		let anchor = document.createElement('a');
		anchor.href = url;
		anchor.target = '_blank';
		protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
		return this.PROTOCOL_WHITELIST.indexOf(protocol) > -1
			? url
			: this.SANITIZED_URL;
	};
	Quill.register(Link, true);
}

interface IRichEditorProps {
	html: string;
	onChange: (html: string) => void;
	onKeyDown?: (e: any) => void;
}

interface IRichEditorWithImageProps extends IRichEditorProps {
	imageUploadEnabled: boolean;
	assetApiBaseUrl?: string;
	pluginId?: string;
}

const formats = [
	'size',
	'font-size',
	'bold',
	'italic',
	'underline',
	'strike',
	'list',
	'bullet',
	'color',
	'text-align',
	'align',
	'link',
];

const modules = {
	toolbar: {
		container: [
			[
				{
					size: [false, '8px', '10px', '12px', '16px', '18px', '24px', '36px'],
				},
				{ color: [] },
				'bold',
				'italic',
				'underline',
				/* 'strike', */ { list: 'ordered' },
				{ list: 'bullet' },
				'link',
			],
		],
	},
	clipboard: {
		matchVisual: false,
	},
};

export const RichEditor = (props: IRichEditorProps) => {
	const { onChange, onKeyDown, html } = props;
	const [fromInit, setFromInit] = useState<boolean>(true);

	function handleChange(html: string) {
		if (fromInit) {
			return;
		}

		onChange(html);
	}

	// Fixing quill bug
	useEffect(() => {
		if (!fromInit) {
			return;
		}

		if (typeof window !== 'undefined') {
			window.setTimeout(() => {
				onChange(html);
				setFromInit(false);
			}, 10);
		}
	}, []);

	return (
		<div className="rich-editor-wrapper">
			<ReactQuill
				defaultValue={html}
				onKeyDown={onKeyDown ? (e: any) => onKeyDown(e) : () => {}}
				onChange={handleChange}
				theme="snow"
				formats={formats}
				modules={modules}
				bounds={'.rich-editor-wrapper'}
			/>
		</div>
	);
};

let registeredSubmitImageCallback = (url: string) => {};

const formatsWithImage = [
	'size',
	'font-size',
	'bold',
	'italic',
	'underline',
	'strike',
	'list',
	'bullet',
	'color',
	'text-align',
	'align',
	'link',
	'image',
	'width',
	'height',
];

const modulesWithImage = {
	clipboard: {
		matchVisual: false,
	},
	toolbar: {
		container: [
			[
				{
					size: [false, '8px', '10px', '12px', '16px', '18px', '24px', '36px'],
				},
				{ color: [] },
				'bold',
				'italic',
				'underline',
				// 'strike',
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ align: ['left', 'center', 'right'] },
				'link',
				'uimage',
			],
		],
		handlers: {
			// Note, using an arrow function will cause quill to be undefined.
			image: function () {
				// @ts-ignore
				const range = this.quill.getSelection();
				const link = prompt('Insert an image url');

				if (!link) {
					return;
				}

				// by 'image' option below, you just have to put src(link) of img here.
				// @ts-ignore
				this.quill.insertEmbed(range.index, 'image', link);
			},
			uimage: function () {
				const opener: HTMLElement | null = document.querySelector(
					'.rich-editor-wrapper .assets-gallery-opener'
				);

				if (!opener) {
					return;
				}

				// Trigger click on assets gallery opener
				opener.click();

				// @ts-ignore
				const range = this.quill.getSelection();

				// Attach post submit image callback
				registeredSubmitImageCallback = (url: string) => {
					// by 'image' option below, you just have to put src(link) of img here.
					// @ts-ignore
					this.quill.insertEmbed(range.index, 'image', url);
				};
			},
		},
	},
	// imageResize: {
	// 	modules: ['Resize', 'DisplaySize', 'Toolbar'],
	// },
};

export const RichEditorWithImages = (props: IRichEditorWithImageProps) => {
	const {
		onChange,
		onKeyDown,
		html,
		imageUploadEnabled,
		assetApiBaseUrl,
		pluginId,
	} = props;
	const [fromInit, setFromInit] = useState<boolean>(true);

	function handleChange(html: string) {
		if (fromInit) {
			return;
		}

		onChange(html);
	}

	// Fixing quill bug
	useEffect(() => {
		if (!fromInit) {
			return;
		}

		if (typeof window !== 'undefined') {
			window.setTimeout(() => {
				onChange(html);
				setFromInit(false);
			}, 10);
		}
	}, []);

	return (
		<div className="rich-editor-wrapper">
			<ReactQuill
				defaultValue={html}
				onKeyDown={onKeyDown ? (e: any) => onKeyDown(e) : () => {}}
				onChange={handleChange}
				theme="snow"
				formats={formatsWithImage}
				modules={modulesWithImage}
				bounds={'.rich-editor-wrapper'}
			/>
			<div style={{ display: 'none' }}>
				<AssetsGalleryOpener
					enabled={imageUploadEnabled}
					assetApiBaseUrl={assetApiBaseUrl}
					pluginId={pluginId}
					submitCallback={(url: string) => {
						if (registeredSubmitImageCallback) {
							registeredSubmitImageCallback(url);
						}
					}}
				>
					<FontAwesomeIcon icon={faImages} title="Open Gallery" />
				</AssetsGalleryOpener>
			</div>
		</div>
	);
};

export default RichEditor;
