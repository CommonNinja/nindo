export type TComponentType =
	| 'bracket'
	| 'testimonials'
	| 'comparison_table'
	| 'before_after'
	| 'automatic_stories'
	| 'numbers_counter'
	| 'image_hotspot'
	| 'chart'
	| 'announcements'
	| 'whatsapp_button'
	| 'faq'
	| 'timeline'
	| 'telegram_button'
	| 'audio_player'
	| 'pricing_table'
	| 'messenger_button'
	| 'countdown_bar'
	| 'pdf_gallery'
	| 'feed'
	| 'business_hours'
	| 'logo_showcase';

export enum ServiceName {
	COMMONNINJA = 'commoninja',
	BRACKETSNINJA = 'bracketsninja',
	TESTIMONIALSNINJA = 'testimonialsninja',
	COMPARENINJA = 'compareninja',
	BEFOREAFTERNINJA = 'beforeafterninja',
	AUTOSTORIESNINJA = 'autostoriesninja',
	NUMBERSCOUNTERNINJA = 'numberscounterninja',
	IMAGEHOTSPOTNINJA = 'imagehotspotninja',
	CHARTSNINJA = 'chartsninja',
	ANNOUNCEMENTSNINJA = 'announcementsninja',
	WHATSAPPBUTTONNINJA = 'whatsappbuttonninja',
	FAQNINJA = 'faqninja',
	TIMELINENINJA = 'timelineninja',
	TELEGRAMBUTTONNINJA = 'telegrambuttonninja',
	AUDIOPLAYERNINJA = 'audioplayerninja',
	PRICERNINJA = 'pricerninja',
	MESSENGERBUTTONNINJA = 'messengerbuttonninja',
	COUNTDOWNBARNINJA = 'countdownbarninja',
	PDFEMBEDNINJA = 'pdfembedninja',
	FEEDERNINJA = 'feederninja',
	BUSINESSHOURSNINJA = 'businesshoursninja',
	LOGONINJA = 'logoninja',
}

export enum ServiceDisplayName {
	COMMONNINJA = 'Common Ninja',
	BRACKETSNINJA = 'Brackets & Tournaments',
	TESTIMONIALSNINJA = 'Testimonials',
	COMPARENINJA = 'Comparison Tables',
	BEFOREAFTERNINJA = 'Before & After Slider',
	AUTOSTORIESNINJA = 'Stories',
	NUMBERSCOUNTERNINJA = 'Numbers Counter',
	IMAGEHOTSPOTNINJA = 'Image Hotspot',
	CHARTSNINJA = 'Charts & Graphs',
	ANNOUNCEMENTSNINJA = 'Announcements & Updates',
	WHATSAPPBUTTONNINJA = 'WhatsApp Chat Button',
	FAQNINJA = 'FAQ',
	TIMELINENINJA = 'Timeline',
	TELEGRAMBUTTONNINJA = 'Telegram Chat Button',
	AUDIOPLAYERNINJA = 'Audio Player',
	PRICERNINJA = 'Pricing Tables',
	MESSENGERBUTTONNINJA = 'Messenger Chat Button',
	COUNTDOWNBARNINJA = 'Countdown Bar',
	PDFEMBEDNINJA = 'PDF Gallery',
	FEEDERNINJA = 'Social Media & RSS Feeds',
	BUSINESSHOURSNINJA = 'Business Hours',
	LOGONINJA = 'Logo Showcase',
}

export enum Component {
	UNKNOWN = 'unknown',
	BRACKET = 'bracket',
	TESTIMONIALS = 'testimonials',
	COMPARISON_TABLE = 'comparison_table',
	BEFORE_AFTER = 'before_after',
	AUTOMATIC_STORIES = 'automatic_stories',
	NUMBERS_COUNTER = 'numbers_counter',
	IMAGE_HOTSPOT = 'image_hotspot',
	CHART = 'chart',
	ANNOUNCEMENTS = 'announcements',
	WHATSAPP_BUTTON = 'whatsapp_button',
	FAQ = 'faq',
	TIMELINE = 'timeline',
	TELEGRAM_BUTTON = 'telegram_button',
	AUDIO_PLAYER = 'audio_player',
	PRICING_TABLE = 'pricing_table',
	MESSENGER_BUTTON = 'messenger_button',
	COUNTDOWN_BAR = 'countdown_bar',
	PDF_GALLERY = 'pdf_gallery',
	FEED = 'feed',
	BUSINESS_HOURS = 'business_hours',
	LOGO_SHOWCASE = 'logo_showcase',
}

export const ComponentToServiceName = new Map<Component, ServiceName>([
	[Component.BRACKET, ServiceName.BRACKETSNINJA],
	[Component.TESTIMONIALS, ServiceName.TESTIMONIALSNINJA],
	[Component.COMPARISON_TABLE, ServiceName.COMPARENINJA],
	[Component.BEFORE_AFTER, ServiceName.BEFOREAFTERNINJA],
	[Component.AUTOMATIC_STORIES, ServiceName.AUTOSTORIESNINJA],
	[Component.NUMBERS_COUNTER, ServiceName.NUMBERSCOUNTERNINJA],
	[Component.IMAGE_HOTSPOT, ServiceName.IMAGEHOTSPOTNINJA],
	[Component.CHART, ServiceName.CHARTSNINJA],
	[Component.ANNOUNCEMENTS, ServiceName.ANNOUNCEMENTSNINJA],
	[Component.WHATSAPP_BUTTON, ServiceName.WHATSAPPBUTTONNINJA],
	[Component.FAQ, ServiceName.FAQNINJA],
	[Component.TIMELINE, ServiceName.TIMELINENINJA],
	[Component.TELEGRAM_BUTTON, ServiceName.TELEGRAMBUTTONNINJA],
	[Component.AUDIO_PLAYER, ServiceName.AUDIOPLAYERNINJA],
	[Component.PRICING_TABLE, ServiceName.PRICERNINJA],
	[Component.MESSENGER_BUTTON, ServiceName.MESSENGERBUTTONNINJA],
	[Component.COUNTDOWN_BAR, ServiceName.COUNTDOWNBARNINJA],
	[Component.PDF_GALLERY, ServiceName.PDFEMBEDNINJA],
	[Component.FEED, ServiceName.FEEDERNINJA],
	[Component.BUSINESS_HOURS, ServiceName.BUSINESSHOURSNINJA],
	[Component.LOGO_SHOWCASE, ServiceName.LOGONINJA],
]);

export const ServiceNameToComponent = new Map<ServiceName, Component>([
	[ServiceName.BRACKETSNINJA, Component.BRACKET],
	[ServiceName.TESTIMONIALSNINJA, Component.TESTIMONIALS],
	[ServiceName.COMPARENINJA, Component.COMPARISON_TABLE],
	[ServiceName.BEFOREAFTERNINJA, Component.BEFORE_AFTER],
	[ServiceName.AUTOSTORIESNINJA, Component.AUTOMATIC_STORIES],
	[ServiceName.NUMBERSCOUNTERNINJA, Component.NUMBERS_COUNTER],
	[ServiceName.IMAGEHOTSPOTNINJA, Component.IMAGE_HOTSPOT],
	[ServiceName.CHARTSNINJA, Component.CHART],
	[ServiceName.ANNOUNCEMENTSNINJA, Component.ANNOUNCEMENTS],
	[ServiceName.WHATSAPPBUTTONNINJA, Component.WHATSAPP_BUTTON],
	[ServiceName.FAQNINJA, Component.FAQ],
	[ServiceName.TIMELINENINJA, Component.TIMELINE],
	[ServiceName.TELEGRAMBUTTONNINJA, Component.TELEGRAM_BUTTON],
	[ServiceName.AUDIOPLAYERNINJA, Component.AUDIO_PLAYER],
	[ServiceName.PRICERNINJA, Component.PRICING_TABLE],
	[ServiceName.MESSENGERBUTTONNINJA, Component.MESSENGER_BUTTON],
	[ServiceName.COUNTDOWNBARNINJA, Component.COUNTDOWN_BAR],
	[ServiceName.PDFEMBEDNINJA, Component.PDF_GALLERY],
	[ServiceName.FEEDERNINJA, Component.FEED],
	[ServiceName.BUSINESSHOURSNINJA, Component.BUSINESS_HOURS],
	[ServiceName.LOGONINJA, Component.LOGO_SHOWCASE],
]);

export interface IPluginListing {
	name: TComponentType;
	displayName: string;
	iconClass: string;
	buttonText: string;
	slug: string;
	teaser: string;
	serviceName: string;
	priority: number;
	developerId: string;
	status: 'draft' | 'published' | 'deleted';
	iconPaths?: number;
	categories?: string[];
	ribbon?: string;
	helpCenterLink?: string;
	meta?: {
		hero: {
			imageUrl: string;
			pluginId?: string;
		};
		keyBenefits: {
			title: string;
			description: string;
			icon: string;
		}[];
		keyFeatures: {
			title: string;
			description: string;
			imageUrl: string;
		}[];
		faq: {
			question: string;
			answer: string;
		}[];
		seo: {
			title: string;
			description: string;
			keywords: string[];
			image?: string;
		};
	};
}

