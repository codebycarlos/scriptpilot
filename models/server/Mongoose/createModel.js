import { ArgumentValidator, mongoose, Try } from "./_dependencies"
export function createModel(modelName, schema) {
	ArgumentValidator.check([...arguments])

	const [model, errorWithModel] = Try(() => mongoose.model(modelName, schema))
	if (errorWithModel) throw Error(`Unable to create model.`)

	return model
}
