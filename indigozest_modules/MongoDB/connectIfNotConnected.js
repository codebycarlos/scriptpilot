import { ArgumentValidator } from "./_dependencies"
import { isConnected } from "./isConnected"
import { connect } from "./connect"
export async function connectIfNotConnected(url) {
	ArgumentValidator.check([...arguments])

	if (await !isConnected()) await connect(url)
}
