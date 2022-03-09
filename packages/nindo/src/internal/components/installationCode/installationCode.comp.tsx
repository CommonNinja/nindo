import React from 'react';

import { TComponentType } from '../../../external/types/component.types';

import { FormRow } from '../../../external/components/formRow/formRow.comp';
import { CopyInput } from '../../../external/components/copyInput/copyInput.comp';

import './installationCode.scss';

type InstallationCodeProps = {
	componentId: string;
	componentType: TComponentType;
	buttonClassName?: string;
	className?: string;
	htmlOnly?: boolean;
	vendor?: 'shopify' | 'duda' | 'shopify-manual'
};

export const InstallationCode = (props: InstallationCodeProps) => {
	const { componentId, componentType, className, buttonClassName, htmlOnly, vendor } =
		props;
	let scriptStr = `<div class="commonninja_component" comp-type="${componentType}" comp-id="${componentId}"></div>`;
	if (!htmlOnly) {
		scriptStr = `<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>\n${scriptStr}`;
	}

	return (
		<div className={`installation-code ${className ? className : ''}`}>
			<FormRow flow="column">
				{!vendor &&
					<>
						<label>
							Place this code wherever you want the app to appear on your website
							(HTML editor, theme, template, etc).
						</label>
						<CopyInput
							value={scriptStr}
							inputType="textarea"
							buttonClassName={buttonClassName}
						/>
					</>
				}
				{vendor === 'duda' &&
					<>
						<h6>In order to add your widget to your website:</h6>
						<ol>
							<li>
								<p>Drag your widget onto a page.</p>
							</li>
							<li>
								<p >
									Copy the '<strong>instance ID</strong>' from the
									dashboard, and paste it in the '
									<strong>Instance ID</strong>' text field.
								</p>
							</li>
						</ol>
						<CopyInput
							value={componentId}
							inputType="textarea"
							buttonClassName={buttonClassName}
						/>
					</>
				}
				{vendor === 'shopify' &&
					<>
						<h6>If you are using a supported template on your store, you can use
							Common Ninja’s widget from your editor's sidebar. Once you’ve
							finished editing & customizing the app, follow these steps:</h6>
						<ol>
							<li>
								<p>Copy its Instance ID.</p>
							</li>
							<li>
								<p >
									Select the “Themes” tab on your dashboard (under the “Online
									Store” section).
								</p>
							</li>
							<li>
								<p >
									Click on the “Customize” button on the theme you are using.
								</p>
							</li>
							<li>
								<p >
									Click on the “Add Section” option.
								</p>
							</li>
							<li>
								<p >
									Select Common Ninja’s app/widget.
								</p>
							</li>
							<li>
								<p >
									Paste the Instance ID to the field on the right dashboard.
								</p>
							</li>
						</ol>
						<CopyInput
							value={componentId}
							inputType="textarea"
							buttonClassName={buttonClassName}
						/>
					</>
				}
				{vendor === 'shopify-manual' &&
					<>
						<h6>Add the app to your website using the “Embed” option</h6>
						<ol>
							<li>
								<p>Copy the code below.</p>
							</li>
							<li>
								<p>
									On your shop’s desired page, add the “Custom Liquid”
									section.
								</p>
							</li>
							<li>
								<p>
									Paste the code you’ve copied into Custom Liquid’s field,
									and click save.
								</p>
							</li>
						</ol>
						<p>
							Copy this code & paste it into the “Custom Liquid” section on
							your store’s preferred page
						</p>
						<CopyInput
							value={`<div class="commonninja_component" comp-type="${componentType}" comp-id="${componentId}"></div>`}
							inputType="textarea"
							buttonClassName={buttonClassName}
						/>
					</>
				}
			</FormRow>
		</div>
	);
};

export const InstallationTutorials = () => {
	return (
		<div className="installation-tutorials-wrapper">
			<div className="icon"></div>
			<div className="installation-tutorials">
				<p>Is your site using a website building platform?</p>
				<p>You can find a tutorial for almost any online platform in our
					<a className='base-center-link' href="https://help.commoninja.com/hc/en-us/sections/360002482278-Adding-Common-Ninja-s-Apps-to-Your-Website" target='_blank'>
						Knowladge Base Center
					</a>
				</p>
			</div>
		</div>
	);
};
