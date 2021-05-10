import { ArgumentValidator, JSONFile } from "./_dependencies.js";
import { addExpiryTime } from "./addExpiryTime.js";
export function save(newToken, targetPath) {
	ArgumentValidator.check([...arguments]);
	newToken = addExpiryTime(newToken);
	JSONFile.save(newToken, targetPath);
}
