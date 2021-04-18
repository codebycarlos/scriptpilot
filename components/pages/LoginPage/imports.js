//import { useState, useEffect, useContext } from 'react';
//import Link from 'next/link';
import FlexPanel from "indigozest_modules/components/containers/FlexPanel";
import MediaQuery from "indigozest_modules/components/containers/MediaQuery";
import BackgroundImage from "indigozest_modules/components/presentationals/BackgroundImage";
import Text from "indigozest_modules/components/presentationals/Text";
import LoginArea from "components/abstractions/LoginArea";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import breakpoints from "styles/default_theme/partials.module.scss";

//import { useSession, getSession, getCsrfToken, signIn } as nextAuth from 'next-auth/client';
export const imports = {
	FlexPanel,
	MediaQuery,
	BackgroundImage,
	Text,
	LoginArea,
	useMediaQuery,
	breakpoints,
};
