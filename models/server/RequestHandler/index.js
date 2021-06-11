import { protectRouteAsync } from "./protectRouteAsync"
import { assessRequestAccessRightsAsync } from "./assessRequestAccessRightsAsync"
import { tryAssessRequestAccessRightsAsync } from "./tryAssessRequestAccessRightsAsync"
import { tryGetSession } from "./tryGetSession"
import { methodNotAllowedResponse } from "./methodNotAllowedResponse"
import { runMiddlewareAsync } from "./runMiddlewareAsync"

export const RequestHandler = {
	protectRouteAsync,
	assessRequestAccessRightsAsync,
	tryAssessRequestAccessRightsAsync,
	tryGetSession,
	methodNotAllowedResponse,
	runMiddlewareAsync,
}
