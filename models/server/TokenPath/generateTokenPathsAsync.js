import { Try } from "./_dependencies"
import { generateAccessTokenPathAsync } from "./generateAccessTokenPathAsync"
import { generateRefreshTokenPathAsync } from "./generateRefreshTokenPathAsync"

export async function generateTokenPathsAsync(orgId) {
	if (!orgId) throw Error("No org id provided.")

	const [accessTokenPath, errorAccessTokenPath] = await Try(() =>
		generateAccessTokenPathAsync(orgId),
	)

	const [refreshTokenPath, errorRefreshTokenPath] = await Try(() =>
		generateRefreshTokenPathAsync(orgId),
	)

	if (errorAccessTokenPath || errorRefreshTokenPath) throw Error("Error generating token paths.")

	return { accessTokenPath, refreshTokenPath }
}
