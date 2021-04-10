import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
import { JSON } from "../../_utils/file-handling/JSON/JSON.mjs";
import { AccessToken } from "./AccessToken.mjs";
export function save(newToken, targetPath) {
  validateArguments([...arguments]);
  newToken = AccessToken.addExpiryTime(newToken);
  JSON.saveFile(newToken, targetPath);
}
