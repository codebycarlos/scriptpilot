import { ArgumentValidator } from "./_dependencies.js";
import { SessionAccount } from "./index.js";
export async function findByUserId(targetUserId) {
	ArgumentValidator.check([...arguments]);
	let document;

	try {
		document = await SessionAccount.findOne({
			userId: targetUserId,
		}).exec();
	} catch (e) {
		throw Error(`Unable to search for document with target user id: ${targetUserId}. ${e}`);
	}

	return document;
}
