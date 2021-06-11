import { CustomAxiosAsync } from './_dependencies'
export async function deleteScriptAsync(session, { name, version }) {
  try {
    const axios = await CustomAxiosAsync(session)
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
