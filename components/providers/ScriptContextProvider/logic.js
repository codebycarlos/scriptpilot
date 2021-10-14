export function logic(imports, props, styleDefault) {
	const { useEffect, useScript, usePageContext } = imports

	const pageProps = usePageContext()

	const initialState = {
		script: props?.Data ?? {},
		error: null,
	}

	const { Data, Actions, Effects, setState } = useScript(initialState)

	useEffect(() => setState(initialState), [pageProps?.urlPath, setState])

	if (props?.Data) useEffect(() => Effects.refreshScriptPeriodically(2 * 60 * 1000), [Effects])

	return {
		...props,
		value: {
			Data,
			Actions,
			Effects,
		},
	}
}
