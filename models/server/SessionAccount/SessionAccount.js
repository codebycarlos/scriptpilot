import { mongoose } from "./_dependencies.js";
import { schema } from "./schema.js";
import { findByUserId } from "./findByUserId.js";

let SessionAccount;

if (mongoose.models.account) {
	SessionAccount = mongoose.model("account");
} else {
	SessionAccount = mongoose.model("account", schema);
	SessionAccount["findByUserId"] = findByUserId;
}

export { SessionAccount };
