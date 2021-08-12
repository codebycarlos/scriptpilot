export function body(imports, props, styleDefault, Root = "main") {
	const {
		HorizontalSeparator,
		FormProvider,
		Controller,
		TextField,
		NewScriptVersionActionsPanel,
		ErrorMessage,
		DropzoneField,
	} = imports

	return (
		<FormProvider {...props.methods}>
			<form onSubmit={props.methods.handleSubmit(props.onSubmit)}>
				<h4 className="title">Add Version</h4>
				<HorizontalSeparator />
				<p className="section-title">Configuration</p>
				<fieldset className="configuration">
					<div className="field">
						<div className="field" style={{ display: "none" }}>
							<Controller
								name="FunctionName"
								defaultValue={props.defaultValues?.FunctionName}
								render={({ field }) => (
									<TextField variant="filled" type="hidden" {...field} />
								)}
								shouldUnregister
							/>
						</div>
						<Controller
							name="Description"
							defaultValue=""
							render={({ field }) => (
								<TextField label="Description" variant="filled" {...field} />
							)}
							shouldUnregister
							rules={{
								required: "This field is required.",
								maxLength: {
									value: 256,
									message:
										"Script descriptions are limited to 256 characters in length.",
								},
							}}
						/>
						<ErrorMessage
							name="Description"
							render={({ message }) => (
								<small className="error-label">{message}</small>
							)}
						/>
					</div>
				</fieldset>
				<HorizontalSeparator />
				<p className="section-title">Code</p>
				<div className="file-uploader">
					<DropzoneField
						accept="application/zip, application/x-zip-compressed, multipart/x-zip"
						name="Code"
						maxFiles={1}
						RegisterOptions={{
							required: "This field is required.",
							shouldUnregister: true,
						}}
					/>
					<ErrorMessage
						name="Code"
						render={({ message }) => <small className="error-label">{message}</small>}
					/>
				</div>
				<NewScriptVersionActionsPanel />
			</form>
		</FormProvider>
	)
}
