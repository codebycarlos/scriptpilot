import { useCallback, useEffect, useMemo } from "./_dependencies"
import { useDropzone } from "./_dependencies"
import { useFormContext } from "./_dependencies"

const DropzoneField = (props) => {
	const { name } = props
	const { register, setValue, watch } = useFormContext()
	const files = watch(name)

	const onDropAccepted = useCallback(
		(droppedFiles) => setValue(name, droppedFiles, { shouldValidate: true }),
		[setValue, name],
	)
	const { getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept } = useDropzone({
		onDropAccepted,
		accept: props?.accept,
		maxFiles: props?.maxFiles,
	})

	const baseStyle = {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "20px",
		borderWidth: 2,
		borderRadius: 2,
		borderColor: "#eeeeee",
		borderStyle: "dashed",
		color: "#bdbdbd",
		outline: "none",
		transition: "border .24s ease-in-out",
	}

	const activeStyle = {
		borderColor: "#2196f3",
	}

	const acceptStyle = {
		borderColor: "#00e676",
	}

	const rejectStyle = {
		borderColor: "#ff1744",
	}

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isDragActive, isDragReject, isDragAccept],
	)

	return (
		<>
			<div {...getRootProps({ style })} type="file" role="button" id={name}>
				<input
					{...register(name, props?.RegisterOptions)}
					{...props}
					{...getInputProps()}
				/>
				<div>
					<p style={{ textAlign: "center" }}>
						Drag &amp; drop or click to select Zip file.
					</p>

					{!!files?.length && (
						<div>
							{files.map((file) => {
								return (
									<div key={file.name}>
										<img
											src={URL.createObjectURL(file)}
											alt={file.name}
											style={{
												height: "100px",
											}}
										/>
									</div>
								)
							})}
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default DropzoneField
