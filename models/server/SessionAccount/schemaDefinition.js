import { Mongoose, Int32 } from "./_dependencies"
export const schemaDefinition = {
	userId: Mongoose.Schema.ObjectId,
	providerAccountId: Int32,
}
