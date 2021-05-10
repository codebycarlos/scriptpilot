import { ArgumentValidator, lockFile } from "./_dependencies.js";
export function triggerDelayedUnlock(filePath, delayInMilliseconds = 1000) {
	ArgumentValidator.check([...arguments]);
	try {
		return setTimeout(
			(filePath) => lockFile.unlockSync(filePath),
			delayInMilliseconds,
			filePath
		);
	} catch (e) {
		throw Error(`Unable to create timer to trigger file unlock. ${e}`);
	}
}