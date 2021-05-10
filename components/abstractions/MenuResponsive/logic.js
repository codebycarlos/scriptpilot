export function logic(imports, props, styleDefault) {
	const { useMediaQuery, breakpoint, MenuPanel, MenuBar } = imports;
	const smallScreen = useMediaQuery(`(max-width:${breakpoint.variable_breakpoint_S})`);

	props["MenuToDisplay"] = smallScreen ? MenuBar : MenuPanel;

	return props;
}
