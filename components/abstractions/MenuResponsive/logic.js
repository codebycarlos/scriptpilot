export function logic(imports, props, styleDefault) {
	const { useMediaQuery, breakpoints, MenuPanel, MenuBar, useIsMounted } = imports;
	const smallScreen = useMediaQuery(`(max-width:${breakpoints.var_breakpoints_small})`);
	const isMounted = useIsMounted();

	if (!isMounted) return props;

	props["MenuToDisplay"] = smallScreen ? MenuBar : MenuPanel;

	return props;
}
