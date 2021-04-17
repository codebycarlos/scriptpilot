import { mongoose } from "./_dependencies.mjs";
export function isConnected() {
	if (mongoose.connection.readyState === 1) return true;
	return false;
}
