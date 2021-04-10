import { validateArguments } from "../../validation/validateArguments.mjs";
import fs from "fs";
import lockFile from "proper-lockfile";
import { directoryPathExists } from "../../validation/directoryPathExists";
const consola = require("consola");

export function saveFile(object, targetPath) {
  validateArguments([...arguments]);
  if (!directoryPathExists(targetPath))
    throw Error(`Invalid path directory provided: ${directoryPath}.`);

  let unlockFileFunction;
  try {
    unlockFileFunction = lockFile.lockSync(targetPath, { realpath: false });
  } catch (e) {
    throw Error(
      `Unable to lock file (in order to avoid concurrency issues): ${e}.`
    );
  }

  consola.info(`Saving to file with path ${targetPath}`);
  fs.writeFile(targetPath, JSON.stringify(object), (e) => {
    if (unlockFileFunction) unlockFileFunction();
    if (e) throw Error(`Unable to write to file. ${e}.`);
  });
}
