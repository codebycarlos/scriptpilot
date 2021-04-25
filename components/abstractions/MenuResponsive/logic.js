export function logic(imports, props, styleDefault) {
	const { useMediaQuery, breakpoint, MenuPanel, MenuBar, useIsMounted } = imports;
	const smallScreen = useMediaQuery(`(max-width:${breakpoint.variable_breakpoint_small})`);

	props["MenuToDisplay"] = smallScreen ? MenuBar : MenuPanel;

	return props;
}
