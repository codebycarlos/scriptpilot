import { ArgumentValidator, mongoose } from "./_dependencies"
export async function connectAsync(url) {
	ArgumentValidator.check([...arguments])

	const options = {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	}

	await mongoose.connect(url, options)
}
