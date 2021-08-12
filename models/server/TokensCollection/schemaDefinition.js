import { Mongoose } from "./_dependencies"
export const schemaDefinition = {
    access_token: String,
    refresh_token: String,
    api_domain: String,
    token_type: String,
    expires_in: Number,
    expiry_time: Number,
    type: { type: String, enum: ['access', 'refresh'] },
    encrypted: Boolean,
    encrypted_token: new Mongoose.Schema({ iv: String, content: String }),
}
