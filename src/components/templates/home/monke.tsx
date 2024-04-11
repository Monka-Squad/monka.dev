import { useTheme } from "next-themes";
import React from "react";

const Monke = () => {
	const { setTheme, resolvedTheme } = useTheme();

	return (
		<button
			className="font-bold hover:text-orange-700 dark:hover:text-blue-300 transition-colors"
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
		>
			monke
		</button>
	);
};

export default Monke;
