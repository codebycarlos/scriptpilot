export function body(imports, props, styleDefault, Root = "main") {
	const {
		ScriptsContextProvider,
		NavigationWrapper,
		ScriptsListAndActions,
		PageDescription,
		HorizontalSeparator,
		InvokeOverlay,
		InvokeOverlayProvider,
	} = imports

	const { scripts } = props

	return (
		<NavigationWrapper>
			<Root {...props.DOMAttributes}>
				<PageDescription page="scripts" />
				<HorizontalSeparator />
				<InvokeOverlayProvider>
					<ScriptsContextProvider Data={scripts}>
						<ScriptsListAndActions />
					</ScriptsContextProvider>
					<InvokeOverlay />
				</InvokeOverlayProvider>
			</Root>
		</NavigationWrapper>
	)
}
