export function propsDefinition(PropTypes) {
	return {
		BackgroundImage: {
			propType: PropTypes.object.isRequired,
			defaultProp: {
				src: process.env.NEXT_PUBLIC_BACKGROUND_IMAGE_PATH,
				alt: "Rocket tacking off into space.",
				priority: true,
			},
		},
		welcomeText: {
			propType: PropTypes.string.isRequired,
			defaultProp: "LET YOUR CODE TAKE OFF",
		}
	};
}
