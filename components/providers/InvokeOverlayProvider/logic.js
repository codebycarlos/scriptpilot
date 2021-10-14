export function logic(imports, props, styleDefault) {
	const { useInvokeOverlay } = imports

	const { DataRef, Data, Actions } = useInvokeOverlay()

	return {
		...props,
		value: {
			DataRef,
			Data,
			Actions,
		},
	}
}
