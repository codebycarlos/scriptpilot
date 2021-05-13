export async function Core() {
	return {
		hostname: process.env.HOSTNAME,
		port: process.env.PORT,
		host: process.env.HOST,
		domainUrl: process.env.DOMAIN_URL,
	}
}
