import { ArgumentValidator } from './_dependencies'
import { isConnected } from './isConnected'
import { connectAsync } from './connectAsync'
export async function connectIfNotConnectedAsync(url) {
  ArgumentValidator.check([...arguments])

  if (!isConnected()) await connectAsync(url)
}
