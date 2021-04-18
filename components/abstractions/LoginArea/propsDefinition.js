export function propsDefinition(PropTypes) {
	return {
		src: {
			propType: PropTypes.string.isRequired,
			defaultProp: "/assets/images/logos/FullColor_close_up_1280x1024.svg",
		},
		byline: {
			propType: PropTypes.object,
			defaultProp: {
				text: `by ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
				style: { color: "white", fontSize: "0.7rem", margin: "unset", paddingLeft: "50px" },
			},
		},
		csrfToken: {
			propType: PropTypes.string.isRequired,
		}
	};
}
