import { protectRoute } from "./protectRoute"
import { assessRequestAccessRights } from "./assessRequestAccessRights"
import { tryAssessRequestAccessRights } from "./tryAssessRequestAccessRights"
import { tryGetSession } from "./tryGetSession"
export const RequestHandler = {
	protectRoute,
	assessRequestAccessRights,
	tryAssessRequestAccessRights,
	tryGetSession,
}
