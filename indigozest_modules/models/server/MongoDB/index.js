import { connectAsync } from "./connectAsync"
import { disconnect } from "./disconnect"
import { isConnected } from "./isConnected"
import { connectIfNotConnectedAsync } from "./connectIfNotConnectedAsync"

export const MongoDB = {
	connectAsync,
	disconnect,
	isConnected,
	connectIfNotConnectedAsync,
}
