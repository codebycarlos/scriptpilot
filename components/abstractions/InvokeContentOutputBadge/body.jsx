export function body(imports, props, styleDefault, Root = "div") {
	const { CheckCircleIcon, ErrorIcon } = imports
	if (!props?.Data?.outputType) return <></>
	return (
		<Root {...props.DOMAttributes}>
			{props.Data?.outputType === "success-asynchronous" && (
				<>
					<CheckCircleIcon className="badge-icon" />
					<small>
						Script asynchronous invocation has started successfully in the background.
					</small>
				</>
			)}
			{props.Data?.outputType === "success-synchronous" && (
				<>
					<CheckCircleIcon className="badge-icon" />
					<small>Script was successfully invoked without any detectable errors.</small>
				</>
			)}
			{props.Data?.outputType === "error" && (
				<>
					<ErrorIcon className="badge-icon" />
					<small>Script execution was interrupted by unhandled error(s).</small>
				</>
			)}
		</Root>
	)
}
