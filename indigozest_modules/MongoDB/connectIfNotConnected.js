import { ArgumentValidator } from "./_dependencies.js";
import { isConnected } from "./isConnected.js";
import { connect } from "./connect.js";
export async function connectIfNotConnected(url) {
	ArgumentValidator.check([...arguments]);

	if (await !isConnected()) await connect(url);
}
