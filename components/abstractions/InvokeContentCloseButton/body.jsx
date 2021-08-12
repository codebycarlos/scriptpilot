export function body(imports, props, styleDefault, Root = "div") {
    const { ClearIcon } = imports
	return <Root {...props.DOMAttributes}>
        <ClearIcon onClick={props.Actions.close}/>
    </Root>
}
