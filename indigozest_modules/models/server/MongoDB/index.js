import { connectAsync } from './connectAsync'
import { isConnected } from './isConnected'
import { connectIfNotConnectedAsync } from './connectIfNotConnectedAsync'

export const MongoDB = { connectAsync,
  isConnected,
  connectIfNotConnectedAsync }
