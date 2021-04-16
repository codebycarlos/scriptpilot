export function logic(imports, props) {
	switch (props.type) {
		case "h1":
			props["ChildRoot"] = "h1";
			break;
		case "h2":
			props["ChildRoot"] = "h2";
			break;
		case "h3":
			props["ChildRoot"] = "h3";
			break;
		case "h4":
			props["ChildRoot"] = "h4";
			break;
		case "h5":
			props["ChildRoot"] = "h5";
			break;
		case "h6":
			props["ChildRoot"] = "h6";
			break;
		default:
			props["ChildRoot"] = "p";
	}

	return props;
}
