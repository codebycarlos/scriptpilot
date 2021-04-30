export function throwErrorIfHttpStatusUnsuccessful(data) {
	if (!"httpStatusCode" in data.$metadata)
		throw Error(`Unable to read http status code to verify success. ${data}`);

	if (data.$metadata.httpStatusCode !== 200)
		throw Error(`Unable to fetch account settings. Data received: ${data}`);
}
