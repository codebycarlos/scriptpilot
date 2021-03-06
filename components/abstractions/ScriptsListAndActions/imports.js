import { useState } from "react"

/*
 * Import Link from 'next/link'
 * import { useSession, getSession, getCsrfToken, signIn } as nextAuth from 'next-auth/client'
 */
import Link from "next/link"
import ScriptsDataGrid from "components/presentationals/ScriptsDataGrid"
import AddIcon from "@material-ui/icons/Add"
import RefreshIcon from "@material-ui/icons/Refresh"
import ButtonDefault from "indigozest_modules/components/input/ButtonDefault"
import ActionsPanel from "components/containers/ActionsPanel"
import { useScriptsContext } from "hooks/consumer/useScriptsContext"
import { useWithSnackbar } from "indigozest_modules/hooks/extender/useWithSnackbar"
export const imports = {
	Link,
	useState,
	ScriptsDataGrid,
	ActionsPanel,
	ButtonDefault,
	AddIcon,
	RefreshIcon,
	useScriptsContext,
	useWithSnackbar,
}
