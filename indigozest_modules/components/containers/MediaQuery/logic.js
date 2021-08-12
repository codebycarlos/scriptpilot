export function logic(imports, props, styleDefault) {
	// Imports
	const { React, useMediaQuery } = imports

	// Create state to track whether or not to render, pass as prop to body
	const [render, setRender] = React.useState(true)
	const [delay, setDelay] = React.useState(false)

	props.render = render

	// Early return if no children to render or no query
	if (!props.children || !props.query) {
		return props
	}

	// Evaluate query match
	const matched = useMediaQuery(props.query)

	// Positive match:

	// Toggle rendering if necessary
	if (matched) {
		if (render) return props

		setRender(true)
		setDelay(false)

		return props
	}

	// Negative match:

	// Add fade out class with animation and delayed toggling of rendering (timing should match animation)
	const children = React.Children.toArray(props.children)

	props.children = React.Children.map(children, (child) =>
		React.cloneElement(child, {
			className: [child.props.className, styleDefault.quickFadeOut].join(" "),
		}),
	)

	// Do nothing if delay active (previous element being removed)
	if (delay) {
		return props
	}

	// Only toggle rendering if not already disabled
	if (!render) {
		return props
	}

	setDelay(true)

	setTimeout(
		(setRender, setDelay) => {
			setRender(false)
			setDelay(false)
		},
		200,
		setRender,
		setDelay,
	)

	return props
}
