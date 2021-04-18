import { ArgumentValidator } from "./_dependencies.js";
import { MongoDB } from "./index.js";
export async function connectIfNotConnected(url) {
	ArgumentValidator.check([...arguments]);

	if (await !MongoDB.isConnected()) await MongoDB.connect(url);
}
