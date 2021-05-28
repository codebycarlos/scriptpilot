export function logic(imports, props, styleDefault) {
	if (props.page === "scripts")
		props.descriptionText = (
			<>
				A script or&nbsp;
				<a
					href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-concepts.html#gettingstarted-concepts-function"
					target="_blank"
					title="Find out more."
				>
					function
				</a>
				&nbsp;is code which executes a set of defined instructions. It may be&nbsp;
				<a
					href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html"
					target="_blank"
					title="Find out more."
				>
					triggered
				</a>
				&nbsp;manually, via a repeating schedule, or an HTTP request.
			</>
		)
	return props
}
