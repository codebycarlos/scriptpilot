import { signOut, useRouter } from './_dependencies'
export function useLogOut(url = '/login') {
  if (!url) {
    return
  }
  const router = useRouter()
  const getLogOutUrl = async (url) => await signOut({ redirect: false,
    callbackUrl: url }).url
  const logOut = async () => await router.push(getLogOutUrl(url))

  return [logOut]
}
