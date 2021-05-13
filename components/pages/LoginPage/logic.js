export function logic(imports, props) {
	const { useMediaQuery, breakpoint } = imports
	const largeScreen = useMediaQuery(`(max-width:${breakpoint.variable_breakpoint_L})`)
	const smallScreen = useMediaQuery(`(max-width:${breakpoint.variable_breakpoint_S})`)

	const backgroundImageResponsiveProperties = smallScreen
		? {
				quality: 50,
				objectFit: "cover",
				objectPosition: "center right",
		  }
		: largeScreen
		? {
				quality: 80,
				objectFit: "cover",
				objectPosition: "center right",
		  }
		: {
				quality: 80,
				objectFit: "fill",
				objectPosition: "bottom right",
		  }

	props["BackgroundImage"] = {
		...props["BackgroundImage"],
		...backgroundImageResponsiveProperties,
	}

	return props
}
