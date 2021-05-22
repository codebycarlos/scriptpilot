export async function NextAuth() {
	return {
		secret: process.env.NEXTAUTH_SECRET,
		nextAuthUrl: process.env.NEXTAUTH_URL,
	}
}
