import { mongoose } from "./_dependencies"
export function disconnect() {
	mongoose.disconnect()
}
