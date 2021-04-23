import "styles/default_theme/global.scss";
import Head from "components/abstractions/Head";
import { Provider as SessionProvider } from "next-auth/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/core/styles";
import { useEffect } from "react";
import LogRocket from "components/abstractions/LogRocket";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<SessionProvider
			session={pageProps.session}
			options={
				{ clientMaxAge: 600 } // Re-fetch session if cache is older than specified seconds
			}
		>
			<LogRocket />
			<CssBaseline />
			<StylesProvider injectFirst>
				<Head />
				<Component {...pageProps} className="page" />
			</StylesProvider>
		</SessionProvider>
	);
}
