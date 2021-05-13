export function getRedirect(redirectName) {
	switch (redirectName) {
		case "landing":
			return {
				redirect: {
					destination: "/scripts",
					permanent: false,
				},
			}
		case "login":
			return {
				redirect: {
					destination: "/login",
					permanent: false,
				},
			}
		case "default":
		default:
			return {
				redirect: {
					destination: "/",
					permanent: false,
				},
			}
	}
}
