export function isEmpty(object) {
  if (object == undefined || object === "") return true;
  for (var i in object) return false;
  return true;
}
