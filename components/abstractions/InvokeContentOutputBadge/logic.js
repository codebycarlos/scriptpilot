export function logic(imports, props, styleDefault) {
	const { useInvokeOverlayContext } = imports
	const { Data } = useInvokeOverlayContext()

	if (Data?.outputType) props.className = [props.className, Data?.outputType].join(" ")

	return { ...props, Data }
}
