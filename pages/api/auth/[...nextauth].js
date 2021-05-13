import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import Settings from "models/server/Settings"
import { NextAuthCallbacks } from "models/server/NextAuthCallbacks"

const options = {
	providers: [
		Providers.Zoho({
			clientId: await Settings.Zoho.appId,
			clientSecret: await Settings.Zoho.appSecret,
		}),
	],
	database: {
		type: "mongodb",
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// Ensure network allows outbound connections to port 27017
		url: await Settings.Mongo.connectUrl,
	},
	// Used for randomising hashing
	secret: await Settings.NextAuth.secret,
	session: {
		// Use JSON Web Tokens for session instead of database sessions.
		jwt: false,
		// Seconds - How long (seconds) until an idle session expires and is no longer valid.
		maxAge: 1 * 1 * 15 * 60,
	},
	callbacks: {
		session: NextAuthCallbacks.session,
	},
	pages: {
		signIn: "/login",
	},
	debug: false,
}

export default (req, res) => NextAuth(req, res, options)
