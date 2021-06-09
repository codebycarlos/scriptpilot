import { API } from './_dependencies'
export async function determineAccessRightsLevel(context) {
  const { AuthAPI } = await API.Auth(context)

  return await AuthAPI.getAccessRightsLevel()
}
