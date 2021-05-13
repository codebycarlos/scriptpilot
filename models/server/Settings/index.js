import { Brand } from "./Brand"
import { Core } from "./Core"
import { Lambda } from "./Lambda"
import { Mongo } from "./Mongo"
import { NextAuth } from "./NextAuth"
import { Zoho } from "./Zoho"

export const Settings = {
	Brand: Brand(),
    Core: Core(),
    Lambda: Lambda(),
    Mongo: Mongo(),
    NextAuth: NextAuth(),
    Zoho: Zoho()
}
