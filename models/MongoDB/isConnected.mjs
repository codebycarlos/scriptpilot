const mongoose = require("mongoose");
export function isConnected() {
	if (mongoose.connection.readyState === 1) return true;
	return false;
}
