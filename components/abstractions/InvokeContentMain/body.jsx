export function body(imports, props, styleDefault, Root = "div") {
	const { InvokeContentInput, InvokeContentOutput, HorizontalSeparator } = imports
	return (
		<Root {...props.DOMAttributes}>
			{props?.Data?.open && <InvokeContentInput />}
			{props?.Data?.outputText && (
				<>
					<HorizontalSeparator />
					<InvokeContentOutput />
				</>
			)}
		</Root>
	)
}
