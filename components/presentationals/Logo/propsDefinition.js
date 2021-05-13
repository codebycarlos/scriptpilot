export function propsDefinition(PropTypes) {
	return {
		src: {
			propType: PropTypes.string.isRequired,
			defaultProp: "/assets/images/logos/FullColor_close_up_1280x1024.svg",
		},
		height: {
			propType: PropTypes.number,
		},
		width: {
			propType: PropTypes.number,
		},
		quality: {
			propType: PropTypes.number,
			defaultProp: 1,
		},
		layout: {
			propType: PropTypes.string,
			defaultProp: "fill",
		},
		objectFit: {
			propType: PropTypes.string,
			defaultProp: "fill",
		},
		priority: {
			propType: PropTypes.bool,
			defaultProp: true,
		},
	}
}
