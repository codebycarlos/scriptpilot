import { API, Middleware, consola } from './_dependencies'

export function refreshScripts({ requestState, scriptsState, Snackbar }) {
  try {

    return Middleware.withMiddleware(
      {
        ignoreDuplicateRequests: requestState,
        saveState: scriptsState,
        snackbar: {
          Snackbar,
          messages: {
            initial: 'Refreshing scripts.',
            error: 'Unable to refresh scripts.',
            success: 'Done.'
          }
        }
      },
      async () => {
        const { ScriptsAPI } = await API.Scripts()

        return await ScriptsAPI.getScripts()
      }
    )

  } catch (e) {
    consola.error(e)

    return { error: e,
      message: e.message }
  }
}
