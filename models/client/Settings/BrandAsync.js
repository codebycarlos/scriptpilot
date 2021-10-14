export async function BrandAsync() {
	return {
		appName: process.env.NEXT_PUBLIC_APP_NAME,
		appNameLowerCase: process.env.NEXT_PUBLIC_APP_NAME_LOWERCASE,
		companyName: process.env.NEXT_PUBLIC_COMPANY_NAME,
		companyNameLowerCase: process.env.NEXT_PUBLIC_APP_NAME_LOWERCASE,
		logoPath: process.env.NEXT_PUBLIC_LOGO_PATH,
		logoNoTextPath: process.env.NEXT_PUBLIC_LOGO_NO_TEXT_PATH,
		faviconPath: process.env.NEXT_PUBLIC_FAVICON_PATH,
	}
}
