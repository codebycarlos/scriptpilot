import { validateArguments } from "../../_utils/validation/validateArguments.mjs";
export function isActive(token) {
  validateArguments([...arguments, token.expiry_time]);
  const acceptableSecondsBeforeExpiry = 15 * 60 * 60; // Quantity * Minutes * Seconds
  const currentTime = Date.now();
  if (currentTime > token.expiry_time) return false;
  return currentTime - token.expiry_time <= acceptableSecondsBeforeExpiry;
}
