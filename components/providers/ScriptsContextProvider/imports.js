import { useState, useEffect } from "react"
import { ScriptsContext } from "hooks/contexts/ScriptsContext"
//import Link from 'next/link'
import { CustomAxios } from "models/client/CustomAxios"
export const imports = { useState, useEffect, ScriptsContext, CustomAxios }
