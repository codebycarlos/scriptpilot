export function logic(imports, props, styleDefault) {
	const { useState, useForm, uuidv4, useScriptContext, useWithSnackbar, useRouter } = imports
	const router = useRouter()
	const { Actions } = useScriptContext()

	props.methods = useForm()

	props.onSubmit = useWithSnackbar(
		async (data) => {
			const Input = {
				...data,
				Code: {
					ZipFile: await readFile(data.Code[0]),
				},
				Environment: formatAsJSON(data.Environment),
			}

			const script = await Actions.createScriptAsync({ Input })
			router.push(`/scripts/${script.FunctionName}`)
		},
		{ messages: { initial: "Creating script.", success: "Done. Redirecting." } },
	)

	const [inputFields, setInputFields] = useState([{ id: uuidv4() }])

	const readFile = async (file) => {
		return new Promise((resolve) => {
			let reader = new FileReader()

			reader.readAsDataURL(file)

			reader.onload = () => resolve(reader.result?.split("base64,")[1])
		})
	}
	const formatAsJSON = ({ key, value }) => {
		const keys = Object.values(key)
		const values = Object.values(value)

		const keysAndValues = {}

		keys.forEach((key, index) => {
			if (!key || key === "") return
			keysAndValues[key] = values[index]
		})

		if (Object.keys(keysAndValues).length === 0) return
		return { Variables: keysAndValues }
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
