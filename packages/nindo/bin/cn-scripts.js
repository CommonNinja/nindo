#!/usr/bin/env node
'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
	throw err;
});

const spawn = require('child_process').spawnSync;
const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
	(x) =>
		x === 'start' ||
		x === 'build' ||
		x === 'test' ||
		x === 'post-build' ||
		x === 'analyze' ||
		x === 'simulate' // || x === 'test'
);
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

if (
	['start', 'build', 'test', 'post-build', 'analyze', 'simulate'].includes(
		script
	)
) {
	const result = spawn(
		process.execPath,
		nodeArgs
			.concat(require.resolve('../scripts/' + script))
			.concat(args.slice(scriptIndex + 1)),
		{ stdio: 'inherit' }
	);
	if (result.signal) {
		if (result.signal === 'SIGKILL') {
			console.log(
				'The build failed because the process exited too early. ' +
					'This probably means the system ran out of memory or someone called ' +
					'`kill -9` on the process.'
			);
		} else if (result.signal === 'SIGTERM') {
			console.log(
				'The build failed because the process exited too early. ' +
					'Someone might have called `kill` or `killall`, or the system could ' +
					'be shutting down.'
			);
		}
		process.exit(1);
	}
	process.exit(result.status);
} else {
	console.log('Unknown script "' + script + '".');
	console.log('Perhaps you need to update cn-scripts?');
	console.log('Contact us for support: support@commoninja.com');
}
