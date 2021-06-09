import { CustomAxios } from './_dependencies'
export async function getAccessRightsLevel(session) {
  try {
    const axios = await CustomAxios(session)
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
