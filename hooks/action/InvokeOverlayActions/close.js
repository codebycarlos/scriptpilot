export function close({ Data, setState }) {
	setState({ ...Data, open: false })
}
