import { ArgumentValidator, JSONFile } from "./_dependencies.js";
import { AccessToken } from "./AccessToken.js";
export function save(newToken, targetPath) {
	ArgumentValidator.check([...arguments]);
	newToken = AccessToken.addExpiryTime(newToken);
	JSONFile.save(newToken, targetPath);
}
