import { Try, APIKeyPair, Settings } from "./_dependencies"
export async function getScriptAPIEndpointURLAsync({ FunctionName, Qualifier }) {
	const [key, error] = await Try(() => APIKeyPair.getKeyAsync({ FunctionName, Qualifier }))
	if (error) throw Error("Request for script API key failed.")

	if (!key) return

	const [coreSettings, errorWithCoreSettings] = await Try(() => Settings.CoreAsync())
	if (!coreSettings?.host || errorWithCoreSettings) throw Error("Unable to determine domain url.")

	const QualifierPath = Qualifier ? `/versions/${Qualifier}` : ""

	return `${coreSettings.host}/api/scripts/${FunctionName}${QualifierPath}/external-invoke?auth_type=apikey&apikey=${key}&invocation_type=synchronous`
}
