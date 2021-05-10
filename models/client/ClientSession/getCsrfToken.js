import { getCsrfTokenRequest } from "./_dependencies";
export async function getCsrfToken(context) {
	try {
		return await getCsrfTokenRequest(context);
	} catch (e) {
		return null;
	}
}
