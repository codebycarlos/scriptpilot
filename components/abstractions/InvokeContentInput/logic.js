export function logic(imports, props, styleDefault) {
	const { useState, useEffect, useForm, uuidv4, useInvokeOverlayContext } = imports
	const { Data, Actions: InvokeOverlayActions } = useInvokeOverlayContext()
	const [inputFields, setInputFields] = useState([{ id: uuidv4() }])

	props.methods = useForm()

	const formatAsJSON = ({ key, value }) => {
		const keys = Object.values(key)
		const values = Object.values(value)
		const keysAndValues = {}

		keys.forEach((key, index) => (keysAndValues[key] = values[index]))

		return JSON.stringify(keysAndValues)
	}

	props.invokeCallback = (Payload) => {
		Data.invokeCallback({ Payload: formatAsJSON(Payload) })
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

	return { ...props, inputFields, Data }
}
