import React from "react";
import Monke from "./monke";

const Home = () => {
	return (
		<main className="h-screen flex justify-center items-center duration-200 select-none">
			<div className="flex flex-col items-center gap-10">
				<h1 className="text-6xl font-display font-bold">Monka Squad</h1>

				<p className="text-lg font-mono">
					haha funny <Monke />
				</p>
			</div>
		</main>
	);
};

export default Home;
