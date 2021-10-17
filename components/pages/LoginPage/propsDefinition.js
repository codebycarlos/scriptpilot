export function propsDefinition(PropTypes) {
	return {
		BackgroundImage: {
			propType: PropTypes.object.isRequired,
			defaultProp: {
				src: "/assets/images/Space.jpg",
				alt: "Rocket tacking off into space.",
				priority: true,
			},
		},
		welcomeText: {
			propType: PropTypes.string.isRequired,
			defaultProp: "CLOUD POWERED COMPUTING",
		},
	}
}
