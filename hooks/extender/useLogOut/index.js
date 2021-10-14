import { useRouter } from "./_dependencies"
import { getLogOutAsyncFunction } from "./getLogOutAsyncFunction"
export function useLogOut(callbackUrl = "/login") {
	const router = useRouter()

	const logOutAsync = getLogOutAsyncFunction({ router, callbackUrl })

	return { logOutAsync }
}
