// Core
import { useState, useEffect } from "react"
import Head from "components/abstractions/Head"
import Router from "next/router"
import Settings from "models/server/Settings"
import PageContextProvider from "components/providers/PageContextProvider"

// Style
import CssBaseline from "@material-ui/core/CssBaseline"
import { StylesProvider as MaterialUIStylesProvider } from "@material-ui/core/styles"
import "styles/default_theme/global.scss"

// Extensions
import { Provider as SessionProvider } from "next-auth/client"
import LogRocket from "components/abstractions/LogRocket"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

//Binding events for loading bar animation
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default function App({ Component, pageProps }) {
	const [jssRemoved, setJssRemoved] = useState(false)

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
		setJssRemoved(true)
	}, [])

	return (
		<SessionProvider
			Session={pageProps.Session}
			options={
				{ clientMaxAge: process.env.NEXT_PUBLIC_SESSION_CLIENT_MAX_AGE_IN_SECONDS } // Re-fetch Session if cache is older than specified seconds
			}
		>
			<LogRocket />
			<CssBaseline />
			<MaterialUIStylesProvider injectFirst>
				<PageContextProvider value={pageProps}>
					<Head />
					{
						/* Rendering of components delayed until server-side injected CSS 
					is removed to prevent flickering and layout shifting. */
						jssRemoved && (
							<div className="react-App">
								<Component {...pageProps} className="react-Page" />
							</div>
						)
					}
				</PageContextProvider>
			</MaterialUIStylesProvider>
		</SessionProvider>
	)
}
