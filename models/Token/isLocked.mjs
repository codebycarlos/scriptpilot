import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
import lockFile from "proper-lockfile";
export function isLocked(tokenPath) {
  validateArguments([...arguments]);
  try {
    return lockFile.checkSync(tokenPath);
  } catch (e) {
    throw Error(`Unable to check if access token is locked. ${e}`);
  }
}
