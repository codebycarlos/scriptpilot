import { ArgumentValidator, JSONFile } from './_dependencies'
import { addExpiryTime } from './addExpiryTime'
export function save(newToken, targetPath) {
  ArgumentValidator.check([...arguments])
  newToken = addExpiryTime(newToken)
  JSONFile.save(newToken, targetPath)
}
