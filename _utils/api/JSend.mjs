export const JSend = {
  success: (data = "") => JSON.stringify({ status: "success", data: data }),
  fail: (data = "") => JSON.stringify({ status: "fail", data: data }),
  failDetailed: (message = "", code = "") =>
    JSON.stringify({ status: "fail", data: { message: message, code: code } }),
  error: (message = "", code = "", data = "") =>
    JSON.stringify({
      status: "error",
      message: message,
      code: code,
      data: data,
    }),
};
