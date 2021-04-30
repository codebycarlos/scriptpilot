import { listFunctions } from "./listFunctions";
export async function listAllFunctions(
	limit,
	Marker,
	config = { FunctionVersion: "ALL", Marker },
	functions = []
) {
	const data = await listFunctions(config);

	if ("Functions" in data) functions.push(...data.Functions);

	if (data.NextMarker && (limit === undefined || functions.length < limit))
		listAllFunctions(limit, data.NextMarker, config, functions);

	return functions;
}
