import "styles/default_theme/global.scss";
import Head from "components/abstractions/Head";
import { Provider as SessionProvider } from "next-auth/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import LogRocket from "components/abstractions/LogRocket";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

//Binding events for loading bar animation
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
	const [jssRemoved, setJssRemoved] = useState(false);

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
		setJssRemoved(true);
	}, []);

	return (
		<SessionProvider
			session={pageProps.session}
			options={
				{ clientMaxAge: process.env.SESSION_CLIENT_MAX_AGE_IN_SECONDS } // Re-fetch session if cache is older than specified seconds
			}
		>
			<LogRocket />
			<CssBaseline />
			<StylesProvider injectFirst>
				<Head />
				{
					/* Rendering of components delayed until server-side injected CSS 
					is removed to prevent flickering and layout shifting. */
					jssRemoved && (
						<div className="react-App">
							<Component {...pageProps} className="react-Page"/>
						</div>
					)
				}
			</StylesProvider>
		</SessionProvider>
	);
}
