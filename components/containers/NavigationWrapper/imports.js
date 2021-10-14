import MenuResponsive from "components/abstractions/MenuResponsive"
import Content from "components/containers/Content"
import MediaQuery from "indigozest_modules/components/containers/MediaQuery"
import NotLoggedInAlertDialog from "components/abstractions/NotLoggedInAlertDialog"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import breakpoint from "styles/default_theme/_partial.module.scss"
import Footer from "components/abstractions/Footer"
export const imports = {
	MenuResponsive,
	Content,
	Footer,
	NotLoggedInAlertDialog,
	MediaQuery,
	useMediaQuery,
	breakpoint,
}
