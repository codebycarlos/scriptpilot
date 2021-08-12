export function body(imports, props, styleDefault, Root = "div") {
	const { CheckCircleIcon, ErrorIcon } = imports
	if (!props?.Data?.outputType) return <></>
	return (
		<Root {...props.DOMAttributes}>
			{props.Data?.outputType === "success" && (
				<>
					<CheckCircleIcon className="badge-icon" />
					<small>Script was invoked successfully without any detectable errors.</small>
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
