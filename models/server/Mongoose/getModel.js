import { ArgumentValidator, mongoose } from "./_dependencies"
export function getModel(modelName) {
	ArgumentValidator.check([...arguments])

	try {
		return mongoose.model(modelName)
	} catch (e) {
		throw Error(`Unable to retrieve model ${e}. `)
	}
}
