export async function Zoho() {
	return {
		appId: process.env.ZOHO_APP_ID,
		appSecret: process.env.ZOHO_APP_SECRET,
		selfClientAccountsUrl: process.env.ZOHO_SELF_CLIENT_ACCOUNTS_URL,
		selfClientId: process.env.ZOHO_SELF_CLIENT_ID,
		selfClientSecret: process.env.ZOHO_SELF_CLIENT_SECRET,
		selfClientDevEmail: process.env.ZOHO_SELF_CLIENT_DEV_EMAIL,
		LoginCallbackUrl: process.env.ZOHO_LOGIN_CALLBACK_URL,
		orgId: process.env.ZOHO_PRODUCTION_ORG_ID,
		apiDomain: process.env.ZOHO_API_DOMAIN,
		developerProfiles: process.env.ZOHO_DEVELOPER_PROFILES.split(","),
		administratorProfiles: process.env.ZOHO_ADMINISTRATOR_PROFILES.split(","),
		authorizedProfiles: process.env.ZOHO_AUTHORISED_PROFILES.split(","),
        accessTokenPathFormat: process.env.ZOHO_ACCESS_TOKEN_PATH_FORMAT
	}
}
