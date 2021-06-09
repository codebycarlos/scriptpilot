import { ClientSessionHandler } from './_dependencies'
import { isValid } from './isValid'

export const SessionHandler = Object.assign(ClientSessionHandler, { isValid })
