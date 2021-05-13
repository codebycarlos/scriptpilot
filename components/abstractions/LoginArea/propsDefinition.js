export function propsDefinition(PropTypes) {
	return {
		src: {
			propType: PropTypes.string.isRequired,
		},
		byline: {
			propType: PropTypes.object,
		},
		csrfToken: {
			propType: PropTypes.string.isRequired,
		},
	}
}
