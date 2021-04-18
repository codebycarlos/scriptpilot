import { MongoDB } from "./MongoDB.js";
export async function connectIfNotConnected() {
	if (await !MongoDB.isConnected()) await MongoDB.connect();
}
