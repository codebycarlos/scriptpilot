import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { Session } from "../../../models/Session/Session.mjs";
import consola from "consola";

const options = {
	providers: [
		Providers.Zoho({
			clientId: process.env.ZOHO_APP_ID,
			clientSecret: process.env.ZOHO_APP_SECRET,
		}),
	],
	database: {
		type: "mongodb",
		useNewUrlParser: true,
		url: process.env.MONGODB_CONNECT_URL,
	},
	// Used for randomising hashing
	secret: process.env.NEXT_AUTH_SECRET,
	session: {
		// Use JSON Web Tokens for session instead of database sessions.
		jwt: false,
		// Seconds - How long (seconds) until an idle session expires and is no longer valid.
		maxAge: 1 * 1 * 15 * 60,
	},
	callbacks: {
		async signIn(user, account, profile) {
			try {
				return Session.checkSignIn(user, account, profile);
			} catch (e) {
				consola.error(`Checking of sign in failed. ${e}`);
				return false;
			}
		}
	},
	debug: true,
};

export default (req, res) => NextAuth(req, res, options);
