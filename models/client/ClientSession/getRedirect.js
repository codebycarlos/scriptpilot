export function getRedirect(redirectName) {
	switch (redirectName) {
		case "landing":
			return {
				redirect: {
					destination: process.env.NEXT_PUBLIC_REDIRECT_LANDING,
					permanent: false,
				},
			};
		case "login":
			return {
				redirect: {
					destination: process.env.NEXT_PUBLIC_REDIRECT_LOGIN,
					permanent: false,
				},
			};
		case "default":
		default:
			return {
				redirect: {
					destination: "/",
					permanent: false,
				},
			};
	}
}
