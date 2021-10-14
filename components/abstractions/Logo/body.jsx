export function body(imports, props, styleDefault, Root = "div") {
	const { ImageLogo } = imports
	return <ImageLogo {...props.DOMAttributes} {...props}/>
}
