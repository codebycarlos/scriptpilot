export async function NextAuthAsync() {
	return {
		secret: process.env.NEXTAUTH_SECRET,
		nextAuthUrl: process.env.NEXTAUTH_URL,
		nextAuthCallbackUrl: process.env.NEXTAUTH_CALLBACKURL,
		linkedIn: {
			clientId: process.env.NEXTAUTH_LINKEDIN_CLIENTID,
			clientSecret: process.env.NEXTAUTH_LINKEDIN_CLIENTSECRET,
		},
		email: {
			server: process.env.NEXTAUTH_EMAIL_SERVER,
			from: process.env.NEXTAUTH_EMAIL_FROM,
		},
	}
}
