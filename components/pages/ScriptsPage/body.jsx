export function body(imports, props, styleDefault, Root = "main") {
	const { NavigationWrapper } = imports;
	return (
		<NavigationWrapper>
			<Root {...props.DOMAttributes}>Hello</Root>
		</NavigationWrapper>
	);
}
