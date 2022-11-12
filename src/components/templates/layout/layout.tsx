import React, { FC } from "react";

interface Props {
	children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className="w-full max-w-full h-full min-h-screen">{children}</div>
	);
};

export default Layout;
