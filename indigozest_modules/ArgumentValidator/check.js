import { ValueOperations } from "./_dependencies.js";
export function check([...args], [...criteriaCallbacks] = [ValueOperations.isEmpty]) {
	var argsNum = args.length;

	if (!args || !criteriaCallbacks) return;

	while (argsNum--) {
		var criteriaCallbacksNum = criteriaCallbacks.length;
		while (criteriaCallbacksNum--) {
			let criteriaFunction = criteriaCallbacks[criteriaCallbacksNum];
			if (typeof criteriaFunction !== "function") {
				throw Error(
					`There was a problem validating criteria against a function's arguments. Ensure valid criteria callback function(s) specified. ` +
						`Argument value: ${argsNum + 1}. Criteria callbacks: ${criteriaCallbacks}`
				);
			}
			if (criteriaFunction(args[argsNum])) {
				throw Error(
					`Invalid argument(s) passed. Violation of criteria function ` +
						`${criteriaCallbacks[criteriaCallbacksNum].name} on argument ${
							argsNum + 1
						} with value ( ${args[argsNum]} ).`
				);
			}
		}
	}
}
