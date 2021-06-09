import { Int32, Mongoose } from './_dependencies'
export const schemaDefinition = {
  userId: Mongoose.Schema.ObjectId,
  providerAccountId: Int32
}
