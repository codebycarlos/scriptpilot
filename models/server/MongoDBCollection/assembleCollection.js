import { ArgumentValidator } from "./_dependencies"
import { getOrCreateModel } from "./getOrCreateModel"
import { assignMethodsActingOnModel } from "./helper/assignMethodsActingOnModel"
export function assembleCollection({name, schemaDefinition, methodsActingOnModel = []}) {
	ArgumentValidator.check([name, schemaDefinition])

	const model = getOrCreateModel(name, schemaDefinition)

	return assignMethodsActingOnModel(model, methodsActingOnModel)
}
