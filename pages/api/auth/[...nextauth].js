import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { Settings } from "models/server/Settings"
import { NextAuthCallbacks } from "models/server/NextAuthCallbacks"

async function options() {
	const zohoSettings = await Settings.ZohoAsync()
	const mongoDBSettings = await Settings.MongoDBAsync()
	const nextAuthSettings = await Settings.NextAuthAsync()

	return {
		providers: [
			Providers.Zoho({
				clientId: zohoSettings.appId,
				clientSecret: zohoSettings.appSecret,
			}),
		],
		database: {
			type: "mongodb",
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// Ensure network allows outbound connections to port 27017
			url: mongoDBSettings.connectUrl,
		},
		// Used for randomising hashing
		secret: nextAuthSettings.secret,
		session: {
			// Use JSON Web Tokens for session instead of database sessions.
			jwt: false,

			/*
			 * Seconds - How long (seconds) until an idle session expires and is no longer valid.
			 * Hours * Minutes * Seconds
			 */
			maxAge: 10 * 60 * 60,
		},
		callbacks: {
			session: NextAuthCallbacks.sessionAsync,
		},
		pages: {
			signIn: "/login",
		},
		debug: false,
	}
}

export default async (req, res) => NextAuth(req, res, await options())
