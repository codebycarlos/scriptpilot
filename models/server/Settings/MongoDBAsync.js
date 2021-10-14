export async function MongoDBAsync() {
	return {
		cluster0UserName: process.env.MONGODB_CLUSTER0_USERNAME,
		cluster0Password: process.env.MONGODB_CLUSTER0_PASSWORD,
		defaultDatabseName: process.env.MONGODB_CONNECT_DATABASE_NAME,
		connectUrl: process.env.MONGODB_CONNECT_URL,
		encryptionAlgorithm: process.env.MONGODB_ENCRYPTION_ALGORITHM,
		encryptionSecretKey: process.env.MONGODB_ENCRYPTION_SECRET_KEY,
	}
}
