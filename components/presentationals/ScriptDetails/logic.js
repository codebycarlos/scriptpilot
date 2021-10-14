export function logic(imports, props, styleDefault) {
	const { useScriptContext } = imports
	const {
		Data: { script, error },
	} = useScriptContext()

	props.script = script
	props.error = error

	props.fields = [
		{ attributeName: "FunctionArn", label: "Function ARN (Amazon Resource Name)" },
		{ attributeName: "State", label: "State" },
		{ attributeName: "Version", label: "Version" },
		{ attributeName: "LastModified", label: "Last Modified" },
		{ attributeName: "CodeSize", label: "Code Size (B)" },
		{ attributeName: "MemorySize", label: "Memory Size (MB)" },
		{ attributeName: "Runtime", label: "Runtime" },
		{ attributeName: "Role", label: "Role (ARN)" },
		{ attributeName: "Timeout", label: "Timeout (s)" },
		{ attributeName: "APIEndpointURL", label: "API Endpoint (POST)" },
	]

	return props
}
