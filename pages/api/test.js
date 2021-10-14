import { JSend } from "indigozest_modules/models/server/JSend"

export default async function handler(req, res) {
	console.log("Working!")

	return JSend(res).success()
}
