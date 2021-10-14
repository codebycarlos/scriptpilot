import HorizontalSeparator from "components/presentationals/HorizontalSeparator"
import TextField from "@material-ui/core/TextField"
import { useForm, FormProvider, Controller } from "react-hook-form"
import NewScriptActionsPanel from "components/abstractions/NewScriptActionsPanel"
import { ErrorMessage } from "@hookform/error-message"
import IconButton from "@material-ui/core/IconButton"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import DropzoneField from "components/inputs/DropzoneField"
import { useScriptContext } from "hooks/consumer/useScriptContext"
import { useWithSnackbar } from "indigozest_modules/hooks/extender/useWithSnackbar"
import { useRouter } from "next/router"
export const imports = {
	useRouter,
	useEffect,
	useState,
	uuidv4,
	HorizontalSeparator,
	useForm,
	FormProvider,
	Controller,
	TextField,
	NewScriptActionsPanel,
	ErrorMessage,
	IconButton,
	RemoveIcon,
	AddIcon,
	DropzoneField,
	useScriptContext,
	useWithSnackbar,
}
