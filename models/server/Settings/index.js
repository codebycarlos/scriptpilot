import { ClientSettings } from "./_dependencies"
import { LambdaAsync } from "./LambdaAsync"
import { MongoDBAsync } from "./MongoDBAsync"
import { NextAuthAsync } from "./NextAuthAsync"
import { ZohoAsync } from "./ZohoAsync"

export const Settings = Object.assign(ClientSettings, {
	LambdaAsync,
	MongoDBAsync,
	NextAuthAsync,
	ZohoAsync,
})
