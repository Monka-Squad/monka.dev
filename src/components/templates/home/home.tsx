import React from "react";

const Home = () => {
	return (
		<main className="h-screen flex justify-center items-center bg-orange-50 dark:bg-neutral-900">
			<div className="flex flex-col items-center gap-10">
				<h1 className="text-8xl font-display font-bold text-slate-900 dark:text-orange-50">
					Monka Squad
				</h1>

				<p className="text-xl font-mono text-slate-800 dark:text-orange-50">
					haha funny monke
				</p>
			</div>
		</main>
	);
};

export default Home;
