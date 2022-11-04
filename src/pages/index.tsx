import Layout from "@templates/layout";
import Head from "next/head";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Monka Squad</title>
				<meta
					name="description"
					content="monke monke monke monke monke monke monke monke monke monke monke monke"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container">
				<h1 className="text-lg">Monka Squad</h1>

				<p className="">Haha funny monke</p>
			</main>
		</Layout>
	);
}
