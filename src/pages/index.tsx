import Home from "@templates/home";
import Layout from "@templates/layout";
import Head from "next/head";

export default function HomePage() {
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

			<Home />
		</Layout>
	);
}
