import { JSON } from "../../_utils/file-handling/JSON/JSON.mjs";
export function load(targetPath) {
  return JSON.loadFile(targetPath);
}
