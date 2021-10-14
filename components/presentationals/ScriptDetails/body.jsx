export function body(imports, props, styleDefault, Root = "div") {
	const { TextField } = imports

	return (
		<Root {...props.DOMAttributes}>
			{props?.error && (
				<p>
					<b>Error: </b>Unable to load script details.
				</p>
			)}
			{!props?.error &&
				props?.fields.map(
					(field) =>
						props?.script?.Configuration[field.attributeName] && (
							<TextField
								label={field.label}
								type="text"
								InputProps={{
									readOnly: true,
								}}
								value={
									field.attributeName === "LastModified"
										? new Date(
												props?.script?.Configuration[field.attributeName],
										  ).toUTCString()
										: props?.script?.Configuration[field.attributeName]
								}
								variant="filled"
								color="white"
							/>
						),
				)}
		</Root>
	)
}
