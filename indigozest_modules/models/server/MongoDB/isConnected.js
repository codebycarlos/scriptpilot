import { mongoose } from "./_dependencies"
export function isConnected() {
	if (mongoose.connection.readyState === 1) return true

	return false
}
