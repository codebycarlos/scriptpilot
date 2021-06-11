import { ClientSessionHandler } from './_dependencies'
import { isValidAsync } from './isValidAsync'

export const SessionHandler = Object.assign(ClientSessionHandler, { isValidAsync })
