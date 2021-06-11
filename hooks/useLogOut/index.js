import { signOutAsync, useRouter } from "./_dependencies"
export function useLogOut(url = "/login") {
	const router = useRouter()
	const getlogOutAsyncUrl = async (url) =>
		await signOutAsync({ redirect: false, callbackUrl: url }).url
	const logOutAsync = async () => await router.push(getlogOutAsyncUrl(url))

	return [logOutAsync]
}
