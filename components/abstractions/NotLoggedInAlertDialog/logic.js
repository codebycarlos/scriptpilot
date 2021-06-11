export function logic(imports, props, styleDefault) {
  const { useState, useEffect, getSessionAsync, useNotifications, useRouter } = imports
  const router = useRouter()
  const { AlertDialog, Log } = useNotifications()
  const [
    checkRequested,
    setCheckRequested
  ] = useState(false)
  const checkRate = 2 * 60 * 1000 // Minutes Seconds Milliseconds

  async function checkLoggedIn() {
    try {
      setCheckRequested(true)
      const session = await getSessionAsync()

      if (session) {
        return
      }
      const title = 'Session expired.'
      const contentText = 'You have been logged out due to inactivity.'
      const actions = [
        {
          label: 'Log In',
          onClick: () => {
            router.push('/login')
            AlertDialog.closeDialog()
          }
        }
      ]

      AlertDialog.setDialog({ title,
        contentText,
        actions })
    } catch (e) {
      Log.error(e)
    }
  }

  useEffect(() => {
    checkLoggedIn()
    const interval = setInterval(() => {
      if (!checkRequested) {
        checkLoggedIn()
      }
    }, checkRate)

    return () => clearInterval(interval)
  }, [])


}
