export function logic(imports, props) {
	const { useMediaQuery, breakpoints } = imports;
	const mediumScreen = useMediaQuery(`(max-width:${breakpoints.var_breakpoints_medium})`);
	const smallScreen = useMediaQuery(`(max-width:${breakpoints.var_breakpoints_small})`);
	let backgroundImageResponsiveProperties;

	if (smallScreen) {
		backgroundImageResponsiveProperties = {
			quality: 1,
			objectFit: "cover",
			objectPosition: "center right",
		};
	} else if (mediumScreen) {
		backgroundImageResponsiveProperties = {
			quality: 85,
			objectFit: "cover",
			objectPosition: "center right",
		};
	} else {
		backgroundImageResponsiveProperties = {
			quality: 100,
			objectFit: "fill",
			objectPosition: "bottom right",
		};
	}

	props["BackgroundImage"] = {...props["BackgroundImage"], ...backgroundImageResponsiveProperties};

	return props;
}
