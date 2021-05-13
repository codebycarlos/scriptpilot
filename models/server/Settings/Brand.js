export async function Brand() {
	return {
		appName: process.env.NEXT_PUBLIC_APP_NAME,
		appNameLowerCase: process.env.NEXT_PUBLIC_APP_NAME_LOWERCASE,
		companyName: process.env.NEXT_PUBLIC_COMPANY_NAME,
		companyNameLowerCase: process.env.NEXT_PUBLIC_APP_NAME_LOWERCASE,
		logoPath: process.env.NEXT_PUBLIC_LOGO_PATH,
	}
}
