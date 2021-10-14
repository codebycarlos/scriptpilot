import { getCsrfTokenRequestAsync, Try } from "./_dependencies"
export async function getCsrfTokenAsync(context) {
	const [csrfToken, errorWithCsrfToken] = await Try(() => getCsrfTokenRequestAsync(context))

	if (errorWithCsrfToken) return null

	return csrfToken
}
