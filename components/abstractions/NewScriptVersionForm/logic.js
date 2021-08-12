export function logic(imports, props, styleDefault) {
	const { useState, useForm, uuidv4, useScriptContext, useWithSnackbar, useRouter } = imports
	const router = useRouter()
	const {
		Data: { script },
		Actions,
	} = useScriptContext()

	props.script = script

	props.defaultValues = {
		FunctionName: script.Configuration.FunctionName,
	}

	props.methods = useForm()

	props.onSubmit = useWithSnackbar(
		async (data) => {
			const ZipFile = data.Code ? await readFile(data.Code[0]) : null

			const Input = {
				...data,
				ZipFile,
			}

			await Actions.publishVersionAsync({ Input })
			router.push(`/scripts/${props.defaultValues.FunctionName}`)
		},
		{
			messages: {
				initial: "Publishing script version.",
				success: "Done. Redirecting.",
			},
		},
	)

	const [inputFields, setInputFields] = useState([{ id: uuidv4() }])

	const readFile = async (file) => {
		return new Promise((resolve) => {
			let reader = new FileReader()

			reader.readAsDataURL(file)

			reader.onload = () => resolve(reader.result?.split("base64,")[1])
		})
	}

	props.handleAddFields = () => {
		setInputFields([...inputFields, { id: uuidv4() }])
	}

	props.handleRemoveFields = (id) => {
		const values = [...inputFields]
		values.splice(
			values.findIndex((value) => value.id === id),
			1,
		)
		setInputFields(values)
		props.methods.unregister(`key.${id}`)
		props.methods.unregister(`value.${id}`)
	}

	return { ...props, inputFields }
}
