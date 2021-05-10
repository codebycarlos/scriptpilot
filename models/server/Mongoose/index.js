import { mongoose } from "./_dependencies";
import { createSchema } from "./createSchema";
import { createModel } from "./createModel";
import { modelExists } from "./modelExists";
import { getModel } from "./getModel";

export const Mongoose = {
	...mongoose,
	createSchema,
	createModel,
	modelExists,
	getModel,
};
