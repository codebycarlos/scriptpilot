import { ArgumentValidator } from "./_dependencies.mjs";
export function addExpiryTime(token) {
  ArgumentValidator.check([...arguments]);
  try {
    token = JSON.parse(JSON.stringify(token));
  } catch (e) {
    throw Error(`Invalid token provided: ${e}.`);
  }
  token.expiry_time = Date.now() + token.expires_in * 1000;
  return token;
}
