import { ArgumentValidator } from "./_dependencies.js";
export async function findByUserId(model, targetUserId) {
	ArgumentValidator.check([...arguments]);
	let document;

	try {
		document = await model.findOne({
			userId: targetUserId,
		}).exec();
	} catch (e) {
		throw Error(`Unable to search for document with target user id: ${targetUserId}. ${e}`);
	}

	return document;
}
