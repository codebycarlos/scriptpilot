import { validateArguments } from "../../validation/validateArguments.mjs";
import fs from "fs";
export function loadFile(targetPath) {
	validateArguments([...arguments]);
	if (!fs.existsSync(targetPath))
		throw Error(`Invalid path. File not found in path: ${targetPath}`);
	let file;
	try {
		file = fs.readFileSync(targetPath, { encoding: "utf8" });
	} catch (e) {
		throw Error(`Unable to read file. ${e}`);
	}
	return JSON.parse(file);
}
