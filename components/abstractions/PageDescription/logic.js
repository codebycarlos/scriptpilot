export function logic(imports, props, styleDefault) {
	if (props.page === "scripts")
		props.descriptionText = `A script or function is code which executes a set of defined instructions. 
    It may be triggered manually, via a repeating schedule, or an HTTP request.`
	return props
}
