export function getRedirect(context, path) {
	return {
		redirect: {
			destination: path ? path : "/",
			permanent: false,
		},
	}
}
