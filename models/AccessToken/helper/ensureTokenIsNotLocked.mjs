import { validateArguments } from "../../../_utils/validation/validateArguments.mjs";
import { AccessToken } from "../AccessToken.mjs";
import { triggerDelayedFileUnlock } from "../../../_utils/file-handling/JSON/fileLock/triggerDelayedFileUnlock.js";
import fs from "fs";
export function ensureTokenIsNotLocked(tokenPath) {
	validateArguments([...arguments]);
	let fileIsLocked;

	if (!fs.existsSync(tokenPath)) return;

	try {
		fileIsLocked = AccessToken.isLocked(tokenPath);
	} catch (e) {
		throw Error(`Unable to check if current access token file is locked. ${e}`);
	}

	if (fileIsLocked) {
		try {
			triggerDelayedFileUnlock(tokenPath);
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
