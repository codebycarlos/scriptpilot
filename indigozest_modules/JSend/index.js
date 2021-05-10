import { ArgumentValidator } from "./_dependencies.js";
import { success } from "./success.js";
import { fail } from "./fail.js";
import { failDetailed } from "./failDetailed.js";
import { error } from "./error.js";

export function JSend(responseObject) {
	ArgumentValidator.check([...arguments]);

	return {
		success: (responseDefinition, status) =>
			success(responseObject, responseDefinition, status),
		fail: (responseDefinition, status) => 
			fail(responseObject, responseDefinition, status),
		failDetailed: (responseDefinition, status) =>
			failDetailed(responseObject, responseDefinition, status),
		error: (responseDefinition, status) => 
			error(responseObject, responseDefinition, status),
	};
}
