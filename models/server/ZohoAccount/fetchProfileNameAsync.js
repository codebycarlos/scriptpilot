import { ArgumentValidator, Try } from "./_dependencies"
import { fetchUserAsync } from "./fetchUserAsync"

export async function fetchProfileNameAsync({ apiDomain, userId }) {
	ArgumentValidator.check([...arguments, apiDomain, userId])

	const [user, error] = await Try(() => fetchUserAsync({ apiDomain, userId }))

	if (error) throw Error(`Unable to fetch user.`)

	return user.profile.name
}
