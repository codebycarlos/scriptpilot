import { ArgumentValidator, AccessRightsLevels, consola } from "./_dependencies"

export async function determineAccessRightsLevel({ req, res }) {
	ArgumentValidator.check([req, res])

	const session = await SessionHandler.getSession({ req, res })
    let level = 0;

    try {
        Object.values(AccessRightsLevels).forEach((level) => {
            if(!(await level(session))) break
            level++
        })
    }
    catch(e) {
        consola.error(e)
    }

    return level
}
