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
		Description: script.Configuration.Description,
		Role: script.Configuration.Role,
		Handler: script.Configuration.Handler,
		MemorySize: script.Configuration.MemorySize,
		Timeout: script.Configuration.Timeout,
		Environment: script.Configuration.Environment,
	}

	props.methods = useForm()

	props.onSubmit = useWithSnackbar(
		async (data) => {
			const Input = {
				...data,
				Environment: formatAsJSON(data.Environment),
			}

			if (JSON.stringify(Input) === JSON.stringify(props.defaultValues))
				throw Error("Cancelled. No changes detected.")

			await Actions.editScriptAsync({ Input })
			router.push(`/scripts/${props.defaultValues.FunctionName}`)
		},
		{ messages: { initial: "Editing script.", success: "Done. Redirecting." } },
	)

	let defaultInputFields = []

	if (props.defaultValues?.Environment?.Variables) {
		for (const [key, value] of Object.entries(props.defaultValues?.Environment?.Variables)) {
			defaultInputFields.push({
				id: uuidv4(),
				key,
				value,
			})
		}
	} else {
		defaultInputFields.push({
			id: uuidv4(),
			key: null,
			value: null,
		})
	}

	const [inputFields, setInputFields] = useState(
		defaultInputFields === [] ? [{ id: uuidv4() }] : defaultInputFields,
	)

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
