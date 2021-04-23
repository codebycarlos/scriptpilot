export function logic(imports, props, styleDefault) {
	if (props.text === false) props["src"] = process.env.NEXT_PUBLIC_LOGO_NO_TEXT_IMAGE_PATH;
	return props;
}
