import { getSessionRequestAsync } from './_dependencies'
export async function getSessionAsync(context) {
  try {
    return await getSessionRequestAsync(context)
  } catch (e) {
    return null
  }
}
