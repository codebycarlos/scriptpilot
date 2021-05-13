import { ArgumentValidator, mongoose } from "./_dependencies"
export async function connect(url) {
	ArgumentValidator.check([...arguments])

	const options = {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	}

	try {
		await mongoose.connect(url, options)
	} catch (e) {
		throw Error(`Unable to establish connection to database. ${e}`)
	}
}
