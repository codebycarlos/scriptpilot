export async function Mongo() {
	return {
		cluster0UserName: process.env.MONGODB_CLUSTER0_USERNAME,
		cluster0Password: process.env.MONGODB_CLUSTER0_PASSWORD,
		defaultDatabseName: process.env.MONGODB_CONNECT_DATABASE_NAME,
		connectUrl: process.env.MONGODB_CONNECT_URL,
	}
}
