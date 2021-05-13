export function body(imports, props, styleDefault, Root = "div") {
	const { Image } = imports
	return (
		<Root {...props.DOMAttributes}>
			<Image
				src={props.src}
				height={props.height}
				width={props.width}
				quality={props.quality}
				layout={props.layout}
				objectFit={props.objectFit}
				objectPosition={props.objectPosition}
				priority={props.priority}
			/>
		</Root>
	)
}
