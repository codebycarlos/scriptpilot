import { MongoDB } from "./MongoDB.mjs";
export async function connectIfNotConnected() {
	if (await !MongoDB.isConnected()) await MongoDB.connect();
}
