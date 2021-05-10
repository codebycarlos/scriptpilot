export function body(imports, props, styleDefault, Root = "p") {
	const { descriptionText } = props;
	return <Root {...props.DOMAttributes}>{descriptionText ?? descriptionText}</Root>;
}
