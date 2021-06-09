import { useNotifications } from 'indigozest_modules/hooks/extender/useNotifications'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

/*
 * Import Link from 'next/link'
 * import { useSession, getSession, getCsrfToken, signIn } as nextAuth from 'next-auth/client'
 */
export const imports = {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  useNotifications
}
