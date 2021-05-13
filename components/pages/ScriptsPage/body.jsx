export function body(imports, props, styleDefault, Root = "main") {
	const {
		NavigationWrapper,
		ScriptsListAndActions,
		PageDescription,
		HorizontalSeparator,
	} = imports
	return (
		<NavigationWrapper>
			<Root {...props.DOMAttributes}>
				<PageDescription page="scripts" />
				<HorizontalSeparator />
				<ScriptsListAndActions />
			</Root>
		</NavigationWrapper>
	)
}
