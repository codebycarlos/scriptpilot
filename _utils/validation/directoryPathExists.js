import { validateArguments } from "./validateArguments.mjs";
import fs from "fs";
export function directoryPathExists(fullPath) {
  validateArguments([...arguments]);
  try {
    const directoryPath = fullPath.match(/(.*)[\/\\]/)[1] || "";
    return fs.existsSync(directoryPath);
  } catch (e) {
    throw Error(
      `Unable to check if directory path exists for path: ${fullPath}. ${e}`
    );
  }
}
