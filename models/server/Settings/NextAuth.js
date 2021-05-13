export async function NextAuth() {
	return {
		secret: process.env.NEXT_AUTH_SECRET,
		nextAuthUrl: process.env.NEXTAUTH_URL,
	}
}
