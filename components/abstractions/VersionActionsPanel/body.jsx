export function body(imports, props, styleDefault, Root = "div") {
	const {
		ButtonDefault,
		ActionsPanel,
		Link,
		GetAppIcon,
		FlashOnIcon,
		DeleteOutlineIcon,
		VpnKeyIcon,
	} = imports
	if (!props?.script || props?.error) return
	return (
		<ActionsPanel {...props.DOMAttributes}>
			<Link href={`${props?.script?.Code?.Location}`}>
				<ButtonDefault className="contained secondary" title="Download">
					<GetAppIcon />
					<p>Download</p>
				</ButtonDefault>
			</Link>
			<ButtonDefault
				className="contained secondary"
				title="Delete"
				onClick={() => props.handleDelete()}
			>
				<DeleteOutlineIcon />
				<p>Delete</p>
			</ButtonDefault>
			{!props?.script?.Configuration?.APIEndpointURL && (
				<ButtonDefault
					className="contained secondary"
					title="Add Version"
					onClick={() => props.handleAddAPIKey()}
				>
					<VpnKeyIcon />
					<p>API Key</p>
				</ButtonDefault>
			)}
			<ButtonDefault
				className="contained primary"
				title="Invoke"
				onClick={props.handleInvoke}
			>
				<FlashOnIcon />
				<p>Invoke</p>
			</ButtonDefault>
		</ActionsPanel>
	)
}
