export function body(imports, props, styleDefault, Root = "main") {
	const {
		HorizontalSeparator,
		FormProvider,
		Controller,
		TextField,
		EditScriptActionsPanel,
		ErrorMessage,
		IconButton,
		RemoveIcon,
		AddIcon,
	} = imports

	const { script, defaultValues } = props

	return (
		<FormProvider {...props.methods}>
			<form onSubmit={props.methods.handleSubmit(props.onSubmit)}>
				<h4 className="title">Edit Script - {script?.Configuration.FunctionName}</h4>
				<HorizontalSeparator />
				<p className="section-title">Configuration</p>
				<fieldset className="configuration">
					<div className="field" style={{ display: "none" }}>
						<Controller
							name="FunctionName"
							defaultValue={defaultValues?.FunctionName}
							render={({ field }) => (
								<TextField variant="filled" type="hidden" {...field} />
							)}
							shouldUnregister
						/>
					</div>
					<div className="field">
						<Controller
							name="Description"
							defaultValue={defaultValues?.Description}
							render={({ field }) => (
								<TextField label="Description" variant="filled" {...field} />
							)}
							shouldUnregister
							rules={{
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
					<div className="field">
						<Controller
							name="Role"
							defaultValue={defaultValues?.Role}
							render={({ field }) => (
								<TextField label="Role (ARN)" variant="filled" {...field} />
							)}
							shouldUnregister
							rules={{
								required: "This field is required.",
							}}
						/>
						<ErrorMessage
							name="Role"
							render={({ message }) => (
								<small className="error-label">{message}</small>
							)}
						/>
					</div>
					<div className="field">
						<Controller
							name="Handler"
							defaultValue={defaultValues?.Handler}
							render={({ field }) => (
								<TextField label="Handler" variant="filled" {...field} />
							)}
							shouldUnregister
							rules={{
								required: "This field is required.",
							}}
						/>
						<ErrorMessage
							name="Handler"
							render={({ message }) => (
								<small className="error-label">{message}</small>
							)}
						/>
					</div>
					<div className="field">
						<Controller
							name="MemorySize"
							defaultValue={defaultValues?.MemorySize}
							render={({ field }) => (
								<TextField
									{...field}
									label="Memory Size (MB)"
									type="number"
									variant="filled"
									onChange={(event) => {
										field.onChange(
											!event.target.value || isNaN(event.target.value)
												? ""
												: parseInt(event.target.value),
										)
									}}
									value={
										!field.value || isNaN(field.value)
											? ""
											: parseInt(field.value)
									}
								/>
							)}
							rules={{
								required: "This field is required.",
							}}
							shouldUnregister
						/>
						<ErrorMessage
							name="MemorySize"
							render={({ message }) => (
								<small className="error-label">{message}</small>
							)}
						/>
					</div>
					<div className="field">
						<Controller
							name="Timeout"
							defaultValue={defaultValues?.Timeout}
							render={({ field }) => (
								<TextField
									{...field}
									label="Timeout (s)"
									type="number"
									variant="filled"
									onChange={(event) => {
										field.onChange(
											!event.target.value || isNaN(event.target.value)
												? ""
												: parseInt(event.target.value),
										)
									}}
									value={
										!field.value || isNaN(field.value)
											? ""
											: parseInt(field.value)
									}
								/>
							)}
							rules={{
								min: {
									value: 1,
									message: "Timeout must be between 1 and 30 seconds.",
								},
								max: {
									value: 30,
									message: "Timeout must be between 1 and 30 seconds.",
								},
								required: "This field is required.",
							}}
							shouldUnregister
						/>
						<ErrorMessage
							name="Timeout"
							render={({ message }) => (
								<small className="error-label">{message}</small>
							)}
						/>
					</div>
				</fieldset>
				<HorizontalSeparator />
				<p className="section-title">Environment Variables</p>
				<div className="environment-variables">
					{props.inputFields.map((inputField) => (
						<fieldset className="environment-variable" key={inputField.id}>
							<Controller
								name={`Environment.key.${inputField.id}`}
								defaultValue={inputField.key}
								render={({ field }) => (
									<TextField label="Key" variant="filled" {...field} />
								)}
								shouldUnregister
							/>
							<Controller
								name={`Environment.value.${inputField.id}`}
								defaultValue={inputField.value}
								render={({ field }) => (
									<TextField label="Value" variant="filled" {...field} />
								)}
								shouldUnregister
							/>
							<IconButton
								disabled={props.inputFields.length === 1}
								onClick={() => props.handleRemoveFields(inputField.id)}
							>
								<RemoveIcon />
							</IconButton>
							<IconButton onClick={props.handleAddFields}>
								<AddIcon />
							</IconButton>
						</fieldset>
					))}
				</div>
				<EditScriptActionsPanel />
			</form>
		</FormProvider>
	)
}
