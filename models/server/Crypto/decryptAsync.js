import { crypto, Settings, Try } from "./_dependencies"

export async function decryptAsync(hash) {
	const [MongoDBSettings, errorWithMongoDBSettings] = await Try(() => Settings.MongoDBAsync())

	if (
		!MongoDBSettings?.encryptionAlgorithm ||
		!MongoDBSettings?.encryptionSecretKey ||
		errorWithMongoDBSettings
	)
		throw Error("Unable to load variables required for decryption.")

	const decipher = crypto.createDecipheriv(
		MongoDBSettings.encryptionAlgorithm,
		MongoDBSettings.encryptionSecretKey,
		Buffer.from(hash.iv, "hex"),
	)

	const decrypted = Buffer.concat([
		decipher.update(Buffer.from(hash.content, "hex")),
		decipher.final(),
	])

	return decrypted.toString()
}
