import { Mongoose } from "./_dependencies"
export const schemaDefinition = {
	userId: Mongoose.Schema.ObjectId,
	accessToken: String,
}
