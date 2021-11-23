import * as core from '@actions/core';
import { readDotEnv as dotEnv } from './dotenv';
try {
	const dotenvFile = core.getInput('path');
	const logVariables = core.getInput('log-variables').toLowerCase() === 'true';
	const maskVariables = core.getInput('mask-variables').toLowerCase() === 'true';
	const variables = dotEnv(dotenvFile);

	if (maskVariables) {
		for (const key in variables) {
			const value = variables[key];
			core.setSecret(value);
		}
	}

	if (logVariables) {
		core.info(`${variables}`);
	} else {
		core.info(`loaded ${Object.keys(variables).length} values into the environment`);
	}

	core.setOutput('generic', 'please check for actual outputs');

	for (const key in variables) {
		const value = variables[key];
		core.setOutput(key, value);
	}
} catch (error) {
	core.setFailed(error.message);
}
