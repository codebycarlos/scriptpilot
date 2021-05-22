import { ClientSettings } from "./_dependencies"
import { Lambda } from "./Lambda"
import { MongoDB } from "./MongoDB"
import { NextAuth } from "./NextAuth"
import { Zoho } from "./Zoho"

export const Settings = Object.assign( ClientSettings, {
	Lambda,
	MongoDB,
	NextAuth,
	Zoho,
})
