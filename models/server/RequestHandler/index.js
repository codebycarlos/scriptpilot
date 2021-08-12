import { protectRouteAsync } from "./protectRouteAsync"
import { methodNotAllowedResponse } from "./methodNotAllowedResponse"
import { runMiddlewareAsync } from "./runMiddlewareAsync"

export const RequestHandler = {
	protectRouteAsync,
	methodNotAllowedResponse,
	runMiddlewareAsync,
}
