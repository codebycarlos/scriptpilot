import { signOutAsync, Try } from "./_dependencies"

export async function getLogOutUrlAsync(callbackUrl) {
	if (!callbackUrl) throw Error("No callback url provided.")

	const [{ url }, error] = await Try(() => signOutAsync({ redirect: false, callbackUrl }))

	if (error) throw Error(`Unable to get validated url.`)

	return url
}
