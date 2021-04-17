import { checkPermissions } from "./checkPermissions.mjs";
import { recheckPermissions } from "./recheckPermissions.mjs";
import { getRedirect, isAuthorised } from "./_dependencies.mjs";

export const Session = { checkPermissions, recheckPermissions, getRedirect, isAuthorised };
