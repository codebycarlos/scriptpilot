import { mongoose, Int32 } from "./_dependencies.js";
export const schema = new mongoose.Schema({
	userId: mongoose.ObjectId,
	providerAccountId: Int32,
});
