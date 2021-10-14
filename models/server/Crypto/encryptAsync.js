import { crypto, Settings, Try } from "./_dependencies"

export async function encryptAsync(text) {
	const [MongoDBSettings, errorWithMongoDBSettings] = await Try(() => Settings.MongoDBAsync())

	if (
		!MongoDBSettings?.encryptionAlgorithm ||
		!MongoDBSettings?.encryptionSecretKey ||
		errorWithMongoDBSettings
	)
		throw Error("Unable to load variables required for encryption.")

	const iv = crypto.randomBytes(16)

	const cipher = crypto.createCipheriv(
		MongoDBSettings.encryptionAlgorithm,
		MongoDBSettings.encryptionSecretKey,
		iv,
	)

	const encrypted = Buffer.concat([cipher.update(text), cipher.final()])

	return {
		iv: iv.toString("hex"),
		content: encrypted.toString("hex"),
	}
}
