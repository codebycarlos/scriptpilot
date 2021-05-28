import { FilePath } from "../_dependencies"
export function extractPageName(url) {
	if (!url || url.charAt(0) !== "/") return
    
	const urlComponents = url.split("/")
	const rootPage =
		urlComponents[1] === "_next" && urlComponents[4]
			? FilePath.removeExtension(urlComponents[4])
			: urlComponents[1]

	return rootPage.charAt(0).toUpperCase() + rootPage.slice(1)
}
