import { ArgumentValidator, fs, lockFile, Path, consola } from "./_dependencies.mjs";

export function save(object, targetPath) {
  ArgumentValidator.check([...arguments]);
  if (!Path.directoryExists(targetPath))
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
