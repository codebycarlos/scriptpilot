export async function Core() {
	return {
		hostname: process.env.NEXT_PUBLIC_NEXT_PUBLIC_HOSTNAME,
		port: process.env.NEXT_PUBLIC_PORT,
		host: process.env.NEXT_PUBLIC_HOST,
		domainUrl: process.env.NEXT_PUBLIC_DOMAIN_URL,
	}
}
