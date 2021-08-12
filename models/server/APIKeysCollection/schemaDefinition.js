import { Mongoose } from "./_dependencies"
export const schemaDefinition = {
	Active: Boolean,
	FunctionName: String,
	Qualifier: String,
	key: new Mongoose.Schema({ iv: String, content: String }),
	method: String,
}
