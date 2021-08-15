export function body(imports, props, styleDefault, Root = "div") {
	const {
		IconButton,
		RemoveIcon,
		AddIcon,
		FormProvider,
		Controller,
		InvokeActionsPanel,
		TextField,
		RadioGroup,
		FormControlLabel,
		Radio,
		HorizontalSeparator,
		HelpIcon,
		ReactTooltip,
	} = imports
	const { inputFields, handleAddFields, handleRemoveFields, script } = props
	return (
		<Root {...props.DOMAttributes}>
			<form onSubmit={props.methods.handleSubmit(props.invokeCallback)}>
				<div style={{ display: "content" }}>
					<h4 style={{ margin: "unset" }}>{script.FunctionName}</h4>
					<HorizontalSeparator />
					<p className="section-title">Input</p>
				</div>
				<FormProvider {...props.methods}>
					{inputFields.map((inputField) => (
						<fieldset key={inputField.id}>
							<Controller
								name={`Payload.key.${inputField.id}`}
								defaultValue=""
								render={({ field }) => (
									<TextField label="Key" variant="filled" {...field} />
								)}
								shouldUnregister
							/>
							<Controller
								name={`Payload.value.${inputField.id}`}
								defaultValue=""
								render={({ field }) => (
									<TextField label="Value" variant="filled" {...field} />
								)}
								shouldUnregister
							/>
							<IconButton
								disabled={inputFields.length === 1}
								onClick={() => handleRemoveFields(inputField.id)}
							>
								<RemoveIcon />
							</IconButton>
							<IconButton onClick={handleAddFields}>
								<AddIcon />
							</IconButton>
						</fieldset>
					))}
					<div className="invocation-type-label-with-help-icon">
						<p className="section-title">Invocation Type</p>
						<HelpIcon
							data-tip="The invocation type affects how your script's code is ran<br>Synchronous: invoke script and wait for a response (30 seconds max).<br>Asynchronous: invoke script in the background without waiting for a response (900 seconds max)."
							data-multiline={true}
							data-effect="solid"
							data-place="right"
							data-offset="{'top': 50}"
						/>
					</div>
					<Controller
						rules={{ required: true }}
						defaultValue="RequestResponse"
						name="InvocationType"
						render={({ field }) => (
							<RadioGroup {...field}>
								<FormControlLabel
									value="RequestResponse"
									control={<Radio />}
									label="Synchronous"
								/>
								<FormControlLabel
									value="Event"
									control={<Radio />}
									label="Asynchronous"
								/>
							</RadioGroup>
						)}
						shouldUnregister
					/>
				</FormProvider>
				<InvokeActionsPanel />
			</form>
			<ReactTooltip />
		</Root>
	)
}
