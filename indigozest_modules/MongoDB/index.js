import { connect } from "./connect.js";
import { isConnected } from "./isConnected.js";
import { connectIfNotConnected } from "./connectIfNotConnected.js";

export const MongoDB = { connect, isConnected, connectIfNotConnected };
