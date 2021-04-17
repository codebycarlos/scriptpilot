import { ArgumentValidator, fs } from "./_dependencies.mjs";
export function directoryExists(fullPath) {
    ArgumentValidator.check([...arguments]);
  try {
    const directoryPath = fullPath.match(/(.*)[\/\\]/)[1] || "";
    return fs.existsSync(directoryPath);
  } catch (e) {
    throw Error(
      `Unable to check if directory path exists for path: ${fullPath}. ${e}`
    );
  }
}
