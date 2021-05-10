import { ArgumentValidator, File, fs, Token } from "../_dependencies.js";
export function ensureTokenIsNotLocked(tokenPath) {
	ArgumentValidator.check([...arguments]);
	let fileIsLocked;

	if (!fs.existsSync(tokenPath)) return;

	try {
		fileIsLocked = Token.isLocked(tokenPath);
	} catch (e) {
		throw Error(`Unable to check if current access token file is locked. ${e}`);
	}

	if (fileIsLocked) {
		try {
			File.triggerDelayedUnlock(tokenPath);
		} catch (e) {
			throw Error(
				`Access token file is locked. Unable to trigger delayed file unlocking. ${e}`
			);
		}
		throw Error(
			`Access token file is locked. Triggered delayed unlocking which should resolve the issue for the next request.`
		);
	}
}