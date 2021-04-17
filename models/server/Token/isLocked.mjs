import { ArgumentValidator, lockFile } from "./_dependencies.mjs";
export function isLocked(tokenPath) {
  ArgumentValidator.check([...arguments]);
  try {
    return lockFile.checkSync(tokenPath);
  } catch (e) {
    throw Error(`Unable to check if access token is locked. ${e}`);
  }
}
