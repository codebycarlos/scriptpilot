export function body(imports, props, styleDefault, Root = "div") {
	const { ImageLogo, ContentGroup } = imports
	return (
		<ContentGroup {...props.DOMAttributes}>
			<ImageLogo
				src={props.src}
				style={{ height: `${props.height}px`, width: `${props.width}px` }}
				height={props.height}
				width={props.width}
				layout="responsive"
			/>
			<p style={props.byLine.style}>{props.byLine.text}</p>
		</ContentGroup>
	)
}
