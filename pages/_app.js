import "@styles/default_theme/global.scss";
import Head from "@components/unique/abstractions/Head";
import { Provider as SessionProvider } from "next-auth/client";
import { StylesProvider } from "@material-ui/core/styles";
import { useEffect } from "react";

export default function Page({ Component, pageProps }) {
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
			<StylesProvider injectFirst>
				<Head />
				<Component {...pageProps} className="page" />
			</StylesProvider>
		</SessionProvider>
	);
}
