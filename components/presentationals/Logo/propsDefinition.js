export function propsDefinition(PropTypes) {
	return {
		src: {
			propType: PropTypes.string.isRequired,
      		defaultProp: process.env.NEXT_PUBLIC_LOGO_IMAGE_PATH
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
		} 
	};
}
