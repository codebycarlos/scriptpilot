export function logic(imports, props, styleDefault) {
	const { useScriptContext } = imports
	const {
		Data: { script },
	} = useScriptContext()

    props.script = script

	return props
}
