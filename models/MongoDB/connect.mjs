const mongoose = require("mongoose");

export async function connect() {
	const url = process.env.MONGODB_CONNECT_URL;

	const options = {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	};

	try {
		await mongoose.connect(url, options);
	} catch (e) {
		throw Error(`Unable to establish connection to database. ${e}`);
	}
}
