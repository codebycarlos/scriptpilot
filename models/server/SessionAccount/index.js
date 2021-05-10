import { Mongoose } from "./_dependencies";
import { schemaDefinition } from "./schemaDefinition";
import { findByUserId } from "./findByUserId";

const modelName = "account";
let SessionAccount;

if (Mongoose.modelExists(modelName)) {
	SessionAccount = Mongoose.getModel(modelName);
} else {
	SessionAccount = Mongoose.createModel(modelName, Mongoose.createSchema(schemaDefinition));
	SessionAccount["findByUserId"] = (targetUserId) => findByUserId(SessionAccount, targetUserId);
}

export { SessionAccount };
