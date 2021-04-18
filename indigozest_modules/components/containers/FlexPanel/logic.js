export function logic(imports, props, styleDefault) {
	switch (props.type) {
		case "vertical":
			props["className"] = [props["className"], styleDefault.vertical].join(" ");
			break;
		case "horizontal":
		default:
			props["className"] = [props["className"], styleDefault.horizontal].join(" ");
	}
	return props;
}
