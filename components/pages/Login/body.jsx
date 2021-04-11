export function body(imports, props, styleDefault, Root = "div") {
	const { BackgroundImage, spaceImage } = imports;
	return (
		<Root {...props.DOMAttributes}>
			<div className="giantText">
				<p>LET YOUR CODE TAKE OFF</p>
			</div>
			<BackgroundImage
				src={spaceImage}
				alt="Rocket tacking off into space."
				quality={100}
				layout="fill"
			/>
		</Root>
	);
}
