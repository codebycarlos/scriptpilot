import { JSend } from "indigozest_modules/JSend";
import { AWSLambda } from "models/server/AWSLambda";

export default async function handler(req, res) {
	try {
		await AWSLambda.test();
	} catch (e) {
		console.log(e);
	}
	return JSend(res).success();
}
