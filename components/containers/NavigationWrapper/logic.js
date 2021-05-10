export function logic(imports, props, styleDefault) {
	const { useMediaQuery, breakpoint } = imports;
	const smallScreen = useMediaQuery(`(max-width:${breakpoint.variable_breakpoint_S})`);

	props["flexDirection"] = smallScreen ? "column" : "row";
	props["order"] = smallScreen ? -1 : 0;

	return props;
}
