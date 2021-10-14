import { ClientSessionHandler, Settings } from "./_dependencies"
import { extractPageName } from "./helper/extractPageName"
import { extractRootPath } from "./helper/extractRootPath"
export async function getDefaultPropsAsync(context) {
	if (!context) return {}

	const pageName = extractPageName(context.req.url)
	const brandSettings = await Settings.BrandAsync()
	const { appName } = brandSettings
	const title = pageName ? `${appName} – ${pageName}` : appName
	const rootPath = extractRootPath(context.req.url)
	const urlPath = context.req.url

	return {
		title,
		rootPath,
		urlPath,
		csrfToken: await ClientSessionHandler.getCsrfTokenAsync(context),
		Brand: brandSettings,
	}
}
