import { protectRoute } from "./protectRoute"
import { assessRequestAccessRights } from "./assessRequestAccessRights"
import { tryAssessRequestAccessRights } from "./tryAssessRequestAccessRights"
import { tryGetSession } from "./tryGetSession"
import { methodNotAllowedResponse } from "./methodNotAllowedResponse"
import { runMiddleware } from "./runMiddleware"

export const RequestHandler = {
	protectRoute,
	assessRequestAccessRights,
	tryAssessRequestAccessRights,
	tryGetSession,
	methodNotAllowedResponse,
	runMiddleware,
}
