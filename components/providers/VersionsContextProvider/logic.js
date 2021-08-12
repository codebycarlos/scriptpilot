export function logic(imports, props, styleDefault) {
	const { useEffect, useVersions } = imports

	const { Data, Actions, Effects } = useVersions({ versions: props?.Data ?? [], error: null })

	useEffect(() => {
		Effects.refreshVersionsPeriodically(Data?.versions[0]?.FunctionName, 2 * 60 * 1000)
	}, [Effects])

	return {
		...props,
		value: {
			Data,
			Actions,
			Effects,
		},
	}
}
