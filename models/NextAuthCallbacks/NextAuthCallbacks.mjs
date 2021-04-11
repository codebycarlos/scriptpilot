import { signIn } from "./signIn.mjs";
import { session } from "./session.mjs";

export const NextAuthCallbacks = { signIn, session };

export { signIn, session };
