export function body(imports, props, styleDefault, Root = "div") {
	return (
		<Root {...props.DOMAttributes}>
			<imports.Image
				{...props.DOMAttributes}
				src={props.src}
				alt={props.alt}
				quality={props.quality}
				layout={props.layout}
			/>
		</Root>
	);
}
