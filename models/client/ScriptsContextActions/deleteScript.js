import { API, Middleware, consola } from './_dependencies'

export function deleteScript({ requestState, Snackbar }, ...args) {
  try {

    return Middleware.withMiddleware(
      {
        ignoreDuplicateRequests: requestState,
        snackbar: {
          Snackbar,
          messages: {
            initial: 'Deleting script.',
            error: 'Unable to delete script.',
            success: 'Done.'
          }
        }
      },
      async () => {
        const { ScriptsAPI } = await API.Scripts()

        return await ScriptsAPI.deleteScript(...args)
      }
    )

  } catch (e) {
    consola.error(e)

    return { error: e,
      message: e.message }
  }
}
