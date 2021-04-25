export function logic(imports, props) {
	const { useMediaQuery, breakpoint } = imports;
	const mediumScreen = useMediaQuery(`(max-width:${breakpoint.variable_breakpoint_medium})`);
	const smallScreen = useMediaQuery(`(max-width:${breakpoint.variable_breakpoint_small})`);

	const backgroundImageResponsiveProperties = smallScreen
		? {
				quality: 50,
				objectFit: "cover",
				objectPosition: "center right",
		  }
		: mediumScreen
		? {
				quality: 80,
				objectFit: "cover",
				objectPosition: "center right",
		  }
		: {
				quality: 80,
				objectFit: "fill",
				objectPosition: "bottom right",
		  };

	props["BackgroundImage"] = {
		...props["BackgroundImage"],
		...backgroundImageResponsiveProperties,
	};

	return props;
}
