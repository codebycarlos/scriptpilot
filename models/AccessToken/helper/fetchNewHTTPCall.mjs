import { validateArguments } from "../../../_utils/validation/validateArguments.mjs";
import axios from "axios";
export function fetchNewHTTPCall(requestDefinition) {
	validateArguments([...arguments, requestDefinition.refreshTokenCode]);
	const { refreshTokenCode } = requestDefinition;

	return axios
		.post(
			`${process.env.ZOHO_SELF_CLIENT_ACCOUNTS_URL}` +
				`/oauth/v2/token?refresh_token=${refreshTokenCode}` +
				`&client_id=${process.env.ZOHO_SELF_CLIENT_ID}` +
				`&client_secret=${process.env.ZOHO_SELF_CLIENT_SECRET}` +
				`&grant_type=refresh_token`,
			null,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		)
		.catch((e) => {
			throw Error(`HTTP call failed. ${e}`);
		});
}
