//import { useState, useEffect, useContext } from 'react';
//import Link from 'next/link';
import FlexPanel from "@/components/generic/containers/FlexPanel";
import MediaQuery from "@/components/generic/containers/MediaQuery";
import BackgroundImage from "@/components/generic/presentationals/BackgroundImage";
import Text from "@/components/generic/presentationals/Text";
import LoginArea from "@/components/unique/abstractions/LoginArea";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import breakpoints from "../../../../styles/default_theme/partials.module.scss";

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
