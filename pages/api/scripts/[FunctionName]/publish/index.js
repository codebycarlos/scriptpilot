export { resolveAsync as default } from "models/server/VersionRequestHandler/resolveAsync"

export const config = {
	api: {
		bodyParser: {
			sizeLimit: "50mb",
		},
	},
}
