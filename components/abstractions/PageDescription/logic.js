export function logic(imports, props, styleDefault) {
	if (props.page === "scripts") {
		props.descriptionText = (
			<>
				A &nbsp; script &nbsp;is code which executes a set of instructions. It may be&nbsp;
				triggered &nbsp;manually, or externally via a HTTP request (disabled for this demo).
			</>
		)
	}

	return props
}
