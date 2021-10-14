import { TokensCollection } from "./_dependencies"

export async function saveAsync({ token }) {
	return await TokensCollection.upsertNewAsync(token)
}
