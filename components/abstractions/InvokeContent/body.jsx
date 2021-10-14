export function body(imports, props, styleDefault, Root = "div") {
    const { InvokeContentCloseButton, InvokeContentMain } = imports
	return <Root {...props.DOMAttributes} ref={props.ref}>
        <InvokeContentCloseButton />
        <InvokeContentMain />
    </Root>
}
