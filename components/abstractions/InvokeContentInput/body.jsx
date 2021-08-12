export function body(imports, props, styleDefault, Root = "div") {
	const {
		IconButton,
		RemoveIcon,
		AddIcon,
		FormProvider,
		Controller,
		InvokeActionsPanel,
		TextField,
	} = imports
	const { inputFields, handleAddFields, handleRemoveFields } = props
	return (
		<Root {...props.DOMAttributes}>
			<form onSubmit={props.methods.handleSubmit(props.invokeCallback)}>
				<p className="section-title">Input</p>
				<FormProvider {...props.methods}>
					{inputFields.map((inputField) => (
						<fieldset key={inputField.id}>
							<Controller
								name={`key.${inputField.id}`}
								defaultValue=""
								render={({ field }) => (
									<TextField label="Key" variant="filled" {...field} />
								)}
								shouldUnregister
							/>
							<Controller
								name={`value.${inputField.id}`}
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
				</FormProvider>
				<InvokeActionsPanel />
			</form>
		</Root>
	)
}
