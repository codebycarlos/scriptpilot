import { icons } from "./_dependencies"

export async function CoreAsync() {
	return {
		hostname: process.env.NEXT_PUBLIC_NEXT_PUBLIC_HOSTNAME,
		port: process.env.NEXT_PUBLIC_PORT,
		host: process.env.NEXT_PUBLIC_HOST,
		domainUrl: process.env.NEXT_PUBLIC_DOMAIN_URL,
		menuListItems: [
			{ path: "/scripts", label: "scripts", icon: icons.FlashOn },
			//			{ path: "/schedules", label: "schedules", icon: icons.Schedule },
			//			{ path: "/settings", label: "settings", icon: icons.Settings },
		],
	}
}
