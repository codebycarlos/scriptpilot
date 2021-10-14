export function logic(imports, props, styleDefault) {
	const { useInvokeOverlayContext, useClickAway, useRef } = imports
	const { Actions } = useInvokeOverlayContext()
    
    props.ref = useRef()
    useClickAway(props.ref, Actions.close)

	return { ...props }
}
