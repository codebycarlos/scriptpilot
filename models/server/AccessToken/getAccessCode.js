import { ArgumentValidator, path } from "./_dependencies.js";
import { getCurrentAccessCodeIfActive } from "./helper/getCurrentAccessCodeIfActive.js";
import { getNewAccessCode } from "./helper/getNewAccessCode.js";
export async function getAccessCode(orgId) {
	ArgumentValidator.check([...arguments]);
	const tokenPath = path.resolve(
		process.cwd(),
		`./secrets/zoho/org${orgId}/tokens/access.json`
	);
	const refreshTokenPath = path.resolve(
		process.cwd(),
		`./secrets/zoho/org${orgId}/tokens/refresh.json`
	);
	let currentAccessCode;
	let newAccessCode;

	try {
		currentAccessCode = await getCurrentAccessCodeIfActive(tokenPath);
	} catch (e) {
		consola.warn(`Unable to check current access code. ${e}`);
	}

	if (currentAccessCode) return currentAccessCode;

	try {
		newAccessCode = await getNewAccessCode(tokenPath, refreshTokenPath);
	} catch (e) {
		throw Error(`Unable to get new access code. ${e}`);
	}

	return newAccessCode;
}
