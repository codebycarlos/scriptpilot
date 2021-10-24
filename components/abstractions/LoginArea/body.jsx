export function body(imports, props, styleDefault, Root = "div") {
	const {
		ContentGroup,
		LogoWithByline,
		ButtonDefault,
		TextField,
		FormProvider,
		Controller,
		ErrorMessage,
		signIn,
	} = imports

	return (
		<ContentGroup {...props.DOMAttributes}>
			<LogoWithByline src={props.src} byLine={props.byLine} byLineLink={props.byLineLink} />
			{!props.emailToggled && props?.providers && (
				<div style={{ display: "contents" }}>
					{Object.values(props.providers).map((provider) => {
						if (provider.name === "Email") return
						return (
							<ButtonDefault
								key={provider.name}
								className={`${styleDefault.ButtonDefault} contained primary login`}
								onClick={() => {
									try {
										signIn(provider.id, {
											callbackUrl: provider.callbackUrl,
										})
									} catch (e) {
										console.log("There was an issue logging in.")
									}
								}}
								type="button"
							>
								Continue with&nbsp;
								{provider.name}
							</ButtonDefault>
						)
					})}
					<ButtonDefault
						className={`${styleDefault.ButtonDefault} contained primary login`}
						type="button"
						onClick={() => props.setEmailToggled((toggled) => !toggled)}
					>
						Continue with Email
					</ButtonDefault>
				</div>
			)}
			{props.emailToggled && (
				<FormProvider {...props.methods}>
					<form onSubmit={props.methods.handleSubmit(props.onSubmit)}>
						<fieldset>
							<input
								name="csrfToken"
								type="hidden"
								defaultValue={props.csrfToken}
								{...props.methods.register("csrfToken")}
							/>
							<div className="field small">
								<Controller
									name="email"
									type="email"
									render={({ field }) => (
										<TextField
											label="Email"
											variant="filled"
											size="small"
											{...field}
										/>
									)}
									shouldUnregister
									rules={{
										required: {
											value: true,
											message: "This field is required.",
										},
										pattern: {
											value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
											message: "Please enter a valid email.",
										},
									}}
								/>
								<ErrorMessage
									name="email"
									render={({ message }) => (
										<small className="error-label">{message}</small>
									)}
								/>
							</div>
							<ButtonDefault
								className={`${styleDefault.ButtonDefault} contained primary login`}
								type="submit"
							>
								Request Login Link
							</ButtonDefault>
							<ButtonDefault
								className={`${styleDefault.ButtonDefault} contained secondary login`}
								type="submit"
								onClick={() => props.setEmailToggled((toggled) => !toggled)}
							>
								Cancel
							</ButtonDefault>
						</fieldset>
					</form>
				</FormProvider>
			)}
		</ContentGroup>
	)
}
