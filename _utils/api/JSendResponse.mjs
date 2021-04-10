import { validateArguments } from "../validation/validateArguments.mjs";
import { JSend } from "./JSend.mjs";
export function JSendResponse(res) {
  validateArguments([...arguments]);
  return {
    success: ({ data = "", status = 200 } = {}) => {
      res.status(status).json(JSend.success(data));
    },
    fail: ({ data = "", status = 400 } = {}) =>
      res.status(status).json(JSend.fail(data)),
    failDetailed: ({ message = "", code = "", status = 400 } = {}) =>
      res.status(status).json(JSend.failDetailed(message, code)),
    error: ({ message = "", code = "", data = "", status = 500 } = {}) =>
      res.status(status).json(JSend.error(message, code, data)),
  };
}
