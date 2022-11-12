import React from "react";
import Monke from "./monke";

const Home = () => {
	return (
		<main className="h-screen flex justify-center items-center duration-200 select-none">
			<div className="flex flex-col items-center p-5 gap-16">
				<h1 className="text-6xl font-display font-bold text-center">
					Monka Squad
				</h1>

				<p className="sm:text-lg font-mono text-center">
					haha funny <Monke />
				</p>
			</div>
		</main>
	);
};

export default Home;
