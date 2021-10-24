/*
 * Import Link from 'next/link'
 * import { useSession, getSession, getCsrfToken, signIn } as nextAuth from 'next-auth/client'
 */
import ContentGroup from "indigozest_modules/components/containers/ContentGroup"
import ButtonDefault from "indigozest_modules/components/input/ButtonDefault"
import LogoWithByline from "indigozest_modules/components/presentationals/LogoWithByline"
import { usePageContext } from "indigozest_modules/hooks/consumer/usePageContext"
import { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { useForm, FormProvider, Controller } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { CustomAxiosAsync } from "models/client/CustomAxiosAsync"
import { Settings } from "models/client/Settings"
import { useWithSnackbar } from "indigozest_modules/hooks/extender/useWithSnackbar"
import { signIn } from "next-auth/client"
export const imports = {
	LogoWithByline,
	ContentGroup,
	ButtonDefault,
	usePageContext,
	useState,
	TextField,
	useForm,
	FormProvider,
	Controller,
	ErrorMessage,
	CustomAxiosAsync,
	Settings,
	useWithSnackbar,
	signIn,
}
