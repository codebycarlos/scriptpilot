export function logic(imports, props, styleDefault) {
	const { useInvokeOverlayContext } = imports
	const { Data } = useInvokeOverlayContext()

	return { ...props, Data }
}
