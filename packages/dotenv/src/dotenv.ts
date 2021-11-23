import * as env from 'dotenv';
import * as fs from 'fs';

function readEnv(dotenvFile) {
	if (!fs.existsSync(dotenvFile)) {
		throw new Error('file does not exist');
	}

	const dotenv = env.config({ path: dotenvFile });
	const returnedMap = {};
	for (const key in dotenv.parsed) {
		const value = dotenv.parsed[key];
		const lowercaseKey = key.toLocaleLowerCase();
		returnedMap[lowercaseKey] = value;
	}
	return returnedMap;
}

export { readEnv as readDotEnv };
