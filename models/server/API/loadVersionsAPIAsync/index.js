import { getVersionsAsync } from "./getVersionsAsync"

export async function loadVersionsAPIAsync() {
	return {
		VersionsAPI: {
			getVersionsAsync,
		},
	}
}
