import { ArgumentValidator, mongoose, Try } from "./_dependencies"
export function getModel(modelName) {
	ArgumentValidator.check([...arguments])

	const [model, errorWithModel] = Try(() => mongoose.model(modelName))
	if (errorWithModel) throw Error(`Unable to retrieve model. `)

	return model
}
