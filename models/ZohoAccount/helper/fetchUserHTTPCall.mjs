import { validateArguments } from "../../../_utils/validation/validateArguments.mjs";
import { AccessToken } from "../../AccessToken/AccessToken.mjs";
import axios from "axios";
export async function fetchUserHTTPCall(requestDefinition) {
	validateArguments([
		...arguments,
		requestDefinition.account.api_domain,
		requestDefinition.account.id,
	]);
	const { account } = requestDefinition;
	let accessTokenCode;

	try {
		accessTokenCode = await AccessToken.getAccessCode(process.env.ZOHO_PRODUCTION_ORG_ID);
	} catch (e) {
		throw Error(`Unable to authorise request. ${e}`);
	}

	return axios
		.get(`${account.api_domain}/crm/v2/users/${account.id}`, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Zoho-oauthtoken ${accessTokenCode}`,
			},
		})
		.catch((e) => {
			throw Error(`HTTP call failed. ${e}`);
		});
}
