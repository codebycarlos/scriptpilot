export function logic(imports, props, styleDefault) {
	if (props.page === "scripts") {
		props.descriptionText = (
			<>
				A script is code which executes a set of instructions. It may be 
				triggered manually, or externally via a HTTP request (disabled for this demo).
			</>
		)
	}

	return props
}
