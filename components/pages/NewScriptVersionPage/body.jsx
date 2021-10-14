export function body(imports, props, styleDefault, Root = "main") {
	const { NavigationWrapper, NewScriptVersionForm, ScriptContextProvider } = imports

	return (
		<NavigationWrapper>
			<Root {...props.DOMAttributes}>
				<ScriptContextProvider Data={props?.script}>
					{props?.script && <NewScriptVersionForm />}
					{!props?.script && (
						<h5>
							<b>Error: </b>Unable to load script.
						</h5>
					)}
				</ScriptContextProvider>
			</Root>
		</NavigationWrapper>
	)
}
