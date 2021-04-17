import { ArgumentValidator } from "./_dependencies.mjs";
export function isActive(token) {
  ArgumentValidator.check([...arguments, token.expiry_time]);
  const acceptableSecondsBeforeExpiry = 15 * 60 * 60; // Quantity * Minutes * Seconds
  const currentTime = Date.now();
  if (currentTime > token.expiry_time) return false;
  return currentTime - token.expiry_time <= acceptableSecondsBeforeExpiry;
}
