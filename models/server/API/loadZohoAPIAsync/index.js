import { getAccessTokenCodeAsync } from "./getAccessTokenCodeAsync"

export async function loadZohoAPIAsync() {
	return {
		ZohoAPI: {
			getAccessTokenCodeAsync,
		},
	}
}
