import { CustomAxios } from './_dependencies'
export async function getScripts(session) {
  try {
    const axios = await CustomAxios(session)
    const response = await axios.get('api/scripts')
    const { data, status, statusText } = response

    return { scripts: data.data.scripts,
      error: null,
      message: statusText,
      status }
  } catch (e) {
    const { status, statusText } = e.response

    return { scripts: [],
      error: e,
      message: statusText,
      status }
  }
}
