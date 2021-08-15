export function body(imports, props, styleDefault, Root = "main") {
	const {
		HorizontalSeparator,
		FormProvider,
		Controller,
		TextField,
		NewScriptActionsPanel,
		ErrorMessage,
		IconButton,
		RemoveIcon,
		AddIcon,
		DropzoneField,
		useEffect,
	} = imports

	return (
		<FormProvider {...props.methods}>
			<form onSubmit={props.methods.handleSubmit(props.onSubmit)}>
				<h4 className="title">New Script</h4>
				<HorizontalSeparator />
				<p className="section-title">Configuration</p>
				<fieldset className="configuration">
					<div className="field">
						<Controller
							name="FunctionName"
							defaultValue=""
							render={({ field }) => (
								<TextField label="Script Name" variant="filled" {...field} />
							)}
							shouldUnregister
							rules={{
								required: "This field is required.",
								maxLength: {
									value: 64,
									message: "Script names are limited to 64 characters in length.",
								},
							}}
						/>
						<ErrorMessage
							name="FunctionName"
							render={({ message }) => (
								<small className="error-label">{message}</small>
							)}
						/>
					</div>
					<div className="field">
						<Controller
							name="Description"
							defaultValue=""
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
							defaultValue="arn:aws:iam::031972593472:role/scriptpilot-function"
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
							defaultValue="index.handler"
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
					<div className="field" style={{ display: "none" }}>
						<Controller
							name="PackageType"
							defaultValue="Zip"
							render={({ field }) => (
								<TextField variant="filled" type="hidden" {...field} />
							)}
							shouldUnregister
						/>
					</div>
					<div className="field">
						<select
							{...props.methods.register("Runtime", {
								required: "This field is required.",
							})}
						>
							<option value="nodejs14.x">Nodejs 14.x</option>
							<option value="nodejs12.x">Nodejs 12.x</option>
							<option value="nodejs10.x">Nodejs 10.x</option>
							<option value="java 11">Java 11</option>
							<option value="java 8">Java 8</option>
							<option value="go1.x">Go 1.x</option>
							<option value="python3.8">Python 3.8</option>
							<option value="python3.7">Python 3.7</option>
							<option value="python3.6">Python 3.6</option>
							<option value="python2.7">Python 2.7</option>
							<option value="ruby2.5">Ruby 2.5</option>
							<option value="dotnetcore2.1">.NET Core 2.1</option>
						</select>
						<ErrorMessage
							name="RunTime"
							render={({ message }) => (
								<small className="error-label">{message}</small>
							)}
						/>
					</div>
					<div className="field">
						<Controller
							name="MemorySize"
							defaultValue={128}
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
							defaultValue={60}
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
									message: "Timeout must be between 1 and 900 seconds.",
								},
								max: {
									value: 900,
									message: "Timeout must be between 1 and 900 seconds.",
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
								defaultValue=""
								render={({ field }) => (
									<TextField label="Key" variant="filled" {...field} />
								)}
								shouldUnregister
							/>
							<Controller
								name={`Environment.value.${inputField.id}`}
								defaultValue=""
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
				<NewScriptActionsPanel />
			</form>
		</FormProvider>
	)
}
