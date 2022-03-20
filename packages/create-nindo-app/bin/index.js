#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const { prompt } = require('enquirer');
const { copy } = require('../scripts/utils.js');
const { execSync } = require('child_process');
const { lightCyan, red } = require('kolorist');

const cwd = process.cwd();

const TEMPLATES = ['widget', 'backoffice'];

const renameFiles = {
	_gitignore: '.gitignore',
};

const dependenciesErrorMessage = `
Something isn't right.
We couldn't install dependencies.
Please contact us for more information:
contact@commoninja.com
`;

async function getValidPackageName(projectName) {
	const packageNameRegExp =
		/^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
	if (packageNameRegExp.test(projectName)) {
		return projectName;
	} else {
		const suggestedPackageName = projectName
			.trim()
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/^[._]/, '')
			.replace(/[^a-z0-9-~]+/g, '-');

		const { inputPackageName } = await prompt({
			type: 'input',
			name: 'inputPackageName',
			message: `Package name:`,
			initial: suggestedPackageName,
			validate: (input) =>
				packageNameRegExp.test(input) ? true : 'Invalid package.json name',
		});
		return inputPackageName;
	}
}

// async function getNpmToken() {
// 	const { inputNpmToken } = await prompt({
// 		type: 'input',
// 		name: 'inputNpmToken',
// 		message: `Insert your NPM Token:`,
// 	});
// 	return inputNpmToken;
// }

function capitalize(str) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

function emptyDir(dir) {
	if (!fs.existsSync(dir)) {
		return;
	}
	for (const file of fs.readdirSync(dir)) {
		const abs = path.resolve(dir, file);
		if (fs.lstatSync(abs).isDirectory()) {
			emptyDir(abs);
			fs.rmdirSync(abs);
		} else {
			fs.unlinkSync(abs);
		}
	}
}

function installDeps(pkgManager, folderPath) {
	try {
		execSync(
			[
				`cd ${folderPath}`,
				`${pkgManager} install`,
			].join(' && '),
			{ stdio: 'inherit' }
		);
		return true;
	} catch (e) {
		console.log(red(dependenciesErrorMessage));
		return false;
	}
}

function getLatestPackageVersion() {
	try {
		return execSync(
			[
				`npm show @commonninja/nindo version`,
			].join(' && ')
		).toString().trim();
	} catch (e) {
		console.log(red('Could not get latest package version.'), e);
		return '0.0.0';
	}
}

// function validateToken(npmToken = '') {
// 	if (!npmToken) {
// 		return false;
// 	}

// 	const tokenLength = npmToken.length;
// 	if (npmToken.indexOf('npm_') === 0 && tokenLength === 40) {
// 		return true;
// 	}

// 	if (tokenLength !== 36) {
// 		return false;
// 	}

// 	return true;
// }

async function init() {
	console.log(
		lightCyan(`
===========================
  Common Ninja - NindoJS
===========================
`)
	);
	// Request the npm token
	// const npmToken = (await getNpmToken() || '').trim();
	// if (!validateToken(npmToken)) {
	// 	console.log(red(tokenErrorMessage));
	// 	return;
	// }

	let targetDir = argv._[0];
	if (!targetDir) {
		const { projectName } = await prompt({
			type: 'input',
			name: 'projectName',
			message: `Project name:`,
			initial: 'nindo-app',
		});
		targetDir = projectName;
	}

	const packageName = await getValidPackageName(targetDir);
	const root = path.join(cwd, targetDir);
	console.log(lightCyan(`\nScaffolding Nindo app in ${root}...\n`));

	if (!fs.existsSync(root)) {
		fs.mkdirSync(root, { recursive: true });
	} else {
		const existing = fs.readdirSync(root);
		if (existing.length) {
			const { yes } = await prompt({
				type: 'confirm',
				name: 'yes',
				initial: 'Y',
				message:
					`Target directory ${targetDir} is not empty.\n` +
					`Remove existing files and continue?`,
			});
			if (yes) {
				emptyDir(root);
			} else {
				return;
			}
		}
	}

	const firstAndOnlyTemplate =
		TEMPLATES && TEMPLATES.length && TEMPLATES.length === 1 && TEMPLATES[0];

	// Determine template
	let template = argv.t || argv.template || firstAndOnlyTemplate;
	let message = 'Select a template:';
	let isValidTemplate = false;

	// --template expects a value
	if (typeof template === 'string') {
		isValidTemplate = TEMPLATES.includes(template);
		message = `${template} isn't a valid template. Please choose from below:`;
	}

	if (!template || !isValidTemplate) {
		const { t } = await prompt({
			type: 'select',
			name: 't',
			message,
			choices: TEMPLATES,
		});
		template = t;
	}

	const templateDir = path.join(__dirname, '../', 'templates', `${template}-app`);

	const write = (file, content) => {
		const targetPath = renameFiles[file]
			? path.join(root, renameFiles[file])
			: path.join(root, file);
		if (content) {
			fs.writeFileSync(targetPath, content);
		} else {
			copy(path.join(templateDir, file), targetPath);
		}
	};

	const files = fs.readdirSync(templateDir);
	const skipFiles = [
		'package.json',
		'node_modules',
		'dist',
		'build',
		'.env',
		'package-lock.json',
		'.DS_Store',
	];

	for (const file of files.filter((f) => !skipFiles.includes(f))) {
		write(file);
	}

	const pkg = require(path.join(templateDir, `package.json`));
	const nindoPkgVersion = await getLatestPackageVersion();

	pkg.name = packageName;
	pkg.dependencies['@commonninja/nindo'] = `^${nindoPkgVersion}`;

	// Create package.json dynamically with package name
	write('package.json', JSON.stringify(pkg, null, 2));

	// Create default .env file
	write(
		'.env',
		`
# The server app name
REACT_APP_NINJA_SERVICE_NAME=       service-name
# Plugin type (chart, feed, table, etc.) - Should be one / two words, snake_case
REACT_APP_NINJA_PLUGIN_TYPE=        ${packageName.replace(/-/g, '_')}
# Plugin path (comparison-tables, bracket, etc.) - Should be one / two words, kebab-case
REACT_APP_NINJA_PLUGIN_PATH=        ${packageName}
  `
	);

	const pkgManager = /yarn/.test(process.env.npm_execpath) ? 'yarn' : 'npm';
	const usesYarn = pkgManager === 'yarn' || process.env.LOCAL;

	console.log(lightCyan('\nInstalling dependencies...\n'));

	// Install dependencies
	const isDownloadDone = await installDeps(pkgManager, root);

	if (isDownloadDone) {
		console.log(`
============================================================
To start your project type:
    `);
		console.log(lightCyan(`  cd ${packageName}`));
		console.log(lightCyan(`${usesYarn ? `  yarn start` : `  npm start`}`));
		console.log(`
Go get 'em, Ninja!
============================================================`);
	}
}

// Run the init process
init().catch((e) => {
	console.error(e);
});
