import { mongoose } from './_dependencies.mjs';
import { schema } from "./schema.mjs";
import { findByUserId } from "./findByUserId.mjs";

let SessionAccount;

if (mongoose.models.account) {
	SessionAccount = mongoose.model("account");
} else {
	SessionAccount = mongoose.model("account", schema);
	SessionAccount["findByUserId"] = findByUserId;
}

export { SessionAccount };
