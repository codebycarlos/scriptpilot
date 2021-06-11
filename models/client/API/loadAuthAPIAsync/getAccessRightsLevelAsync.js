import { CustomAxiosAsync } from './_dependencies'
export async function getAccessRightsLevelAsync(session) {
  try {
    const axios = await CustomAxiosAsync(session)
    const response = await axios.get('api/auth/accessRightsLevel')
    const { data, status, statusText } = response

    return {
      accessRightsLevel: data.data.accessRightsLevel,
      error: null,
      message: statusText,
      status
    }
  } catch (e) {
    const { status, statusText } = e.response

    return { accessRightsLevel: null,
      error: e,
      message: statusText,
      status }
  }
}
