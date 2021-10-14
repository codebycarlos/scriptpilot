export function body(imports, props, styleDefault, Root = "div") {
    const { InvokeContent } = imports
    
	return <Root {...props.DOMAttributes}>
        <InvokeContent/>
    </Root>
}
