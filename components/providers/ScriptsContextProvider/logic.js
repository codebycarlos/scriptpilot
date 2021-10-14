export function logic(imports, props, styleDefault) {
	const { useEffect, useScripts } = imports
	const { Data, Actions, Effects } = useScripts({ scripts: props?.Data ?? [], error: null })

	useEffect(() => Effects.refreshScriptsPeriodically(2 * 60 * 1000), [Effects])

	return {
		...props,
		value: {
			Data,
			Actions,
			Effects,
		},
	}
}
