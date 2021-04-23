import { useState, useEffect } from "./_dependencies.js";
export const useIsMounted = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
		return () => setIsMounted(false);
	}, []);

	return isMounted;
};
