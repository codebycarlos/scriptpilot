import { listAllFunctions } from "./listAllFunctions";

export async function test() {
	console.log(await listAllFunctions());
}
