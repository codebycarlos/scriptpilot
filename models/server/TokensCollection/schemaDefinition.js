import { Mongoose } from "./_dependencies"
export const schemaDefinition = {
	access_token: Mongoose.Schema.Types.Mixed,
	refresh_token: Mongoose.Schema.Types.Mixed,
	api_domain: String,
	token_type: String,
	expires_in: Number,
	expiry_time: Number,
	type: { type: String, enum: ["access_token", "refresh_token"] },
	encrypted: Boolean,
}
