export function body(imports, props, styleDefault, Root = "main") {
	const {
		ScriptsContextProvider,
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
				<ScriptsContextProvider scripts={props.scripts}>
					<ScriptsListAndActions />
				</ScriptsContextProvider>
			</Root>
		</NavigationWrapper>
	)
}
