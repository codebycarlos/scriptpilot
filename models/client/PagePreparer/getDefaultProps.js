import { ClientSessionHandler, Settings } from './_dependencies'
import { extractPageName } from './helper/extractPageName'
import { extractRootPath } from './helper/extractRootPath'
export async function getDefaultProps(context) {
  if (!context) {
    return {}
  }
  const pageName = extractPageName(context.req.url)
  const brandSettings = await Settings.Brand()
  const { appName } = brandSettings
  const title = pageName
    ? `${appName} – ${pageName}`
    : appName
  const rootPath = extractRootPath(context.req.url)

  return {
    title,
    rootPath,
    csrfToken: await ClientSessionHandler.getCsrfToken(context),
    Brand: brandSettings
  }
}