export const pluginsList: IPluginListing[] = [
	{
		name: 'bracket',
		displayName: 'Brackets & Tournaments',
		iconClass: 'brackets',
		buttonText: 'Create a Bracket',
		slug: 'brackets',
		teaser:
			'Create Advanced Brackets & Tournaments To Engage Users & Collect Leads',
		serviceName: 'bracketsninja',
		priority: 100,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 2,
		categories: [],
		ribbon: '',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/115001053233-Brackets-Tournaments',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/brackets-and-tournaments/hero.png',
			},
			keyBenefits: [
				{
					title: 'Engage Your Users',
					description:
						'The Brackets & Tournaments app allows you to engage your users by providing an interactive experience where they can vote for participants and make predictions.',
					icon: '',
				},
				{
					title: 'Enhance User Experience',
					description:
						'With Brackets & Tournaments, you can improve the users’ experience and make it more enjoyable for them to look at and use your brackets. You can add prizes, create stunning brackets and make your users want to come back and participate again. To some users, the brackets can also be an easy, visual way to follow the game — further improving their experience.',
					icon: '',
				},
				{
					title: 'Generate Leads',
					description:
						'The Brackets & Tournaments app offers a signup option that will require your users to provide their email addresses to participate or to vote. This way, you will be able to collect leads and add them to your email marketing list.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Multiple Bracket Types ',
					description:
						'The Brackets & Tournaments app features multiple bracket types for you to choose from. These include single elimination, double elimination, March Madness, custom brackets and more! Whatever your tournament type is, we’ve got the bracket for you.',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/bracket-types.png',
				},
				{
					title: 'Votes & Predictions',
					description:
						'The Brackets & Tournaments app features the ability to collect votes and predictions. These options will make the brackets more interactive, engaging and fun for your users.',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/votes.png',
				},
				{
					title: 'Sign Up to Bracket Page',
					description:
						'The Brackets & Tournaments app features a signup page option that will enable your users to sign up and participate in your tournament and allow you to collect emails and generate leads for your email marketing campaigns. ',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/sign-up.png',
				},
				{
					title: 'Match Randomization & Seeding ',
					description:
						'You can select different ways of pitting participants against each other — by order, randomized order, or traditional seeding.',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/randomization.png',
				},
				{
					title: 'Export as an Image or PDF',
					description:
						'You can export your tournament as an image or a PDF file, to quickly and easily share it with other people or to post it on your website or social media accounts.',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/export-pdf.png',
				},
				{
					title: 'Multiple Types of Tables',
					description:
						'The Brackets & Tournaments app features various types of tables that you can add to your tournaments. You can select the Standings table, which includes participants and their ranks, you can select the Participants table for a simple overview of your participants and their information & you can select the Ranking table which is based on the predictions that have been made. ',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/table-types.png',
				},
				{
					title: 'Multiple Layouts',
					description:
						'The Brackets & Tournaments app features multiple layouts including squares, circles & others. You can easily choose the layout that is most applicable to your website design and customize your brackets however you want.',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/layouts.png',
				},
				{
					title: 'Multiple Skins ',
					description:
						'The Brackets & Tournaments app features multiple skins for you to choose from. We have a wide selection of skins in solid colors, or with complementing images that capture most tournament types. Set your tournament up quickly without the need for extensive customization.',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/skins.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Brackets & Tournaments app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/fully-customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Brackets & Tournaments app is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors.',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Brackets & Tournaments app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you want it with just a few simple clicks.  ',
					imageUrl:
						'https://website-assets.commoninja.com/brackets-and-tournaments/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Brackets & Tournaments app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Brackets & Tournaments app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'How many participants can I add?',
					answer: 'You can add as many participants as you’d like.',
				},
				{
					question: 'Can a team be loaded more than once?',
					answer: 'Yes, it can.',
				},
				{
					question: 'Can a game end in a tie?',
					answer:
						'No. If there’s a tie then the winner will be chosen randomly. ',
				},
				{
					question: 'Can I add participants in bulk?',
					answer:
						'Yes you can! In the app’s dashboard, go to the \'Participants\' tab and select the group icon where it says \'Participants List\'. For a more detailed guide, please refer to this <a href="https://help.commoninja.com/hc/en-us/articles/360007925157-How-to-Import-Add-Bulk-Participants-to-the-Bracket-" target="_blank">article</a>.',
				},
				{
					question: 'Can users vote? ',
					answer:
						'Certainly! You can enable the voting option by selecting the \'Votes/Predictions\' tab on your dashboard. For a more detailed guide, please refer to this <a href="https://help.commoninja.com/hc/en-us/articles/360007926697-How-to-Create-and-Manage-a-Voting-Bracket-" target="_blank">article</a>.',
				},
				{
					question: 'How can users add their predictions?',
					answer:
						'You can easily enable the predictions option by selecting the \'Votes/Predictions\' tab on your dashboard. For a more detailed guide, please refer to this <a href="https://help.commoninja.com/hc/en-us/articles/360007926717-How-to-Create-and-Manage-a-Prediction-Bracket-" target="_blank">article</a>.',
				},
				{
					question: 'Can I add a third-place winner?',
					answer:
						'Of course! You can add a third-place winner by selecting the “Settings” tab and toggling the “3rd Place Match” button.',
				},
				{
					question: 'Can I add prizes?',
					answer:
						'Yes, you can! You can easily add a prizes section by selecting the “Settings” tab and toggling the “Prizes” button.',
				},
				{
					question: 'Can I highlight the champion? ',
					answer:
						'Certainly! You can highlight and celebrate your champion by selecting the “Settings” tab and toggling the “Champion View” button. ',
				},
				{
					question:
						'Can I create a signup page for people to join as participants?',
					answer:
						'Yes, you can! You can create a signup page by selecting the “Settings” tab and toggling the “Signup Page” button.',
				},
				{
					question: 'Can users submit scores?',
					answer:
						'Yes, they can! You can add score submission by selecting the “Settings” tab and toggling the “Scores Submission” button.',
				},
				{
					question: 'Can I add the game’s location?',
					answer:
						'Yes, you can! You can easily add the game’s location by selecting the “Settings” tab and toggling the “Game Locations” button.',
				},
				{
					question: 'Can I add group names? ',
					answer:
						'Of Course! You can easily add group names by selecting the “Settings” tab and toggling the “Group Names” button.',
				},
				{
					question: 'Can I add dates to the games?',
					answer:
						'Certainly! You can easily add the dates of the games by selecting the “Settings” tab and toggling the “Dates” button.',
				},
				{
					question:
						'How do I start using Common Ninja’s Brackets & Tournaments app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Brackets & Tournaments app free? ',
					answer:
						'Common Ninja’s Brackets & Tournaments app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Brackets & Tournaments app compatible with? ',
					answer:
						'Common Ninja’s Brackets & Tournaments app is compatible with ALL current and future website builders. ',
				},
				{
					question:
						'How do I embed the Brackets & Tournaments app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Brackets & Tournaments app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Brackets & Tournaments app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Brackets & Tournaments app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Brackets & Tournaments app GDPR compliant?',
					answer: 'Yes, the Brackets & Tournaments app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Brackets & Tournaments app? ',
					answer:
						'No. Using our Brackets & Tournaments app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Brackets & Tournaments app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'Free, Fully Customizable & Responsive Brackets & Tournaments',
				description:
					'Use Common Ninja’s Brackets & Tournaments app on any website to generate leads and engage users through votes and predictions.',
				keywords: [
					'brackets & tournaments',
					'bracket maker',
					'tournament maker',
					'bracket creator',
					'tournament creator',
					'bracket generator',
					'tournament generator',
					'brackets & tournaments app',
					'brackets & tournaments widget',
					'brackets & tournaments plugin',
					'bracket maker app',
					'bracket maker widget',
					'bracket maker plugin',
					'bracket creator app',
					'bracket creator plugin',
					'bracket creator widget',
					'bracket generator app',
					'bracket generator widget',
					'bracket generator plugin',
					'tournament maker app',
					'tournament maker plugin',
					'tournament maker widget',
					'tournament generator app',
					'tournament generator plugin',
					'tournament generator widget',
					'tournament creator app',
					'tournament creator plugin',
					'tournament creator widget',
				],
				image:
					'https://website-assets.commoninja.com/brackets-and-tournaments/brackets-hero.png',
			},
		},
	},
	{
		name: 'testimonials',
		displayName: 'Testimonials',
		iconClass: 'testimonials',
		buttonText: 'Create Testimonials Widget',
		slug: 'testimonials',
		teaser: 'Improve Credibility & Conversions With Stellar Testimonials',
		serviceName: 'testimonialsninja',
		priority: 90,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 7,
		categories: [],
		ribbon: 'New',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/4410933371153-Testimonials',
		meta: {
			hero: {
				imageUrl: 'https://website-assets.commoninja.com/testimonials/hero.png',
			},
			keyBenefits: [
				{
					title: 'Improve Credibility',
					description:
						'Improve your credibility by showing stellar testimonials on your website. Write compelling testimonials, add stars and make sure that your users are enthralled by what they read!',
					icon: '',
				},
				{
					title: 'Enhance Your Design',
					description:
						'With full customizations options, you can design the testimonials to enhance your overall page style and make them complement it, or, on the contrary, to contrast it. The choice is yours!',
					icon: '',
				},
				{
					title: 'Add Your Offline Reviews',
					description:
						'Share your offline reviews online! Users may send their praise via emails, instant messaging platforms, or other means that are not easily shareable online. Copy the text to the Testimonials app and share the praise you’ve received on your website!',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Advanced Control Options',
					description:
						'The Testimonials app allows you to add control elements like arrows and pagination, with which you can improve the user’s experience through better navigation. In addition, these elements are fully customizable and can be further enhanced by adding a “fade edge” effect to the background and arrow containers.',
					imageUrl:
						'https://website-assets.commoninja.com/testimonials/control.png',
				},
				{
					title: 'Distinct Layouts',
					description:
						'The Testimonials app features three of the most commonly used layout styles, each of which rearranges the elements within the testimonials and creates a completely different style that can be used to enhance your website’s design. The layouts can be customized further by toggling the “Stretch Height” option, which will make all the testimonials as tall as the tallest one, thus creating a single, unified style.',
					imageUrl:
						'https://website-assets.commoninja.com/testimonials/layouts.png',
				},
				{
					title: 'Multiple Skins',
					description:
						'The Testimonials app comes available with a variety of beautiful skins with the help of which you can kickstart your testimonial creating process and avoid spending too much time on extensive customization.',
					imageUrl:
						'https://website-assets.commoninja.com/testimonials/nice-skins.png',
				},
				{
					title: 'Various Icons',
					description:
						'The Testimonials app features a lovely set of arrow icons that you can choose from. This selection of icons can be further wrapped in several different container types to ensure that the Testimonials app fits your website’s design needs. ',
					imageUrl:
						'https://website-assets.commoninja.com/testimonials/icons.png',
				},
				{
					title: 'Full RTL Support',
					description:
						'The Testimonials app provides full RTL support for those who write from right to left. Make your news accessible to more users from all over the world. ',
					imageUrl:
						'https://website-assets.commoninja.com/testimonials/rtl-support.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Testimonials app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/testimonials/fully-customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Testimonials is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/testimonials/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Testimonials app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/testimonials/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Testimonials app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Testimonials app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I change the ratings?',
					answer:
						'Yes, you can do so by using selecting the review you’d like to change the rating in, and moving the rating slider to the desired result. ',
				},
				{
					question: 'Can I change the layout of the Testimonials app?',
					answer: 'Yes, you can do so from within the “Look & Feel” tab.',
				},
				{
					question: 'Can I change the app’s default skin?',
					answer: 'Yes, you can do so from within the “Look & Feel” tab.',
				},
				{
					question: 'Can I toggle the arrow’s on or off? ',
					answer: 'Yes, you can do so from within the “Look & Feel” tab.',
				},
				{
					question: 'Can I change the arrow icons? ',
					answer: 'Yes, you can do so from within the “Look & Feel” tab.',
				},
				{
					question: 'Can I change the containers that the arrows are in?',
					answer: 'Yes, you can do so from within the “Look & Feel” tab.',
				},
				{
					question: 'Can I toggle the pagination on or off?',
					answer: 'Yes, you can do so from within the “Look & Feel” tab.',
				},
				{
					question: 'Can I change the pagination’s icon type?',
					answer: 'Yes, you can do so from within the “Look & Feel” tab.',
				},
				{
					question: 'Can I toggle the ratings on or off? ',
					answer: 'Yes, you can do so from within the “Look & Feel” tab.',
				},
				{
					question: 'Can I toggle the title on or off? ',
					answer: 'Yes, you can do so from within the “Look & Feel” tab.',
				},
				{
					question: 'Can I toggle the carousel loop on or off?',
					answer: 'Yes, you can do so from within the “Settings” tab.',
				},
				{
					question: 'Can I enable RTL support? ',
					answer: 'Yes, you can do so from within the “Settings” tab.',
				},
				{
					question: 'Can I change the Testimonial’s carousel speed?',
					answer: 'Yes, you can do so from within the “Settings” tab.',
				},
				{
					question: 'Can I toggle autoplay on or off?',
					answer: 'Yes, you can do so from within the “Settings” tab.',
				},
				{
					question: 'How do I start using Common Ninja’s Testimonials app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Testimonials app free? ',
					answer:
						'Common Ninja’s Testimonials app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Testimonials app compatible with? ',
					answer:
						'Common Ninja’s Testimonials app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the Testimonials app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Testimonials app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Testimonials app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Testimonials app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Testimonials app GDPR compliant?',
					answer: 'Yes, the Testimonials app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Testimonials app? ',
					answer:
						'No. Using our Testimonials app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Testimonials app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Fully Responsive Testimonials App',
				description:
					'Use Common Ninja’s Testimonials app on any website to improve credibility, enhance the site’s design and increase conversions.',
				keywords: [
					'testimonials',
					'testimonials app',
					'testimonials plugin',
					'testimonials widget',
					'testimonials wordpress',
					'testimonials wix',
					'testimonials duda',
					'testimonials elementor',
					'testimonials shopify',
					'testimonials woocommerce',
					'testimonials bigcommerce',
				],
				image:
					'https://website-assets.commoninja.com/testimonials/testimonials-hero.png',
			},
		},
	},
	{
		name: 'comparison_table',
		displayName: 'Comparison Tables',
		iconClass: 'compare-tables',
		buttonText: 'Create a Table',
		slug: 'comparison-tables',
		teaser: 'Convert Users With Clear, Concise & Responsive Comparison Tables',
		serviceName: 'compareninja',
		priority: 70,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 8,
		categories: [],
		ribbon: '',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/115001053253-Comparison-Tables',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/comparison-table/hero.png',
			},
			keyBenefits: [
				{
					title: 'Provide Great User Experience',
					description:
						'The Comparison Tables app enables you to deliver information in an organized and aesthetically pleasing visual way that your users will love.',
					icon: '',
				},
				{
					title: 'Showcase Your Benefits',
					description:
						'With the Comparison Tables app, you’ll be able to compare your products or services against that of a competitor’s and highlight your benefits in an easily accessible way.',
					icon: '',
				},
				{
					title: 'Expedite Decision-Making',
					description:
						'The Comparison Tables app will allow you to expedite the user’s decision-making process in your favor by creating a simple, visual representation of the benefits you offer.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Search & Sort Options',
					description:
						'The Comparison Tables app comes with indispensable search and sort options that will further enable your users to access information in the most accessible way.',
					imageUrl:
						'https://website-assets.commoninja.com/comparison-table/sorting-search.png',
				},
				{
					title: 'Floating Elements',
					description:
						'With Comparison Tables, you can create floating elements to keep the position of column and row headers fixed. Your users won’t get lost when looking at long tables.  ',
					imageUrl:
						'https://website-assets.commoninja.com/comparison-table/floating-elements.png',
				},
				{
					title: 'Pagination',
					description:
						'The Comparison Tables app offers a pagination option for the really long comparison tables. Allow your users to read all the information you want comfortably. ',
					imageUrl:
						'https://website-assets.commoninja.com/comparison-table/pagination.png',
				},
				{
					title: 'Easy CSV-to-Table Conversion',
					description:
						"You can easily convert any CSV file into an interactive table. With Common Ninja's smart converter, all your data is transferred exactly as it is, including tags, images, buttons, and other supported elements.",
					imageUrl:
						'https://website-assets.commoninja.com/comparison-table/csv-to-table.png',
				},
				{
					title: 'Beautiful Skins',
					description:
						'The Comparison Tables app comes with a beautiful selection of premade skins that you can choose from. Avoid spending too much time on finding the right colors or fonts, kick off your comparison table creation process with premade skins. ',
					imageUrl:
						'https://website-assets.commoninja.com/comparison-table/nice-sking.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Comparison Tables app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/comparison-table/fully-customizble.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Comparison Tables is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/comparison-table/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Comparison Tables app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/comparison-table/easey-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Comparison Tables app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Comparison Tables app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I change the icon types?',
					answer:
						'Yes, you can easily do so by selecting the “Icon Change” option under the “Look & Feel” tab.',
				},
				{
					question: 'Can I change the app’s text direction? ',
					answer: 'Yes, you can! The app features full RTL support.',
				},
				{
					question: 'Can I change how the table behaves on mobile devices?',
					answer:
						'Yes, you can! The app is fully responsive, but you can also change specific behaviors in the “Settings” tab. ',
				},
				{
					question: 'Is there a sorting option available?',
					answer: 'Yes, the app comes with a sorting feature available. ',
				},
				{
					question: 'Is there a search option available? ',
					answer: 'Yes, the app comes with a search option available. ',
				},
				{
					question: 'Can I add page numbers to the table?',
					answer: 'Yes, the app features a pagination option. ',
				},
				{
					question:
						'How do I start using Common Ninja’s Comparison Tables app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Comparison Tables app free? ',
					answer:
						'Common Ninja’s Comparison Tables app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Comparison Tables app compatible with? ',
					answer:
						'Common Ninja’s Comparison Tables app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the Comparison Tables app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Comparison Tables app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Comparison Tables app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Comparison Tables app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Comparison Tables app GDPR compliant?',
					answer: 'Yes, the Comparison Tables app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Comparison Tables app? ',
					answer:
						'No. Using our Comparison Tables app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Comparison Tables app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'Free, Fully Customizable & Fully Responsive Comparison Tables',
				description:
					'Use Common Ninja’s Comparison Tables app on any website to provide great user experience, showcase your benefits and offer great value.',
				keywords: [
					'comparison tables',
					'comparison tables app',
					'comparison tables plugin',
					'comparison tables widget',
					'comparison tables wordpress',
					'comparison tables wix',
					'comparison tables shopify',
					'comparison tables woocommerce',
					'comparison tables webflow',
					'comparison tables duda',
					'comparison tables elementor',
				],
				image:
					'https://website-assets.commoninja.com/comparison-table/comparison-hero.png',
			},
		},
	},
	{
		name: 'before_after',
		displayName: 'Before & After Slider',
		iconClass: 'before-after',
		buttonText: 'Create a Slider',
		slug: 'before-after',
		teaser: 'Captivate Users With Interactive Before & After Images',
		serviceName: 'beforeafterninja',
		priority: 65,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 6,
		categories: [],
		ribbon: '',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/360005960117-Before-After-Slider',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/before-after-slider/hero.png',
			},
			keyBenefits: [
				{
					title: 'Increased Engagement Through Interaction',
					description:
						'With the Before & After Slider, you can increase engagement on your website by offering an interactive feature for your users to interact with. More engagement increases interest and, subsequently, improves the decision-making process that will convert curious visitors into paying customers.',
					icon: '',
				},
				{
					title: 'Compelling Visual Storytelling ',
					description:
						'With the Before & After Slider app you can convey a compelling story by using the right images. Demonstrate the changes global warming has on nature, show the powerful transformations of people, present interesting item restoration results and much more!',
					icon: '',
				},
				{
					title: 'Effective Showcase Presentation',
					description:
						'The Before & After Slider allows you to showcase the benefits of your product or service in the most effective way — visual, side-by-side comparison. Show how you’ve restored a mouthful of crooked teeth, or how your product has cleaned the same item, only better, or how you’ve restored a decrepit house into a glorious abode — the options are limitless!',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Horizontal & Vertical Slider Direction',
					description:
						'The Before & After Slider app features the option to create horizontal or vertical sliders, enabling you to unleash the full power of your creativity.',
					imageUrl:
						'https://website-assets.commoninja.com/before-after-slider/horizontal-vertical-direction.png',
				},
				{
					title: 'Multiple Sliders',
					description:
						'With the Before & After Slider app, you can create as many sliders as you want and tell a visual story just how you want to.',
					imageUrl:
						'https://website-assets.commoninja.com/before-after-slider/multiple-sliders.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Before & After Slider app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/before-after-slider/fully-customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Before & After Slider is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/before-after-slider/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Before & After Slider app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/before-after-slider/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Before & After Slider app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed',
					description:
						'You can embed the Before & After Slider app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I make the divider style angled?',
					answer: 'Yes, you can make the divider angled.',
				},
				{
					question:
						'Can I change the slider direction from horizontal to vertical?',
					answer:
						'Yes, you can easily change the slider direction from within the “Content” tab.',
				},
				{
					question:
						'How do I start using Common Ninja’s Before & After Slider app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Before & After Slider app free? ',
					answer:
						'Common Ninja’s Before & After Slider app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Before & After Slider app compatible with? ',
					answer:
						'Common Ninja’s Before & After Slider app is compatible with ALL current and future website builders. ',
				},
				{
					question:
						'How do I embed the Before & After Slider app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Before & After Slider app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Before & After Slider app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Before & After Slider app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Before & After Slider app GDPR compliant?',
					answer: 'Yes, the Before & After Slider app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Before & After Slider app? ',
					answer:
						'No. Using our Before & After Slider app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Before & After Slider app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Responsive Before & After Slider',
				description:
					'Use Common Ninja’s Before & After Slider on any website to increase engagement, tell a story & showcase your products & services.',
				keywords: [
					'before & after slider',
					'before and after slider',
					'side-by-side comparison',
					'before and after plugin',
					'before and after widget',
					'before and after app',
					'before & after slider app',
					'before & after slider widget',
					'before & after plugin',
					'side-by-side comparison app',
					'side-by-side comparison plugin',
					'side-by-side comparison widget',
				],
				image:
					'https://website-assets.commoninja.com/before-after-slider/before-after-hero.png',
			},
		},
	},
	{
		name: 'automatic_stories',
		displayName: 'Stories',
		iconClass: 'automatic-stories',
		buttonText: 'Create Stories',
		slug: 'stories',
		teaser: 'Create Stunning Stories To Engage & Convert Users',
		serviceName: 'autostoriesninja',
		priority: 60,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 4,
		categories: [],
		ribbon: '',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/360004912678-Stories',
		meta: {
			hero: {
				imageUrl: 'https://website-assets.commoninja.com/stories/hero.png',
			},
			keyBenefits: [
				{
					title: 'Increase Time on Site',
					description:
						'Stories will enable you to create eye-catching content that will keep your users engaged, entertained and glued to their screens for long periods of time. If the time spent on your site is a KPI then this app will do wonders to improve it.',
					icon: '',
				},
				{
					title: 'Promote Products & Services',
					description:
						'With the Stories app, you can promote products & services in a creative, out-of-the-box way. Use clever combinations of text and images to focus the users’ attention on features and benefits you’d like to highlight.',
					icon: '',
				},
				{
					title: 'Tell Stories',
					description:
						'The Stories app, as the name suggests, enables you to tell stories. Use it on your blog to create a captivating story with visual aids.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Progress Bar',
					description:
						'The Stories app features a progress bar that will help your users to keep track of the content they are viewing, thereby improving their experience.',
					imageUrl:
						'https://website-assets.commoninja.com/stories/progress-bar.png',
				},
				{
					title: 'Multiple Layouts',
					description:
						'The Stories app features multiple layouts for you to choose from. The right layout will help you send the right message and will also complement your design.',
					imageUrl:
						'https://website-assets.commoninja.com/stories/multiple-layouts.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Stories app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/stories/fully-customazible.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Stories is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/stories/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Stories app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/stories/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Stories app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Stories app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I change the layout shape?',
					answer:
						'Yes, the app comes with a selection of layout shapes for you to choose from. ',
				},
				{
					question: 'Can I change the app’s text direction? ',
					answer: 'Yes, you can! The app features full RTL support.',
				},
				{
					question: 'Can I add a progress bar to my stories?',
					answer:
						'Yes, the app features a progress bar that you can add to your stories.',
				},
				{
					question: 'How do I start using Common Ninja’s Stories app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Stories app free? ',
					answer:
						'Common Ninja’s Stories app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Stories app compatible with? ',
					answer:
						'Common Ninja’s Stories app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the Stories app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Stories app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Stories app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Stories app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Stories app GDPR compliant?',
					answer: 'Yes, the Stories app is GDPR compliant. ',
				},
				{
					question: 'Do I need to be able to code to use your Stories app? ',
					answer:
						'No. Using our Stories app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Stories app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Fully Responsive Stories App',
				description:
					'Use Common Ninja’s Stories app on any website to promote products and services, increase the time spent on your site and tell stories.',
				keywords: [
					'stories',
					'stories app',
					'stories plugin',
					'stories widget',
					'stories wordpress',
					'stories wix',
					'stories duda',
					'stories shopify',
					'stories elementor',
					'stories webflow',
				],
				image: 'https://website-assets.commoninja.com/stories/stories-hero.png',
			},
		},
	},
	{
		name: 'numbers_counter',
		displayName: 'Numbers Counter',
		iconClass: 'numbers-counter',
		buttonText: 'Create a Numbers Counter',
		slug: 'numbers-counter',
		teaser: 'Create a Numbers Counter',
		serviceName: 'numberscounterninja',
		priority: 52,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'draft',
		iconPaths: 1,
		categories: [],
		ribbon: '',
		helpCenterLink: '',
		meta: {
			keyBenefits: [{ title: '', description: '', icon: '' }],
			keyFeatures: [{ title: '', description: '', imageUrl: '' }],
			faq: [{ question: '', answer: '' }],
		},
	},
	{
		name: 'image_hotspot',
		displayName: 'Image Hotspot',
		iconClass: 'image-hotspot',
		buttonText: 'Create Image Hotspot',
		slug: 'image-hotspot',
		teaser:
			'Increase Engagement and Conversions With Interactive Image Hotspots',
		serviceName: 'imagehotspotninja',
		priority: 50,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 5,
		categories: [],
		ribbon: 'New',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/4408743101713-Image-Hotspot',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/image-hotspot/hero.png',
			},
			keyBenefits: [
				{
					title: 'Add Interactivity ',
					description:
						'With the Image Hotspot app, you can add interactivity to your website and make boring, static images more engaging.',
					icon: '',
				},
				{
					title: 'Add Text Without Obstructing the Image',
					description:
						'The Image Hotspot app allows you to add as much text as you’d like to your image without obstructing it.',
					icon: '',
				},
				{
					title: 'Implement Visual Storytelling',
					description:
						'The Image Hotspot app is an excellent addition to any e-commerce store. It allows you to show your items in one place, arranged in an aesthetically pleasing way, and attach the relevant information to them.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Linkable & Clickable ',
					description:
						'You can make your Image Hotspot clickable and link it to any URL. Increase conversions through better and easier navigation.',
					imageUrl:
						'https://website-assets.commoninja.com/image-hotspot/clickable.png',
				},
				{
					title: 'Awesome Icon Options',
					description:
						'The Image Hotspot app features 10 lovely icons that can be applied to any design direction. ',
					imageUrl:
						'https://website-assets.commoninja.com/image-hotspot/icons.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Image Hotspot app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/image-hotspot/fully-customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Image Hotspot is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/image-hotspot/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Image Hotspot app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/image-hotspot/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Image Hotspot app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Image Hotspot app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I change the icon type? ',
					answer:
						'Yes, you can easily change the icon type by selecting the “Content” tab on your dashboard, choosing the image hotspot where you’d like to change the icon and clicking on the down-arrow next to the “Icon” section. ',
				},
				{
					question: 'Can I add a link to the image hotspot?',
					answer:
						'Yes, you can add a link to the image hotspot by selecting the “Content” tab on your dashboard, choosing the image hotspot to which you’d like to add a link to and adding a link in the field next to the “Link” section. ',
				},
				{
					question: 'Can I upload any image?',
					answer: 'Yes, you can upload any image to the Image Hotspot app.',
				},
				{
					question:
						'Can I change the image hotspot’s tooltip background color? ',
					answer:
						'Yes, you can easily do so by selecting the “Look & Feel” tab on your dashboard and changing the color next to the “Tooltip Background”.',
				},
				{
					question: 'Can I change the hotspot’s background color?',
					answer:
						'Yes, you can easily do so by selecting the “Look & Feel” tab on your dashboard and changing the color next to the “Hotspot Background”.',
				},
				{
					question: 'Can I change the hotspot’s text color?',
					answer:
						'Yes, you can easily do so by selecting the “Look & Feel” tab on your dashboard and changing the color next to the “Hotspot Text”.',
				},
				{
					question: 'Can I change the tooltip’s text color?',
					answer:
						'Yes, you can easily do so by selecting the “Look & Feel” tab on your dashboard and changing the color next to the “Tooltip Text”.',
				},
				{
					question: 'Can I toggle the title on or off? ',
					answer:
						'Yes, you can easily toggle the title on or off from within the “Settings” tab on your dashboard.',
				},
				{
					question: 'Can I toggle the alt text on or off? ',
					answer:
						'Yes, you can easily toggle the alt text on or off from within the “Settings” tab on your dashboard. ',
				},
				{
					question:
						'Can I choose how to open the link — in a new window or the same window?',
					answer:
						'Yes, you can do so from within the “Settings” tab, where it says “Link Target”.',
				},
				{
					question: 'How do I start using Common Ninja’s Image Hotspot app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Image Hotspot app free? ',
					answer:
						'Common Ninja’s Image Hotspot app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Image Hotspot app compatible with? ',
					answer:
						'Common Ninja’s Image Hotspot app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the Image Hotspot app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Image Hotspot app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Image Hotspot app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Image Hotspot app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Image Hotspot app GDPR compliant?',
					answer: 'Yes, the Image Hotspot app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Image Hotspot app? ',
					answer:
						'No. Using our Image Hotspot app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Image Hotspot app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Responsive Image Hotspot App',
				description:
					'Use Common Ninja’s Image Hotspot app on any website to add interactivity, implement visual storytelling & boost conversions.',
				keywords: [
					'image hotspot',
					'image hotspot plugin',
					'image hotspot app',
					'image hotspot widget',
					'image hotspot wordpress',
					'image hotspot wix',
					'image hotspot duda',
					'image hotspot webflow',
					'image hotspot elementor',
					'image hotspot shopify',
					'image hotspot woocommerce',
					'image hotspot bigcommerce',
				],
				image:
					'https://website-assets.commoninja.com/image-hotspot/image-hero.png',
			},
		},
	},
	{
		name: 'chart',
		displayName: 'Charts & Graphs',
		iconClass: 'charts',
		buttonText: 'Create a Chart',
		slug: 'charts',
		teaser:
			'Present Data Effectively & Convert Users With Elegant Charts & Graphs',
		serviceName: 'chartsninja',
		priority: 50,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 2,
		categories: [],
		ribbon: '',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/115001046974-Charts-Graphs',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/charts-graphs/hero.png',
			},
			keyBenefits: [
				{
					title: 'Improve & Expedite the Decision-Making Process',
					description:
						'With the Charts & Graphs app, you can improve and expedite the decision making process by providing easy-to-follow information to your readers. Display the benefits of your product or service, explain how you offer value in a visual way, warn of the dangers of inactivity with dramatic charts and more!',
					icon: '',
				},
				{
					title: 'Summarize Large Amounts of Data ',
					description:
						'The Charts & Graphs app allows you to summarize large amounts of information for better accessibility and easier understanding of different subjects. Provide yearly output comparisons, quarterly yields, fun facts, projected future results and similarly relevant information! Don’t bore your readers with huge amounts of text — show them charts! ',
					icon: '',
				},
				{
					title: 'Enhance Design and Improve User Experience',
					description:
						'The Charts & Graphs app enables information to be presented in a visually appealing way that can complement your website’s design and enhance the users’ experience on your website. Add breakpoints between text, create stunning 3D charts and choose any color scheme you’d like.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'A Large Selection of Chart Types',
					description:
						'Charts & Graphs features 20 different types of charts that will enable you to deliver information just the way you want to. From bar charts to pie charts, radial charts, and 3D charts — it’s got it all. Simply choose the chart you want and start using it, or customize it endlessly — it’s a fun game in its own right! ',
					imageUrl:
						'https://website-assets.commoninja.com/charts-graphs/large-selections-of-charts.png',
				},
				{
					title: 'Multi-Source Data Import ',
					description:
						'With the Chart & Graphs app, you can convert any CSV file into an interactive chart or easily connect it to your Google Drive or other, remote URLs. Prepare the data wherever you are most comfortable doing it, and then upload it. ',
					imageUrl:
						'https://website-assets.commoninja.com/charts-graphs/multi-source-data-import.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Charts & Graphs app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/charts-graphs/fully-customizble.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Charts & Graphs is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/charts-graphs/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Charts & Graphs app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/charts-graphs/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Charts & Graphs app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Charts & Graphs app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Do you have 3D charts?',
					answer: 'Yes, the app features a selection of 3d charts. ',
				},
				{
					question: 'Is there an auto-refresh option?',
					answer: 'Yes, the app features an auto-refresh option. ',
				},
				{
					question: 'How do I start using Common Ninja’s Charts & Graphs app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Charts & Graphs app free? ',
					answer:
						'Common Ninja’s Charts & Graphs app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Charts & Graphs app compatible with? ',
					answer:
						'Common Ninja’s Charts & Graphs app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the Charts & Graphs app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Charts & Graphs app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Charts & Graphs app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Charts & Graphs app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Charts & Graphs app GDPR compliant?',
					answer: 'Yes, the Charts & Graphs app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Charts & Graphs app? ',
					answer:
						'No. Using our Charts & Graphs app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Charts & Graphs app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'Free, Fully Customizable & Fully Responsive Charts & Graphs',
				description:
					'Use Common Ninja’s Charts & Graphs app on any website to summarize large amounts of data & help expedite the decision-making process.',
				keywords: [
					'charts & graphs',
					'charts and graphs',
					'chart maker',
					'graph maker',
					'charts app',
					'charts plugin',
					'charts widget',
					'graph widget',
					'graph plugin',
					'graph app',
					'chart maker app',
					'chart maker app',
					'chart maker plugin',
					'graph maker app',
					'graph maker plugin',
					'graph maker widget',
				],
				image:
					'https://website-assets.commoninja.com/charts-graphs/charts-hero.png',
			},
		},
	},
	{
		name: 'announcements',
		displayName: 'Announcements & Updates',
		iconClass: 'announcements',
		buttonText: 'Create Announcements',
		slug: 'announcements',
		teaser:
			'Keep Clients Informed & Boost Conversions With the Updates & Announcements Widget',
		serviceName: 'announcementsninja',
		priority: 50,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 5,
		categories: [],
		ribbon: '',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/360005290057-Announcements-Changelog',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/announcments-and-updates/hero.png',
			},
			keyBenefits: [
				{
					title: 'Promote Your Products and Services',
					description:
						'Make sure that your users know of any new products, services, features, or upcoming sales. The more informed they are, the more likely they are to become interested in what you offer.',
					icon: '',
				},
				{
					title: 'Provide Updates On New Features & Releases',
					description:
						'With Announcements & Updates, you can keep your users up to date regarding any and all relevant news about your products, services, features, and releases.',
					icon: '',
				},
				{
					title: 'Share Exciting Information',
					description:
						'Share exciting news with your users and get them excited as well. Milestones, new offices, new employees, upcoming events — this information is worth sharing!',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Floating Buttons',
					description:
						'The Announcements & Updates app offers the ability to create beautiful, floating buttons to improve your website’s design and make navigation easier.',
					imageUrl:
						'https://website-assets.commoninja.com/announcments-and-updates/floating-buttons.png',
				},
				{
					title: 'Notification Badges',
					description:
						'Announcements & Updates features notification badges that can be toggled on or off.  Add a nice reminder to your users that you have important news for them.',
					imageUrl:
						'https://website-assets.commoninja.com/announcments-and-updates/notifications-badges.png',
				},
				{
					title: 'Multiple Skins',
					description:
						'The Announcements & Updates app comes with a variety of beautiful skins that you can choose from so you don’t have to spend much time on extensive customization.',
					imageUrl:
						'https://website-assets.commoninja.com/announcments-and-updates/multiple-skins.png',
				},
				{
					title: 'Full RTL Support',
					description:
						'Announcements & Updates provides full RTL support for those who write from right to left. Make your news accessible to more users from all over the world.',
					imageUrl:
						'https://website-assets.commoninja.com/announcments-and-updates/full-rtl-support.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Announcements & Updates app is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors.',
					imageUrl:
						'https://website-assets.commoninja.com/announcments-and-updates/responsive.png',
				},
				{
					title: 'Easy to Use',
					description:
						'Announcements & Updates app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/announcments-and-updates/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Announcements & Updates app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/announcments-and-updates/custom-css.png',
				},
				{
					title: 'Easy To Embed',
					description:
						'You can embed the Announcements & Updates app on your website easily by copying a single line of code. Announcements & Updates will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question:
						"Can I make the Announcements & Updates app's buttons float?",
					answer:
						'Yes, you can. There are multiple floating options available for you to choose from.',
				},
				{
					question:
						'Can I change the Announcements & Updates app’s text direction?',
					answer:
						'Yes, you can! The Announcements & Updates app features full RTL support.',
				},
				{
					question: 'Can I make the titles linkable?',
					answer:
						'Yes, you can! You can make the title clickable and linkable and direct your users to the relevant pages. ',
				},
				{
					question: 'Is there a search option available?',
					answer:
						'Yes, the Announcements & Updates app features a search option.',
				},
				{
					question:
						'How do I start using Common Ninja’s Announcements & Updates app?',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Announcements & Updates app free?',
					answer:
						'Common Ninja’s Announcements & Updates app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Announcements & Updates app compatible with?',
					answer:
						'Common Ninja’s Announcements & Updates app is compatible with ALL current and future website builders. ',
				},
				{
					question:
						'How do I embed the Announcements & Updates app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Announcements & Updates app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Announcements & Updates app, copy the HTML text that can be found under the 'Add to Website' tab on the app's dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget/option, place it where you want the Announcements & Updates app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Announcements & Updates app GDPR compliant?',
					answer: 'The Announcements & Updates app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use the Announcements & Updates app?',
					answer:
						'No. Using our the Announcements & Updates app is very simple. It comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing the app to your liking, all you need to do is copy the provided code and add it to your website.',
				},
				{
					question: 'Is it hard to embed the Announcements & Updates app',
					answer: 'No. If we can do it, so can you.',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'Free, Fully Customizable & Responsive Announcements & Updates',
				description:
					'Use Common Ninja’s Announcements & Updates app on any website to engage clients, keep them informed & boost conversions!',
				keywords: [
					'announcements',
					'updates',
					'changelog',
					'news',
					'announcements app',
					'announcements plugin',
					'announcements widget',
					'updates plugin',
					'updates widget',
					'updates app',
					'changelog app',
					'changelog plugin',
					'changelog widget',
					'news app',
					'news plugin',
					'news widget',
				],
				image:
					'https://website-assets.commoninja.com/announcments-and-updates/announcments-hero.png',
			},
		},
	},
	{
		name: 'whatsapp_button',
		displayName: 'WhatsApp Chat Button',
		iconClass: 'whatsapp-button',
		buttonText: 'Create WhatsApp Button',
		slug: 'whatsapp-button',
		teaser: 'Use WhatsApp To Communicate, Support & Improve User Experience',
		serviceName: 'whatsappbuttonninja',
		priority: 41,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 3,
		categories: [],
		ribbon: 'New!',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/4413511519889-WhatsApp-Chat-Button',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/whatsapp-button/hero.png',
			},
			keyBenefits: [
				{
					title: 'Offer Support & Helpful Information',
					description:
						'Allow users to contact you for support or for more information that’s not readily available on your website and improve their experience.',
					icon: '',
				},
				{
					title: 'Expedite the Decision-Making Process',
					description:
						'You can expedite your users’ decision-making process by providing quick answers to their questions. The more informed they are, the better decisions they are going to make.',
				},
				{
					title: 'Provide a Personalized Experience',
					description:
						'Make your users feel important and well taken care of by offering them a more personalized communication method.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Multiple Icons',
					description:
						'The app features multiple button icons for you to choose from that can complement your design and deliver the message you want to deliver.',
					imageUrl:
						'https://website-assets.commoninja.com/whatsapp-button/icons.png',
				},
				{
					title: 'Change Chat Background',
					description:
						'The app allows you to change the chat’s background to make it fit your website’s design, make your chat stand out, or reinforce brand awareness via well-crafted company backgrounds.',
					imageUrl:
						'https://website-assets.commoninja.com/whatsapp-button/backgrounds.png',
				},
				{
					title: 'Toggle Time On or Off',
					description:
						'The app features the ability to toggle the messages’ time on or off. Keep it on to show users just how fast your replies are, or remove it completely for a more minimal, visually pleasant chat design.',
					imageUrl:
						'https://website-assets.commoninja.com/whatsapp-button/toggle.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The app features full customization options so you can edit the design to fit your needs — change the colors, fonts, spacings and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/whatsapp-button/customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The app is perfectly responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors.',
					imageUrl:
						'https://website-assets.commoninja.com/whatsapp-button/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you want it with just a few simple clicks. ',
					imageUrl:
						'https://website-assets.commoninja.com/whatsapp-button/easy.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed',
					description:
						'You can embed the app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{ question: 'Can I change my contact name?', answer: 'Yes, you can.' },
				{
					question: 'Can I change my contact status?',
					answer: 'Yes, you can easily do so.',
				},
				{
					question: 'Can I upload a new contact image?',
					answer: 'Yes, you can.',
				},
				{
					question: 'Can I toggle the profile picture on or off? ',
					answer: 'Yes, you can do so from the dashboard.',
				},
				{
					question: 'Can I toggle the current time on or off',
					answer: 'Yes, you can. ',
				},
				{
					question: 'Can I toggle the “Open by Default” option on or off?',
					answer: 'Yes, you can easily do so from the dashboard.',
				},
				{
					question: 'Can I change the button’s text?',
					answer: 'Yes, you can. ',
				},
				{
					question: 'Can I change the messenger’s colors',
					answer: 'Yes, you can easily do so.',
				},
				{
					question: 'Can I change the messenger’s font?',
					answer: 'Yes, you can easily do so from the “Look & Feel” tab.',
				},
				{
					question: 'Can I change the chat’s background?',
					answer: 'Yes, you can.',
				},
				{
					question:
						'How do I start using Common Ninja’s WhatsApp Chat Button app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s WhatsApp Chat Button app free? ',
					answer:
						'Common Ninja’s WhatsApp Chat Button app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s WhatsApp Chat Button app compatible with? ',
					answer:
						'Common Ninja’s WhatsApp Chat Button app is compatible with ALL current and future website builders. ',
				},
				{
					question:
						'How do I embed the WhatsApp Chat Button app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s WhatsApp Chat Button app on your website and the process consists of two steps: <br /><br />1. Once you’ve finished working with the WhatsApp Chat Button app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard. <br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the WhatsApp Chat Button app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the WhatsApp Chat Button app GDPR compliant?',
					answer: 'Yes, the WhatsApp Chat Button app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your WhatsApp Chat Button app? ',
					answer:
						'No. Using our WhatsApp Chat Button app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your WhatsApp Chat Button app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Responsive WhatsApp Chat Button',
				description:
					'Use Common Ninja’s WhatsApp Chat Button app on any website to provide valuable information, quick answers and better user experience.',
				keywords: [''],
				image: 'https://website-assets.commoninja.com/whatsapp-button/hero.png',
			},
		},
	},
	{
		name: 'faq',
		displayName: 'FAQ',
		iconClass: 'faq',
		buttonText: 'Create FAQ',
		slug: 'faq',
		teaser:
			'Provide Answers to Common Questions & Improve User Experience With the FAQ Widget',
		serviceName: 'faqninja',
		priority: 40,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 7,
		categories: [],
		ribbon: 'Popular',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/360004912658-FAQ',
		meta: {
			hero: { imageUrl: 'https://website-assets.commoninja.com/faq/hero.png' },
			keyBenefits: [
				{
					title: 'Improves SEO',
					description:
						'The FAQ app allows you to add more long-tail keywords to your page in an organic manner, thereby enabling you to score higher on search engine result pages.',
					icon: '',
				},
				{
					title: 'Improves User Experience',
					description:
						'With FAQs on your page, you can improve your users’ experience by allowing them to access answers to common questions quickly and easily without the need to spend time waiting for answers.',
					icon: '',
				},
				{
					title: 'Expedites The Decision-Making Process',
					description:
						'The FAQ app removes the need to wait for answers and provides all the information that’s required for quick decision-making.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Search Option',
					description:
						'The FAQ app features a search option that makes it easy to look for questions. If you have lots of FAQs on your page, or if it’s an FAQ dedicated page, then this feature is paramount to enhancing your users’ navigation experience. ',
					imageUrl:
						'https://website-assets.commoninja.com/faq/search-option.png',
				},
				{
					title: 'Behavior Management',
					description:
						'The FAQ app features various behavior modifications like opening multiple questions one at a time, keeping opened ones open, or opening all questions at once — the choice is yours!',
					imageUrl: 'https://website-assets.commoninja.com/faq/vertical.png',
				},
				{
					title: 'Category Separation',
					description:
						'The FAQ app features the ability to divide your questions into separate categories for a better navigation experience. Not only that, but it also allows you to use Emojis for those categories!',
					imageUrl:
						'https://website-assets.commoninja.com/faq/category-separation.png',
				},
				{
					title: 'Multiple Layouts ',
					description:
						'The FAQ app features multiple layouts and allows you to choose the right layout for your website. Classic, clean, bubbles, and more — the choice is yours. ',
					imageUrl:
						'https://website-assets.commoninja.com/faq/multiple-layouts.png',
				},
				{
					title: 'Multiple Skins',
					description:
						'The FAQ app comes with a variety of beautiful skins that you can choose from so you don’t have to spend much time on extensive customization.  ',
					imageUrl:
						'https://website-assets.commoninja.com/faq/multiple-skins.png',
				},
				{
					title: 'Multiple Icons',
					description:
						'The FAQ app features multiple icons for you to choose from. Do you want a downward-facing arrow to open the FAQ’s answer? Or maybe a plus sign? We’ve got the most commonly used icons available for you to choose from.',
					imageUrl:
						'https://website-assets.commoninja.com/faq/multiple-icons.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The FAQ app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/faq/fully-customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The FAQ is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl: 'https://website-assets.commoninja.com/faq/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The FAQ app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl: 'https://website-assets.commoninja.com/faq/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the FAQ app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the FAQ app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I group the FAQs into categories?',
					answer:
						'Yes, you can easily group FAQs under different categories via the “Categories” tab on the dashboard. ',
				},
				{
					question: 'Can I change the FAQ expand icon?',
					answer:
						'Yes, you can easily change the expanded icons via the “Look & Feel” tab on your dashboard.',
				},
				{
					question: 'Can I change the app’s text direction? ',
					answer: 'Yes, you can! The app features full RTL support.',
				},
				{
					question: 'Is there a search option available? ',
					answer:
						'Yes, the app features a search option that you can toggle on or off. ',
				},
				{
					question: 'Can I change the FAQ’s opening behavior?',
					answer:
						'Yes, you can change how the app opens FAQs via the “Settings” tab on the app’s dashboard.',
				},
				{
					question: 'Can I change the layout of the FAQs?',
					answer:
						'Yes, you can! You can do this from within the “Look & Feel” tab on the app’s dashboard. ',
				},
				{
					question: 'How do I start using Common Ninja’s FAQ app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s FAQ app free? ',
					answer:
						'Common Ninja’s FAQ app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s FAQ app compatible with? ',
					answer:
						'Common Ninja’s FAQ app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the FAQ app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s FAQ app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the FAQ app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the FAQ app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the FAQ app GDPR compliant?',
					answer: 'Yes, the FAQ app is GDPR compliant. ',
				},
				{
					question: 'Do I need to be able to code to use your FAQ app? ',
					answer:
						'No. Using our FAQ app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your FAQ app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Fully Responsive FAQ App',
				description:
					'Use Common Ninja’s FAQ app on any website to provide relevant information, improve user experience, improve SEO & expedite decision making.',
				keywords: [
					'faq',
					'faq plugin',
					'faq app',
					'faq widget',
					'faq wordpress',
					'faq wix',
					'faq duda',
					'faq shopify',
					'faq elementor',
					'faq woocommerce',
					'faq bigcommerce',
					'faq webflow',
				],
				image: 'https://website-assets.commoninja.com/faq/faq-hero.png',
			},
		},
	},
	{
		name: 'timeline',
		displayName: 'Timeline',
		iconClass: 'timeline',
		buttonText: 'Create a Timeline',
		slug: 'timeline',
		teaser: 'Create a Timeline',
		serviceName: 'timelineninja',
		priority: 35,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'draft',
		iconPaths: 1,
		categories: [],
		ribbon: '',
		helpCenterLink: '',
		meta: {
			keyBenefits: [{ title: '', description: '', icon: '' }],
			keyFeatures: [{ title: '', description: '', imageUrl: '' }],
			faq: [{ question: '', answer: '' }],
		},
	},
	{
		name: 'telegram_button',
		displayName: 'Telegram Chat Button',
		iconClass: 'telegram-button',
		buttonText: 'Create Telegram Button',
		slug: 'telegram-button',
		teaser: 'Use Telegram To Communicate, Support & Improve User Experience',
		serviceName: 'telegrambuttonninja',
		priority: 31,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 3,
		categories: [],
		ribbon: 'New!',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/4413585928721-Telegram-Chat-Button',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/telegram-button/hero.png',
			},
			keyBenefits: [
				{
					title: 'Provide Support & Helpful Information',
					description:
						'Allow users to contact you for quick support or for more information.',
					icon: '',
				},
				{
					title: 'Expedite the Decision-Making Process',
					description:
						'Expedite your users’ decision-making process by providing quick answers to their questions and removing any barriers that could negatively affect their decisions.',
					icon: '',
				},
				{
					title: 'Provide a Personalized Experience',
					description:
						'Offer a more personalized communication method and make them feel valued and well attended to.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Multiple Icons',
					description:
						'The app features multiple button icons for you to choose from that can complement your design and deliver the message you want to deliver.',
					imageUrl:
						'https://website-assets.commoninja.com/telegram-button/icons.png',
				},
				{
					title: 'Change Chat Background',
					description:
						'The app allows you to change the chat’s background to make it fit your website’s design, make your chat stand out, or reinforce brand awareness via well-crafted company backgrounds.',
					imageUrl:
						'https://website-assets.commoninja.com/telegram-button/backgrounds.png',
				},
				{
					title: 'Toggle Time On or Off',
					description:
						'The app features the ability to toggle the messages’ time on or off. Keep it on to show users just how fast your replies are, or remove it completely for a more minimal, visually pleasant chat design.',
					imageUrl:
						'https://website-assets.commoninja.com/telegram-button/toggle.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The app features full customization options so you can edit the design to fit your needs — change the colors, fonts, spacings and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/telegram-button/customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The app is perfectly responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors.',
					imageUrl:
						'https://website-assets.commoninja.com/telegram-button/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you want it with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/telegram-button/easy.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{ question: 'Can I change my contact name?', answer: 'Yes, you can.' },
				{
					question: 'Can I change my contact status?',
					answer: 'Yes, you can easily do so.',
				},
				{
					question: 'Can I upload a new contact image?',
					answer: 'Yes, you can.',
				},
				{
					question: 'Can I toggle the profile picture on or off? ',
					answer: 'Yes, you can do so from the dashboard.',
				},
				{
					question: 'Can I toggle the current time on or off',
					answer: 'Yes, you can. ',
				},
				{
					question: 'Can I toggle the “Open by Default” option on or off?',
					answer: 'Yes, you can easily do so from the dashboard.',
				},
				{
					question: 'Can I change the button’s text?',
					answer: 'Yes, you can. ',
				},
				{
					question: 'Can I change the messenger’s colors',
					answer: 'Yes, you can easily do so.',
				},
				{
					question: 'Can I change the messenger’s font?',
					answer: 'Yes, you can easily do so from the “Look & Feel” tab.',
				},
				{
					question: 'Can I change the chat’s background?',
					answer: 'Yes, you can.',
				},
				{
					question:
						'How do I start using Common Ninja’s WhatsApp Chat Button app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s WhatsApp Chat Button app free? ',
					answer:
						'Common Ninja’s WhatsApp Chat Button app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s WhatsApp Chat Button app compatible with? ',
					answer:
						'Common Ninja’s WhatsApp Chat Button app is compatible with ALL current and future website builders. ',
				},
				{
					question:
						'How do I embed the WhatsApp Chat Button app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s WhatsApp Chat Button app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the WhatsApp Chat Button app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard. \n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the WhatsApp Chat Button app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the WhatsApp Chat Button app GDPR compliant?',
					answer: 'Yes, the WhatsApp Chat Button app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your WhatsApp Chat Button app? ',
					answer:
						'No. Using our WhatsApp Chat Button app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. \n\n',
				},
				{
					question: 'Is it hard to embed your WhatsApp Chat Button app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Responsive Telegram Chat Button',
				description:
					'Use Common Ninja’s Telegram Chat Button app on any website to provide valuable information, quick answers and improve user experience.',
				keywords: [''],
				image: 'https://website-assets.commoninja.com/telegram-button/hero.png',
			},
		},
	},
	{
		name: 'audio_player',
		displayName: 'Audio Player',
		iconClass: 'audio-player',
		buttonText: 'Create an Audio Player',
		slug: 'audio-player',
		teaser: 'Enrich & Promote Your Content With an Audio Player',
		serviceName: 'audioplayerninja',
		priority: 31,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 3,
		categories: [],
		ribbon: 'New',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/4410942960913-Audio-Player',
		meta: {
			hero: {
				imageUrl: 'https://website-assets.commoninja.com/audio-player/hero.png',
			},
			keyBenefits: [
				{
					title: 'Promote Yourself',
					description:
						'Use this powerful audio player tool to add your music, songs, podcasts, or other equally entertaining audio projects and make your projects accessible to a wider audience! ',
					icon: '',
				},
				{
					title: 'Enrich Your Content ',
					description:
						'Add more variety to your content and cater to the different needs of your audience. Add read-alongs for children to follow stories, create podcasts, or add accompanying music to your text.',
					icon: '',
				},
				{
					title: 'Improve User Experience',
					description:
						'You can improve your users’ experience by making certain audio files available. You can, for example, create audio versions of your well-researched, highly informative, and exceptionally entertaining text, upload it via the app and allow visually impaired users to enjoy it. Or, make it available for those who are on the go and can’t sit and read your long text. ',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Multiple Audio Sources',
					description:
						'The Audio Player app features the ability to add audio from various sources — be it MP3s or links to audio and video hosting websites like YouTube, Vimeo, SoundCloud and more!  ',
					imageUrl:
						'https://website-assets.commoninja.com/audio-player/multiple-audio-sources.png',
				},
				{
					title: 'Shuffle',
					description:
						'The Audio Player comes with the shuffle option that will enable your users to listen to your audio in random order.',
					imageUrl:
						'https://website-assets.commoninja.com/audio-player/shuffle.png',
				},
				{
					title: 'Playlist View',
					description:
						'The Audio Player features the ability to toggle and customize the playlist view. You can customize the playlist and make it complement your style, or, alternatively, use the minimal version to create a more aesthetically pleasing experience.',
					imageUrl:
						'https://website-assets.commoninja.com/audio-player/playlist-view.png',
				},
				{
					title: 'Multiple Layouts',
					description:
						'The Audio Player app features several layouts for you to choose from like the mini-player or the enlarged thumbnail — choose what’s best for you! ',
					imageUrl:
						'https://website-assets.commoninja.com/audio-player/multiple-layouts.png',
				},
				{
					title: 'Position ',
					description:
						'You can easily change the position of the Audio Player via the position option. Inline? Top right? Bottom left? Really, the choice is yours.',
					imageUrl:
						'https://website-assets.commoninja.com/audio-player/position.png',
				},
				{
					title: 'Multiple Skins',
					description:
						'The Audio Player comes with a variety of beautiful skins that you can choose from so you don’t have to spend much time on extensive customization.',
					imageUrl:
						'https://website-assets.commoninja.com/audio-player/multiple-skins.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Audio Player app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/audio-player/fully-cutsomizble.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Audio Player is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/audio-player/responsive.png',
				},
				{
					title: 'Easy to Use',
					description:
						'The Audio Player app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/audio-player/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Audio Player and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/audio-player/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Audio Player on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{ question: 'Can I link to any audio file? ', answer: 'Yes, you can.' },
				{
					question: 'Can I upload any audio file?',
					answer: 'Yes, so long as the size does not exceed 10MB.',
				},
				{
					question: 'Can I change the layout style? ',
					answer:
						'Yes, you can easily do so from within the “Look & Feel” tab on your dashboard.',
				},
				{
					question: 'Can I change the audio player’s position?',
					answer:
						'Yes, you can easily do so from within the “Look & Feel” tab on your dashboard.',
				},
				{
					question: 'Can I change the audio player’s skin?',
					answer:
						'Yes, you can easily do so from within the “Look & Feel” tab on your dashboard.',
				},
				{
					question: 'Can toggle the shuffle button on or off?',
					answer:
						'Yes, you can easily do so from within the “Settings” tab on your dashboard.',
				},
				{
					question: 'Can I toggle the playlist’s song image on or off?',
					answer:
						'Yes, you can easily do so from within the “Settings” tab on your dashboard.',
				},
				{
					question: 'Can I toggle the player’s time on or off?',
					answer:
						'Yes, you can easily do so from within the “Settings” tab on your dashboard.',
				},
				{
					question: 'Can I toggle the playlist’s time on or off?',
					answer:
						'Yes, you can easily do so from within the “Settings” tab on your dashboard.',
				},
				{
					question: 'How do I start using Common Ninja’s Audio Player app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Audio Player app free? ',
					answer:
						'Common Ninja’s Audio Player app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Audio Player app compatible with? ',
					answer:
						'Common Ninja’s Audio Player app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the Audio Player app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Audio Player app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Audio Player app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Audio Player app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Audio Player app GDPR compliant?',
					answer: 'Yes, the Audio Player app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Audio Player app? ',
					answer:
						'No. Using our Audio Player app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Audio Player app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Fully Responsive Audio Player App',
				description:
					'Start using Common Ninja’s Audio Player app on any website to improve user experience, enhance accessibility & promote your audio products.',
				keywords: [
					'audio player',
					'mp3 player',
					'podcast player',
					'music player',
					'audio player app',
					'audio player widget',
					'audio player plugin',
					'mp3 player app',
					'mp3 player plugin',
					'mp3 player widget',
					'podcast player app',
					'podcast player plugin',
					'podcast player widget',
					'music player app',
					'music player widget',
					'music player plugin',
				],
				image:
					'https://website-assets.commoninja.com/audio-player/audio-player-hero.png',
			},
		},
	},
	{
		name: 'pricing_table',
		displayName: 'Pricing Tables',
		iconClass: 'pricing-tables',
		buttonText: 'Create a Table',
		slug: 'pricing-tables',
		teaser:
			'Convert Users With Stunning, Detail-Rich & Fully Responsive Pricing Tables',
		serviceName: 'pricerninja',
		priority: 30,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 6,
		categories: [],
		ribbon: '',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/115001053213--Pricing-Tables',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/pricing-table/hero.png',
			},
			keyBenefits: [
				{
					title: 'Easy Access To Pricing Information ',
					description:
						'The Pricing Tables app enables you to offer your customers relevant information regarding what a pricing plan offers and how much it costs. With this information, they will be able to make better decisions quicker.',
					icon: '',
				},
				{
					title: 'Easy, Visual Comparison Between Plans',
					description:
						'The Pricing Tables app allows your users to visually compare the different plans you offer and the features each plan offers. They will be able to find the right plan for them easily. ',
					icon: '',
				},
				{
					title: 'Better Conversions',
					description:
						'With a well-crafted Pricing Table, you can nudge your customers towards choosing the plan you most desire them to choose by highlighting its benefits, features and by making it more visible. ',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Mobile Behavior',
					description:
						'The Pricing Tables app features two mobile behavior modes — Flexible and Scroll. Choose the one that’s most appropriate for you and your pricing table.',
					imageUrl:
						'https://website-assets.commoninja.com/pricing-table/mobile-behavior.png',
				},
				{
					title: 'Animated Tables',
					description:
						'The Pricing Tables app features an animated mode that allows you to add some animation to your static page and make it more appealing.',
					imageUrl:
						'https://website-assets.commoninja.com/pricing-table/animated-table.png',
				},
				{
					title: 'Billing Cycles',
					description:
						'Pricing Tables enables you to add as many billing cycles as you want and edit them to your liking. Improve your users’ experience with intuitive navigation! ',
					imageUrl:
						'https://website-assets.commoninja.com/pricing-table/billing-cycles.png',
				},
				{
					title: 'Ribbons',
					description:
						'The Pricing Tables app enables you to add a customizable ribbon to your table to make the desired plan (from your point of view) stand out and be immediately noticeable. ',
					imageUrl:
						'https://website-assets.commoninja.com/pricing-table/ribbons.png',
				},
				{
					title: 'Large Selection of Skins',
					description:
						'The Pricing Tables app features a large selection of beautiful skins for you to choose from. Don’t waste time on customization and start using the app straight away. ',
					imageUrl:
						'https://website-assets.commoninja.com/pricing-table/large-selection-skins.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Pricing Tables app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/pricing-table/fully-customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Pricing Tables app is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors.',
					imageUrl:
						'https://website-assets.commoninja.com/pricing-table/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Pricing Tables app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/pricing-table/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Pricing Tables app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Pricing Tables app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I export my pricing table?',
					answer:
						'Yes, you can easily export the pricing table via the “Export” button at the top left corner of the app’s editor. ',
				},
				{
					question: 'Can I change the app’s mobile behavior?',
					answer:
						'Yes, you can easily change the app’s mobile behavior via the “Settings” tab.',
				},
				{
					question: 'Can I animate the pricing table?',
					answer:
						'Yes, you can easily animate the pricing table via the “Settings” tab on the app’s dashboard.',
				},
				{
					question: 'Can I add different billing cycles? ',
					answer:
						'Yes, you can easily add different billing cycles to your pricing table. ',
				},
				{
					question: 'How do I start using Common Ninja’s Pricing Tables app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Pricing Tables app free? ',
					answer:
						'Common Ninja’s Pricing Tables app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Pricing Tables app compatible with? ',
					answer:
						'Common Ninja’s Pricing Tables app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the Pricing Tables app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Pricing Tables app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Pricing Tables app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Pricing Tables app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Pricing Tables app GDPR compliant?',
					answer: 'Yes, the Pricing Tables app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Pricing Tables app? ',
					answer:
						'No. Using our Pricing Tables app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Pricing Tables app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'Free, Fully Customizable & Fully Responsive Pricing Tables',
				description:
					'Use Common Ninja’s Pricing Tables app on any website to increase conversions by providing easy access to pricing info & plan comparisons.',
				keywords: [
					'pricing tables',
					'pricing tables app',
					'pricing tables plugin',
					'pricing tables widget',
					'pricing tables wordpress',
					'pricing tables wix',
					'pricing tables duda',
					'pricing tables shopify',
					'pricing tables bigcommerce',
					'pricing tables webflow',
				],
				image:
					'https://website-assets.commoninja.com/pricing-table/pricing-hero.png',
			},
		},
	},
	{
		name: 'messenger_button',
		displayName: 'Messenger Chat Button',
		iconClass: 'messenger-button',
		buttonText: 'Create Messenger Button',
		slug: 'messenger-button',
		teaser: 'Use Messenger To Communicate, Support & Improve User Experience',
		serviceName: 'messengerbuttonninja',
		priority: 25,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 4,
		categories: [],
		ribbon: 'New!',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/4413572384017-Messenger-Chat-Button',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/messenger-button/hero.png',
			},
			keyBenefits: [
				{
					title: 'Offer Support & Helpful Information',
					description:
						'Allow users to contact you for support or for more information that’s not readily available on your website and improve their experience. ',
					icon: '',
				},
				{
					title: 'Expedite the Decision-Making Process',
					description:
						'You can expedite your users’ decision-making process by providing quick answers to their questions. The more informed they are, the better decisions they are going to make. ',
					icon: '',
				},
				{
					title: 'Provide a Personalized Experience',
					description:
						'Make your users feel important and well taken care of by offering them a more personalized communication method. ',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Multiple Icons',
					description:
						'The Messenger Chat Button app features multiple button icons for you to choose from that can complement your design and deliver the message you want to deliver.  ',
					imageUrl:
						'https://website-assets.commoninja.com/messenger-button/icons.png',
				},
				{
					title: 'Toggle Time On or Off',
					description:
						'The Messenger Chat Button features the ability to toggle the messages’ time on or off. Keep it on to show users just how fast your replies are, or remove it completely for a more minimal, visually pleasant chat design. ',
					imageUrl:
						'https://website-assets.commoninja.com/messenger-button/toggle.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Messenger Chat Button features full customization options so you can edit the design to fit your needs — change the colors, fonts, spacings and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/messenger-button/customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Messenger Chat Button app is perfectly responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/messenger-button/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Messenger Chat Button app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.  ',
					imageUrl:
						'https://website-assets.commoninja.com/messenger-button/easy.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Messenger Chat Button app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Messenger Chat Button app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{ question: 'Can I change my contact name?', answer: 'Yes, you can.' },
				{
					question: 'Can I change my contact status?',
					answer: 'Yes, you can easily do so.',
				},
				{
					question: 'Can I upload a new contact image?',
					answer: 'Yes, you can.',
				},
				{
					question: 'Can I toggle the profile picture on or off? ',
					answer: 'Yes, you can do so from the dashboard.',
				},
				{
					question: 'Can I toggle the current time on or off',
					answer: 'Yes, you can. ',
				},
				{
					question: 'Can I toggle the “Open by Default” option on or off?',
					answer: 'Yes, you can easily do so from the dashboard.',
				},
				{
					question: 'Can I change the button’s text?',
					answer: 'Yes, you can. ',
				},
				{
					question: 'Can I change the messenger’s colors',
					answer: 'Yes, you can easily do so.',
				},
				{
					question: 'Can I change the messenger’s font?',
					answer: 'Yes, you can easily do so from the “Look & Feel” tab.',
				},
				{
					question: 'Can I change the chat’s background?',
					answer: 'Yes, you can.',
				},
				{
					question:
						'How do I start using Common Ninja’s Messenger Chat Button app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Messenger Chat Button app free? ',
					answer:
						'Common Ninja’s Messenger Chat Button app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Messenger Chat Button app compatible with? ',
					answer:
						'Common Ninja’s Messenger Chat Button app is compatible with ALL current and future website builders. ',
				},
				{
					question:
						'How do I embed the Messenger Chat Button app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Messenger Chat Button app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Messenger Chat Button app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard. \n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Messenger Chat Button app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Messenger Chat Button app GDPR compliant?',
					answer: 'Yes, the Messenger Chat Button app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Messenger Chat Button app? ',
					answer:
						'No. Using our Messenger Chat Button app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website.',
				},
				{
					question: 'Is it hard to embed your Messenger Chat Button app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Responsive Messenger Chat Button',
				description:
					'Use Common Ninja’s Messenger Chat Button app on any website to provide valuable information, quick answers and better user experience.',
				keywords: [''],
				image:
					'https://website-assets.commoninja.com/messenger-button/hero.png',
			},
		},
	},
	{
		name: 'countdown_bar',
		displayName: 'Countdown Bar',
		iconClass: 'countdown-bar',
		buttonText: 'Create Countdown Bar',
		slug: 'countdown-bar',
		teaser: 'Establish Urgency & Boost Conversions With a Countdown Bar',
		serviceName: 'countdownbarninja',
		priority: 25,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 6,
		categories: [],
		ribbon: '🔥 Hot',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/4402846881425-Countdown-Promo-Bar',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/countdownbar/countdown-hero.png',
			},
			keyBenefits: [
				{
					title: 'Create a Sense of Urgency To Increase Conversions',
					description:
						'With the Countdown Bar app, you can create a sense of urgency and encourage your users to make a quick decision for fear of missing out.',
					icon: '',
				},
				{
					title: 'Make Your Sale Known & Generate Interest',
					description:
						'The Countdown Bar will make your sale visible and known to site visitors and help generate interest and encourage users to investigate further.',
					icon: '',
				},
				{
					title: 'Promote Your Other Products & Services',
					description:
						'The Countdown Bar app will draw more users to your website and will open them up to your other products and services. ',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Automatic Timer Hiding at Sale’s End',
					description:
						'The Countdown Bar app features optional automation that allows you to set the timer to disappear after completion so as to not confuse new visitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/countdownbar/timer-hiding.png',
				},
				{
					title: 'Sticky Timer',
					description:
						'The Countdown Bar features a sticky timer that will stay in a fixed position regardless of how far down the page you scroll. ',
					imageUrl:
						'https://website-assets.commoninja.com/countdownbar/sticky-timer.png',
				},
				{
					title: 'Over 20 Beautiful Skins ',
					description:
						'The Countdown Bar app features a beautiful selection of 20 skins including thematic and seasonal skins that you can use for those holiday promotions, Black Friday promotions, Cyber Monday promotions and other, similar, seasonal promotions.',
					imageUrl:
						'https://website-assets.commoninja.com/countdownbar/nice-skins.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Countdown Bar app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/countdownbar/fully-customzible.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Countdown Bar is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/countdownbar/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Countdown Bar app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/countdownbar/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Countdown Bar app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed',
					description:
						'You can embed the Countdown Bar app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I change the app’s timezone?',
					answer:
						'Yes, you can easily change the app’s timezone via the “Content” tab on the app’s dashboard. ',
				},
				{
					question: 'Do you have seasonal or holiday skins?',
					answer:
						'Yes, we offer a beautiful selection of seasonal and holiday skins that you can use. ',
				},
				{
					question: 'Can I change the app’s text direction? ',
					answer: 'Yes, you can! The app features full RTL support.',
				},
				{
					question:
						'Can I set the bar to hide automatically when the countdown is finished?',
					answer:
						'Yes, you can set that bar to disappear when the sale ends, so as not to confuse your users.',
				},
				{
					question: 'Can I make the countdown bar sticky?',
					answer:
						'Yes, you can make the countdown sticky, so it will follow the users, regardless of how far they scroll. ',
				},
				{
					question: 'How do I start using Common Ninja’s Countdown Bar app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Countdown Bar app free? ',
					answer:
						'Common Ninja’s Countdown Bar app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Countdown Bar app compatible with? ',
					answer:
						'Common Ninja’s Countdown Bar app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the Countdown Bar app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Countdown Bar app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Countdown Bar app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Countdown Bar app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Countdown Bar app GDPR compliant?',
					answer: 'Yes, the Countdown Bar app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Countdown Bar app? ',
					answer:
						'No. Using our Countdown Bar app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Countdown Bar app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Fully Responsive Countdown Bar',
				description:
					'Use Common Ninja’s Countdown Bar app on any website to create a sense of urgency, generate interest & increase conversions.',
				keywords: [
					'countdown bar',
					'countdown bar app',
					'countdown bar plugin',
					'countdown bar widget',
					'countdown bar wordpress',
					'countdown bar wix',
					'countdown bar duda',
					'countdown bar shopify',
					'countdown bar bigcommerce',
					'countdown bar elementor',
					'countdown bar woocommerce',
				],
				image:
					'https://website-assets.commoninja.com/countdownbar/countdown-hero.png',
			},
		},
	},
	{
		name: 'pdf_gallery',
		displayName: 'PDF Gallery',
		iconClass: 'pdf-gallery',
		buttonText: 'Create PDF Gallery',
		slug: 'pdf-gallery',
		teaser:
			'Offer Valuable Information and Promote Your Products With a PDF Gallery',
		serviceName: 'pdfembedninja',
		priority: 22,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 8,
		categories: [],
		ribbon: '',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/4408021360529-PDF-Gallery',
		meta: {
			hero: { imageUrl: 'https://website-assets.commoninja.com/pdf/hero.png' },
			keyBenefits: [
				{
					title: 'Provide Easy Access to Relevant Information',
					description:
						'Give your users the chance to read more about your products and services. Offer them catalogs, brochures and menus for a better understanding of what you are offering.',
					icon: '',
				},
				{
					title: 'Promote Your Products',
					description:
						'Allow your users to access your PDF products (like ebooks, magazines, journals, etc.) in a visually appealing way with an easy option to download them.',
					icon: '',
				},
				{
					title: 'Offer Support for Better User Experience',
					description:
						'Support your users with technical documentation, support articles and manuals that they can download and view offline.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Multiple Layouts',
					description:
						'The PDF Gallery app comes with five layout options that you can choose from — Embed, Gallery, List, Designed List and Grid. This selection of layout options will allow you to choose the best design for your brand and users. ',
					imageUrl: 'https://website-assets.commoninja.com/pdf/layouts.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The PDF Gallery app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/pdf/fully-customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The PDF Gallery is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl: 'https://website-assets.commoninja.com/pdf/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The PDF Gallery app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl: 'https://website-assets.commoninja.com/pdf/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the PDF Gallery app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the PDF Gallery app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I add thumbnails to replace the default image?',
					answer:
						'Yes, you can add custom thumbnails to replace the default PDF image. ',
				},
				{
					question: 'Can I add a download button? ',
					answer:
						'Yes, you can easily add a download button via the “Settings” tab on the app’s dashboard.',
				},
				{
					question: 'How do I start using Common Ninja’s PDF Gallery app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s PDF Gallery app free? ',
					answer:
						'Common Ninja’s PDF Gallery app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s PDF Gallery app compatible with? ',
					answer:
						'Common Ninja’s PDF Gallery app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the PDF Gallery app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s PDF Gallery app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the PDF Gallery app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the PDF Gallery app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the PDF Gallery app GDPR compliant?',
					answer: 'Yes, the PDF Gallery app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your PDF Gallery app? ',
					answer:
						'No. Using our PDF Gallery app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your PDF Gallery app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Fully Responsive PDF Gallery',
				description:
					'Use Common Ninja’s PDF Gallery app on any website to promote your products & provide easy access to information for better user experience.',
				keywords: [
					'pdf gallery',
					'pdf gallery plugin',
					'pdf gallery app',
					'pdf gallery widget',
					'pdf gallery wordpress',
					'pdf gallery wix',
					'pdf gallery elementor',
					'pdf gallery shopify',
					'pdf gallery duda',
					'pdf gallery woocommerce',
					'pdf gallery webflow',
				],
				image: 'https://website-assets.commoninja.com/pdf/pdf-hero.png',
			},
		},
	},
	{
		name: 'feed',
		displayName: 'Social Media & RSS Feeds',
		iconClass: 'social-feeds',
		buttonText: 'Create a Feed',
		slug: 'feeds',
		teaser:
			'Increase Engagements & Social Media Presence With the Feeds Widget',
		serviceName: 'feederninja',
		priority: 20,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 9,
		categories: [],
		ribbon: '',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/115001053193-RSS-Social-Media-Feeds',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/social-media-rss/hero.png',
			},
			keyBenefits: [
				{
					title: 'Captivate Visitors',
					description:
						'A visually attractive feed will keep your visitors glued to the screen and provide them with a pleasant user experience, a dose of inspiration and a sense of adventure. They’ll be wanting to return to this experience time and again!',
					icon: '',
				},
				{
					title: 'Aggregate Valuable Information',
					description:
						'With the Social Media & RSS Feeds app, you can aggregate RSS information from various authoritative sources into one page and offer your users valuable information to which they’d want to return to. ',
					icon: '',
				},
				{
					title: 'Increase Social Media Presence',
					description:
						'With a stunning social media feed on your website, you can encourage users to start following you thereby increasing engagement and improving your social media presence. ',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Multiple Feed Modes',
					description:
						'The Social Media & RSS Feeds app features 3 feed modes — Mixed, Tabs, and News Ticker. These will allow you to customize the app to show the feeds exactly the way you want. One single feed? Separate feeds? The choice is yours! ',
					imageUrl:
						'https://website-assets.commoninja.com/social-media-rss/multiple-feed-modes.png',
				},
				{
					title: 'Full Control Over Feed Content',
					description:
						'Get full control over the content you want to display in your stream. Filter unwanted posts and edit the post titles to fit your needs. ',
					imageUrl:
						'https://website-assets.commoninja.com/social-media-rss/full-control.png',
				},
				{
					title: 'Auto-Refresh',
					description:
						'Social Media & RSS Feeds includes the auto-refresh feature which will keep your feed content automatically up-to-date.',
					imageUrl:
						'https://website-assets.commoninja.com/social-media-rss/auto-refresh.png',
				},
				{
					title: 'Multiple Skins & Layouts',
					description:
						'The Social Media & RSS Feeds app features multiple beautiful skins and layouts that you can select to customize your feed, make it stand out and provide a more pleasant user experience. ',
					imageUrl:
						'https://website-assets.commoninja.com/social-media-rss/multiple-skins-layout.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Social Media & RSS Feeds app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/social-media-rss/fully-customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Social Media & RSS Feeds app is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors.',
					imageUrl:
						'https://website-assets.commoninja.com/social-media-rss/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Social Media & RSS Feeds app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/social-media-rss/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Social Media & RSS Feeds app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Social Media & RSS Feeds app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I change the app’s layout?',
					answer:
						'Yes, the app comes equipped with a selection of layouts from which you can choose the one that fits you the best. ',
				},
				{
					question: 'Can I change the app’s text direction? ',
					answer: 'Yes, you can! The app features full RTL support.',
				},
				{
					question: 'Can I add an auto-refresh function? ',
					answer:
						'Yes, the app comes with an auto-refresh option that you can toggle on or off.',
				},
				{
					question: 'Can I add ticker animation? ',
					answer:
						'Yes, you can easily add ticker animation via the “Settings” tab on the app’s dashboard.',
				},
				{
					question:
						'How do I start using Common Ninja’s Social Media & RSS Feeds app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Social Media & RSS Feeds app free? ',
					answer:
						'Common Ninja’s Social Media & RSS Feeds app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Social Media & RSS Feeds app compatible with? ',
					answer:
						'Common Ninja’s Social Media & RSS Feeds app is compatible with ALL current and future website builders. ',
				},
				{
					question:
						'How do I embed the Social Media & RSS Feeds app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Social Media & RSS Feeds app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Social Media & RSS Feeds app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Social Media & RSS Feeds app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Social Media & RSS Feeds app GDPR compliant?',
					answer: 'Yes, the Social Media & RSS Feeds app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Social Media & RSS Feeds app? ',
					answer:
						'No. Using our Social Media & RSS Feeds app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Social Media & RSS Feeds app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'Free, Fully Customizable & Responsive Social Media & RSS Feeds',
				description:
					'Use Common Ninja’s Social Media & RSS Feeds app on any website to captivate visitors, increase engagement & boost social media presence.',
				keywords: [
					'social media & rss feeds',
					'social media feeds',
					'rss feeds',
					'social media feeds app',
					'social media feeds plugin',
					'social media feeds widget',
					'rss feeds app',
					'rss feeds plugin',
					'rss feeds widget',
					'social media and rss feeds app',
					'social media and rss feeds plugin',
					'social media and rss feeds widget',
					'social media feeds wordpress',
					'social media feeds wix',
					'social media feeds shopify',
					'social media feeds duda',
					'social media feeds webflow',
					'rss feeds wordpress',
					'rss feeds wix',
					'rss feeds duda',
					'rss feeds shopify',
					'rss feeds webflow',
				],
				image:
					'https://website-assets.commoninja.com/social-media-rss/social-hero.png',
			},
		},
	},
	{
		name: 'business_hours',
		displayName: 'Business Hours',
		iconClass: 'business-hours',
		buttonText: 'Create Business Hours Widget',
		slug: 'business-hours',
		teaser: 'Use Business Hours To Boost User Experience With Helpful Details',
		serviceName: 'businesshoursninja',
		priority: 13,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 13,
		categories: [],
		ribbon: 'New',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/4414802234385-Business-Hours',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/business-hours/hero.png',
			},
			keyBenefits: [
				{
					title: 'Provide Easy Access to Information',
					description:
						'The Business Hours app enables you to provide your users with easy access to important information about your business. This will save them time and improve their experience. ',
					icon: '',
				},
				{
					title: 'Display Professionalism',
					description:
						'A business hours table displays professionalism and is a necessary element to have on any business page — without it, you’ll be sending the wrong message to your users.',
					icon: '',
				},
				{
					title: 'Enhance Design',
					description:
						'A business hours table can improve your website’s design by complementing it or, on the contrary, contrasting it.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Multiple Working Hours Per Day',
					description:
						'The Business Hours app enables you to add several working hours to each day (this feature is especially useful if your offices close for lunch and continue to work afterward). ',
					imageUrl:
						'https://website-assets.commoninja.com/business-hours/hours.png',
				},
				{
					title: 'Advanced Time Editing',
					description:
						'The Business Hours app allows you to choose a timezone as well as the time format you wish and adapt the time elements to fit your country’s standards.  ',
					imageUrl:
						'https://website-assets.commoninja.com/business-hours/time-editing.png',
				},
				{
					title: 'Notification Bar ',
					description:
						'The Business Hours app features a notification bar that can be used to provide more information in an eye-catching way for better user experience.',
					imageUrl:
						'https://website-assets.commoninja.com/business-hours/notification-bar.png',
				},
				{
					title: 'Automatic Status Box',
					description:
						'The Business Hours app features an automatic status box which provides an automated message regarding your current status, based on the working hours you’ve defined and the timezone you’ve chosen.',
					imageUrl:
						'https://website-assets.commoninja.com/business-hours/statusbox.png',
				},
				{
					title: 'Two Layout Styles',
					description:
						'The Business Hours app features two layout styles from which you can choose — the default and most commonly used style with the day on the left and the business hours on the right, and the Column style, which puts the hours in a column-like design.',
					imageUrl:
						'https://website-assets.commoninja.com/business-hours/layouts.png',
				},
				{
					title: 'Easy Work Day Toggle',
					description:
						'The Business Hours app features the ability to easily toggle between working days and rest days. This is especially useful to businesses whose working days change periodically. ',
					imageUrl:
						'https://website-assets.commoninja.com/business-hours/work-day.png',
				},
				{
					title: 'First Day of the Week',
					description:
						'The Business Hours app features the ability to change the first day of the week, enabling users from other parts of the world, where the first day of the week is not Monday, to customize the table to fit their needs.',
					imageUrl:
						'https://website-assets.commoninja.com/business-hours/first-day.png',
				},
				{
					title: 'Multiple Skins ',
					description:
						'The Business Hours app features multiple lovely skins for you to choose from. These skins will complement most design color schemes and will enable you to quickly and effortlessly set up a beautiful business hours table.',
					imageUrl:
						'https://website-assets.commoninja.com/business-hours/skins.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Business Hours app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/business-hours/customizable.png',
				},
				{
					title: 'Fully Responsive',
					description:
						'The Business Hours app is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/business-hours/responsive.png',
				},
			],
			faq: [
				{
					question: 'Can I change the first day of the week?',
					answer: 'Yes, you can easily do so from the dashboard. ',
				},
				{
					question: 'Can I change the time format?',
					answer: 'Yes, you can do so from the app’s dashboard.',
				},
				{
					question: "Can I change the app's layout?",
					answer:
						'Yes, the app comes with two layout options that you can choose from.',
				},
				{
					question: 'Can I make the border rounder?',
					answer:
						'Yes, you can easily play with the border’s radius and make it rounder.',
				},
				{
					question: 'Can I highlight the current day? ',
					answer:
						'Yes, you can easily add text to show which day is the current day.',
				},
				{
					question: 'Can I select a timezone?',
					answer:
						'Yes, you can select the timezone that’s most appropriate for you.',
				},
				{
					question: 'Can I split the day into several working hours?',
					answer: 'Yes, you can split the working day’s hours as you see fit.',
				},
				{
					question: 'Can I add a notification bar? ',
					answer: 'Yes, you can. ',
				},
				{
					question: 'How do I start using Common Ninja’s Business Hours app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Business Hours app free? ',
					answer:
						'Common Ninja’s Business Hours app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Business Hours app compatible with? ',
					answer:
						'Common Ninja’s Business Hours app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the Business Hours app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Business Hours app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Business Hours app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard. \n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Business Hours app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Business Hours app GDPR compliant?',
					answer: 'Yes, the Business Hours app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Business Hours app? ',
					answer:
						'No. Using our Business Hours app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. \n\n',
				},
				{
					question: 'Is it hard to embed your Business Hours app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title: 'A Free, Fully Customizable & Responsive Business Hours Widget',
				description:
					'Use Common Ninja’s Business Hours app on any website to provide easy access to information, display professionalism and enhance its design.',
				keywords: [''],
				image: 'https://website-assets.commoninja.com/business-hours/hero.png',
			},
		},
	},
	{
		name: 'logo_showcase',
		displayName: 'Logo Showcase',
		iconClass: 'logo-showcase',
		buttonText: 'Create a Logo Showcase',
		slug: 'logo-showcase',
		teaser:
			'Establish Credibility With a Logo Showcase of Clients and Partners',
		serviceName: 'logoninja',
		priority: 12,
		developerId: '911cedfc-6680-41a3-90b5-98bc1ce25596',
		status: 'published',
		iconPaths: 7,
		categories: [],
		ribbon: 'New',
		helpCenterLink:
			'https://help.commoninja.com/hc/en-us/sections/4408734899473-Logo-Showcase',
		meta: {
			hero: {
				imageUrl:
					'https://website-assets.commoninja.com/logo-showcase/hero.png',
			},
			keyBenefits: [
				{
					title: 'Establish Credibility And Trust',
					description:
						'Showcasing logos of companies that work with you and trust you is an easy way to elicit trust in potential new customers and establish your company’s credibility.',
					icon: '',
				},
				{
					title: 'Grab Attention',
					description:
						'By showcasing partners, clients, and other companies that you are working with, you give a quick and clear indication to your readers as to what industry your company is in, thereby reinforcing your website’s message and design.',
					icon: '',
				},
				{
					title: 'Enhance Design',
					description:
						'With Logo Showcase, you can improve your design and make it more pleasing to the reader’s eye. It can serve as a break between paragraphs and sections and can be used to create contrasting or complementing color schemes.',
					icon: '',
				},
			],
			keyFeatures: [
				{
					title: 'Hover Effects ',
					description:
						'The Logo Showcase app features the ability to pause on hover and add various effects like scale, shadow, opacity, highlight and more!',
					imageUrl:
						'https://website-assets.commoninja.com/logo-showcase/hover.png',
				},
				{
					title: 'Carousel Direction & Speed ',
					description:
						'You can customize the carousel layout any way you want to including changing its direction and speed!',
					imageUrl:
						'https://website-assets.commoninja.com/logo-showcase/carousel.png',
				},
				{
					title: 'Clickable Logos',
					description:
						'The Logo Showcase app features the ability to make logos clickable for easier navigation. ',
					imageUrl:
						'https://website-assets.commoninja.com/logo-showcase/clickable-logos.png',
				},
				{
					title: 'Two Layout Options',
					description:
						'The Logo Showcase app comes with two layout options — a carousel and a grid, that will enable you to select the best design for your brand. ',
					imageUrl:
						'https://website-assets.commoninja.com/logo-showcase/two-layout-optins.png',
				},
				{
					title: 'Fully Customizable',
					description:
						'The Logo Showcase app features full customization options so you can edit the design to fit your needs. Change the colors, the fonts, the spacing and anything else!',
					imageUrl:
						'https://website-assets.commoninja.com/logo-showcase/fully-customizable.png',
				},
				{
					title: 'Perfectly Responsive',
					description:
						'The Logo Showcase is fully responsive and will look great on any device. In a mobile-first world, this feature will put you ahead of your competitors. ',
					imageUrl:
						'https://website-assets.commoninja.com/logo-showcase/responsive.png',
				},
				{
					title: 'Easy To Use',
					description:
						'The Logo Showcase app is easy to use and requires no coding knowledge. Our intuitive dashboard with the drag-and-drop feature will enable you to customize the app any way you’d like to with just a few simple clicks.',
					imageUrl:
						'https://website-assets.commoninja.com/logo-showcase/easy-to-use.png',
				},
				{
					title: 'Custom CSS',
					description:
						'As with all of Common Ninja’s apps, you can add custom CSS to customize the Logo Showcase app and be even more creative.',
					imageUrl:
						'https://website-assets.commoninja.com/general/custom-css.png',
				},
				{
					title: 'Easy To Embed ',
					description:
						'You can embed the Logo Showcase app on your website easily by copying a single line of code. The app will also be updated automatically with every change you make.',
					imageUrl:
						'https://website-assets.commoninja.com/general/easy-to-embed.png',
				},
			],
			faq: [
				{
					question: 'Can I change the logo’s opacity?',
					answer:
						"Yes, you can easily change the logo's opacity to complement your style via the “Look & Feel” tab on the app’s dashboard. ",
				},
				{
					question: 'Can I add a hover effect? ',
					answer:
						'Yes, the app features a selection of different hover effects. ',
				},
				{
					question: 'Can I make it pause on hover?',
					answer:
						'Yes, you can make the carousel pause when your users hover over it.',
				},
				{
					question: 'Can I change the direction of the carousel?',
					answer: 'Yes, you can easily change the direction of the carousel.',
				},
				{
					question: 'Can I change the speed of the carousel?',
					answer: 'Yes, you can easily change the speed of the carousel. ',
				},
				{
					question: 'Can I make the logos clickable?',
					answer:
						'Yes, you can make the logos clickable and link them to relevant pages. ',
				},
				{
					question: 'How do I start using Common Ninja’s Logo Showcase app? ',
					answer:
						'It’s simple, really. All you need to do is to sign up and start using the free version.',
				},
				{
					question: 'Is Common Ninja’s Logo Showcase app free? ',
					answer:
						'Common Ninja’s Logo Showcase app is free to use. It is limited to a certain amount of views, however.',
				},
				{
					question:
						'What website builders is Common Ninja’s Logo Showcase app compatible with? ',
					answer:
						'Common Ninja’s Logo Showcase app is compatible with ALL current and future website builders. ',
				},
				{
					question: 'How do I embed the Logo Showcase app into my website?',
					answer:
						"It’s very easy to embed Common Ninja’s Logo Showcase app on your website and the process consists of two steps: <br /><br />\n1. Once you’ve finished working with the Logo Showcase app, copy the HTML text that can be found under the 'Add to Website' tab on the app’s dashboard.\n<br /><br />2. On your website builder, find the 'embed' widget option, place it where you want the Logo Showcase app to appear, and then paste the HTML code you’ve copied before into the widget.",
				},
				{
					question: 'Is the Logo Showcase app GDPR compliant?',
					answer: 'Yes, the Logo Showcase app is GDPR compliant. ',
				},
				{
					question:
						'Do I need to be able to code to use your Logo Showcase app? ',
					answer:
						'No. Using our Logo Showcase app is very simple. The app comes with an intuitive drag-and-drop interface and fully customizable options. Once you’ve finished editing app to your liking, all you need to do is copy the provided code and add it to your website. ',
				},
				{
					question: 'Is it hard to embed your Logo Showcase app? ',
					answer: 'No. If we can do it, so can you. ',
				},
				{
					question: 'I have a feature request, how can I share it?',
					answer:
						'Yes. We are eager to hear your request. Please refer to this <a href="https://help.commoninja.com/hc/en-us/community/topics/360000419337-Feature-Requests" target="_blank">page</a>.',
				},
			],
			seo: {
				title:
					'A Free, Fully Customizable & Fully Responsive Logo Showcase App',
				description:
					'Use Common Ninja’s Logo Showcase app on any website to boost credibility, define the company’s industry and enhance the site’s design.',
				keywords: [
					'logo showcase',
					'logo showcase app',
					'logo showcase plugin',
					'logo showcase widget',
					'logo carousel',
					'logo carousel app',
					'logo carousel plugin',
					'logo carousel widget',
					'logo showcase wordpress',
					'logo showcase wix',
					'logo showcase webflow',
					'logo showcase duda',
					'logo showcase elementor',
					'logo showcase shopify',
					'logo showcase bigcommerce',
					'logo showcase woocommerce',
				],
				image:
					'https://website-assets.commoninja.com/logo-showcase/logo-showcase-hero.png',
			},
		},
	},
] as IPluginListing[];
