import { ArgumentValidator, JSONFile } from "./_dependencies.mjs";
import { AccessToken } from "./AccessToken.mjs";
export function save(newToken, targetPath) {
	ArgumentValidator.check([...arguments]);
	newToken = AccessToken.addExpiryTime(newToken);
	JSONFile.save(newToken, targetPath);
}
