import { useEffect } from "react"
import { ScriptContext } from "hooks/context/ScriptContext"
import { useScript } from "hooks/extender/useScript"
import { usePageContext } from "indigozest_modules/hooks/consumer/usePageContext"
export const imports = {
	useEffect,
	ScriptContext,
	useScript,
	usePageContext,
}
