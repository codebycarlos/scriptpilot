import ActionsPanel from "components/containers/ActionsPanel"
import ButtonDefault from "indigozest_modules/components/input/ButtonDefault"
import Link from "next/link"
import { useScriptContext } from "hooks/consumer/useScriptContext"
import { useNotifications } from "indigozest_modules/hooks/extender/useNotifications"
import { useWithSnackbar } from "indigozest_modules/hooks/extender/useWithSnackbar"
import { useRouter } from "next/router"
import GetAppIcon from "@material-ui/icons/GetApp"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import { useInvokeOverlayContext } from "hooks/consumer/useInvokeOverlayContext"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
export const imports = {
	ActionsPanel,
	ButtonDefault,
	useScriptContext,
	useNotifications,
	useWithSnackbar,
	Link,
	useRouter,
	GetAppIcon,
	FlashOnIcon,
	DeleteOutlineIcon,
	useInvokeOverlayContext,
	VpnKeyIcon,
}
