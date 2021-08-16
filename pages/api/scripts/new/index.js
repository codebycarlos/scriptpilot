export { resolveAsync as default } from "models/server/ScriptRequestHandler/resolveAsync"

export const config = {
	api: {
		bodyParser: {
			sizeLimit: "50mb",
		},
	},
}
