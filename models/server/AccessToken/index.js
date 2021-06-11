import { addExpiryTime } from './addExpiryTime'
import { fetchNewAsync } from './fetchNewAsync'
import { getAccessCodeAsync } from './getAccessCodeAsync'
import { isActive } from './isActive'
import { save } from './save'
import { Token } from './_dependencies'

export const AccessToken = {
  addExpiryTime,
  fetchNewAsync,
  getAccessCodeAsync,
  isActive,
  save,
  load: Token.load,
  isLocked: Token.isLocked
}
