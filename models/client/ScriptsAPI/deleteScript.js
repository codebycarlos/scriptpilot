import { CustomAxios } from './_dependencies'
export async function deleteScript(session, { name, version }) {
  try {
    const axios = await CustomAxios(session)
    const response = await axios.delete(`api/scripts/${name}`, {
      params: {
        version
      }
    })
    const { status, statusText } = response

    return { error: null,
      message: statusText,
      status }
  } catch (e) {
    const { status, statusText } = e.response

    return { error: e,
      message: statusText,
      status }
  }
}
