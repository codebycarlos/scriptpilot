import { ArgumentValidator } from "./_dependencies.js";
import { success } from "./success.js";
import { fail } from "./fail.js";
import { failDetailed } from "./failDetailed.js";
import { error } from "./error.js";

export function JSend(responseObject) {
	ArgumentValidator.check([...arguments]);
	return {
		success(responseDefinition) {
			success(responseDefinition, responseObject);
		},
		fail(responseDefinition) {
			fail(responseDefinition, responseObject);
		},
		failDetailed(responseDefinition) {
			failDetailed(responseDefinition, responseObject);
		},
		error(responseDefinition) {
			error(responseDefinition, responseObject);
		},
	};
}
