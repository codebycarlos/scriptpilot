export async function MongoDBAsync() {
	return {
		connectUrl: process.env.MONGODB_CONNECT_URL,
		encryptionAlgorithm: process.env.MONGODB_ENCRYPTION_ALGORITHM,
		encryptionSecretKey: process.env.MONGODB_ENCRYPTION_SECRET_KEY,
	}
}
