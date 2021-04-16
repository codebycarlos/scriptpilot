import { getCsrfToken } from "next-auth/client";
import { getSession } from "next-auth/client";
export default async function dataFetching(context) {
	const req = context.req;
	const session = await getSession({ req });

	if (session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	return {
		props: {
			csrfToken: await getCsrfToken(context),
		},
	};
}
