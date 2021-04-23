export function logic(imports, props) {
	const { useMediaQuery, breakpoints } = imports;
	const mediumScreen = useMediaQuery(`(max-width:${breakpoints.var_breakpoints_medium})`);
	const smallScreen = useMediaQuery(`(max-width:${breakpoints.var_breakpoints_small})`);

	const backgroundImageResponsiveProperties = smallScreen
		? {
				quality: 1,
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
