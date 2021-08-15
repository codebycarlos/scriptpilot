export function body(imports, props, styleDefault, Root = "div") {
	const { InvokeContentOutputBadge, SyntaxHighlighter } = imports
	if (!props?.Data?.outputText && props.Data?.outputType !== "success-asynchronous") return <></>
	return (
		<Root {...props.DOMAttributes}>
			<p className="section-title">Output</p>
			{props.Data?.outputText && (
				<div className="code-container">
					<SyntaxHighlighter
						language="json"
						showLineNumbers={true}
						showInlineLineNumbers={true}
						wrapLines={true}
						customStyle={{ backgroundColor: "white" }}
					>
						{JSON.stringify(JSON.parse(props.Data?.outputText), null, 5)}
					</SyntaxHighlighter>
				</div>
			)}
			<InvokeContentOutputBadge />
		</Root>
	)
}
