export function body(imports, props, styleDefault, Root = "main") {
	const {
		NavigationWrapper,
		ScriptContextProvider,
		VersionsContextProvider,
		HorizontalSeparator,
		ScriptDetails,
		VersionActionsPanel,
		VersionsDataGrid,
		InvokeOverlay,
		InvokeOverlayProvider,
	} = imports

	const { script, versions } = props

	return (
		<NavigationWrapper>
			<Root {...props.DOMAttributes}>
				<InvokeOverlayProvider>
					<ScriptContextProvider Data={script}>
						{script?.Configuration?.FunctionName && (
							<>
								<h4 className="title">{script?.Configuration?.FunctionName}</h4>
								{script?.Configuration?.Description && (
									<p className="script-description">
										{script?.Configuration?.Description}
									</p>
								)}
								<VersionActionsPanel />
								<HorizontalSeparator />
								<p className="section-title">Configuration</p>
								<ScriptDetails />
								{versions?.length > 1 && (
									<>
										<HorizontalSeparator />
										<p className="section-title">History</p>
										<VersionsContextProvider Data={versions}>
											<VersionsDataGrid />
										</VersionsContextProvider>
									</>
								)}
							</>
						)}
						{!script?.Configuration?.FunctionName && (
							<h5>
								<b>Error: </b>Unable to load script version.
							</h5>
						)}
					</ScriptContextProvider>
					<InvokeOverlay />
				</InvokeOverlayProvider>
			</Root>
		</NavigationWrapper>
	)
}
