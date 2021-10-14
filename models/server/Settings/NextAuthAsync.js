export async function NextAuthAsync() {
	return {
		secret: process.env.NEXTAUTH_SECRET,
		nextAuthUrl: process.env.NEXTAUTH_URL,
	}
}
