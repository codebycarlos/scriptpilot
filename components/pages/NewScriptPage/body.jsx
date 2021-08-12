export function body(imports, props, styleDefault, Root = "main") {
	const { NavigationWrapper, NewScriptForm, ScriptContextProvider } = imports

	return (
		<NavigationWrapper>
			<Root {...props.DOMAttributes}>
				<ScriptContextProvider>
					<NewScriptForm />
				</ScriptContextProvider>
			</Root>
		</NavigationWrapper>
	)
}
