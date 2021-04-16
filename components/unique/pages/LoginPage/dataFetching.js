import { getCsrfToken } from "next-auth/client";
export default async function dataFetching(context) {
	return {
		props: {
			csrfToken: await getCsrfToken(context),
		},
	};
}
