import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
import { SessionAccount } from "./SessionAccount.mjs";
export async function findByUserId(targetUserId) {
	validateArguments([...arguments]);
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
