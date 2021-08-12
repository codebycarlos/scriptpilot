export function logic(imports, props, styleDefault) {
	const { useInvokeOverlayContext } = imports

	const { Data } = useInvokeOverlayContext()

	if (Data?.open) props.className = [props?.className, "open"].join(" ")

	return props
}
