import { validateArguments } from "../../../validation/validateArguments.mjs";
import lockFile from "proper-lockfile";
export function triggerDelayedFileUnlock(filePath, delayInMilliseconds = 1000) {
  validateArguments([...arguments]);
  try {
    return setTimeout(
      (filePath) => lockFile.unlockSync(filePath),
      delayInMilliseconds,
      filePath
    );
  } catch (e) {
    throw Error(`Unable to create timer to trigger file unlock. ${e}`);
  }
}
