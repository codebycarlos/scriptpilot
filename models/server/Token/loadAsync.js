import { TokensCollection } from "./_dependencies"

export async function loadAsync({ type }) {
	return await TokensCollection.findOneAsync({ type })
}
