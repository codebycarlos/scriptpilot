import { checkPermissions } from "./checkPermissions.mjs";
import { recheckPermissions } from "./recheckPermissions.mjs";
import { fetchCSRFToken } from "./fetchCSRFToken.mjs";
import { logout } from "./logout.mjs";

export const Session = { checkPermissions, recheckPermissions, fetchCSRFToken, logout };

export { checkPermissions, recheckPermissions, fetchCSRFToken, logout };
