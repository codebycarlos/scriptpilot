import { ClientSettings } from "./_dependencies"
import { LambdaAsync } from "./LambdaAsync"
import { MongoDBAsync } from "./MongoDBAsync"
import { NextAuthAsync } from "./NextAuthAsync"

export const Settings = Object.assign(ClientSettings, {
	LambdaAsync,
	MongoDBAsync,
	NextAuthAsync,
})
