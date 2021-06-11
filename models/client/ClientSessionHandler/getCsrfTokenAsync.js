import { getCsrfTokenRequestAsync } from './_dependencies'
export async function getCsrfTokenAsync(context) {
  try {
    return await getCsrfTokenRequestAsync(context)
  } catch (e) {
    return null
  }
}
