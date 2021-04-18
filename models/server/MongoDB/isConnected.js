import { mongoose } from "./_dependencies.js";
export function isConnected() {
	if (mongoose.connection.readyState === 1) return true;
	return false;
}
