import { FilePath } from '../_dependencies'

export function extractRootPath(url) {
  if (!url || url.charAt(0) !== '/') {
    return
  }

  const urlComponents = url.split('/')

  return (
    `/${
      urlComponents[1] === '_next' && urlComponents[4]
		  ? FilePath.removeExtension(urlComponents[4])
		  : urlComponents[1]}`
  )
}
