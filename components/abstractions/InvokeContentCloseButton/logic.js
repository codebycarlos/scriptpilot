export function logic(imports, props, styleDefault) {
	const { useInvokeOverlayContext } = imports
	const { Actions } = useInvokeOverlayContext()

	return { ...props, Actions }
}
