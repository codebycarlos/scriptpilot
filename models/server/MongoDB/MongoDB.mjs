import { connect } from "./connect.mjs";
import { isConnected } from "./isConnected.mjs";
import { connectIfNotConnected } from "./connectIfNotConnected.mjs";

export const MongoDB = { connect, isConnected, connectIfNotConnected };
