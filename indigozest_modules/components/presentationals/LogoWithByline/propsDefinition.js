export function propsDefinition(PropTypes) {
	return {
		byLine: {
			propType: PropTypes.object,
		},
		src: {
			propType: PropTypes.string.isRequired,
		},
		height: {
			propType: PropTypes.number,
			defaultProp: 160,
		},
		width: {
			propType: PropTypes.number,
			defaultProp: 200,
		},
		quality: {
			propType: PropTypes.number,
			defaultProp: 75,
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
			defaultProp: false,
		},
	}
}
