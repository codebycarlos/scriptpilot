export function body(imports, props, styleDefault, Root = "div") {
	const { LogoImage, ContentGroup } = imports;
	Root = ContentGroup;
	return (
		<Root {...props.DOMAttributes}>
			<LogoImage
				src={props.src}
				style={{ height: `${props.height}px`, width: `${props.width}px` }}
				height={props.height}
				width={props.width}
				layout="responsive"
			/>
			<p style={props.byline.style}>{props.byline.text}</p>
		</Root>
	);
}
