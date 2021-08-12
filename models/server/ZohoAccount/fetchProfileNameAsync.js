import { ArgumentValidator, Try } from "./_dependencies"
import { fetchUserAsync } from "./fetchUserAsync"

export async function fetchProfileNameAsync({ apiDomain, orgId, userId }) {
	ArgumentValidator.check([...arguments, apiDomain, orgId, userId])

	const [user, error] = await Try(() => fetchUserAsync({ apiDomain, orgId, userId }))

	if (error) throw Error(`Unable to fetch user.`)

	return user.profile.name
}
