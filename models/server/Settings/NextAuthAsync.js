export async function NextAuthAsync() {
	return {
		secret: process.env.NEXTAUTH_SECRET,
		nextAuthUrl: process.env.NEXTAUTH_URL,
		linkedIn: {
			clientId: process.env.NEXTAUTH_LINKEDIN_CLIENTID,
			clientSecret: process.env.NEXTAUTH_LINKEDIN_CLIENTSECRET,
		},
		email: {
			serverUser: process.env.NEXTAUTH_EMAIL_SERVER_USER,
			serverPassword: process.env.NEXTAUTH_EMAIL_SERVER_PASSWORD,
			serverHost: process.env.NEXTAUTH_EMAIL_SERVER_HOST,
			serverPort: process.env.NEXTAUTH_EMAIL_SERVER_PORT,
			fromEmail: process.env.NEXTAUTH_EMAIL_FROMEMAIL,
		},
	}
}
