export function body(imports, props, styleDefault, Root = "div") {
	const {
		ContentGroup,
		LogoWithByline,
		ButtonDefault,
		TextField,
		FormProvider,
		Controller,
		ErrorMessage,
	} = imports

	return (
		<ContentGroup {...props.DOMAttributes}>
			<LogoWithByline src={props.src} byLine={props.byLine} byLineLink={props.byLineLink} />
			{!props.emailToggled && (
				<>
					<form
						method="post"
						action="/api/auth/signin/linkedin"
						style={{ display: "contents" }}
					>
						<input name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
						<input
							type="hidden"
							name="callbackUrl"
							value={`${props.nextAuthCallbackUrl}/linkedin`}
						/>
						<ButtonDefault
							className={`${styleDefault.ButtonDefault} contained primary login`}
							type="submit"
						>
							Continue with LinkedIn
						</ButtonDefault>
						<ButtonDefault
							className={`${styleDefault.ButtonDefault} contained primary login`}
							type="submit"
							onClick={() => props.setEmailToggled((toggled) => !toggled)}
						>
							Continue with Email
						</ButtonDefault>
					</form>
				</>
			)}
			{props.emailToggled && (
				<>
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
				</>
			)}
		</ContentGroup>
	)
}
