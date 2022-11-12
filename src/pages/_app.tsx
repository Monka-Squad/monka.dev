import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {
	Inter,
	Overpass_Mono,
	Source_Serif_Pro,
	Spectral,
} from "@next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const spectral = Spectral({
	variable: "--font-spectral",
	weight: ["400"],
	subsets: ["latin"],
});

const sourceSerifPro = Source_Serif_Pro({
	variable: "--font-source-serif-pro",
	weight: ["400", "700"],
	subsets: ["latin"],
});

const overpassMono = Overpass_Mono({
	variable: "--font-overpass-mono",
	subsets: ["latin"],
});

const fonts = [inter, spectral, sourceSerifPro, overpassMono];

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			attribute="class"
			enableSystem={false}
			themes={["light", "dark"]}
		>
			<main className={`${fonts.map((f) => f.variable).join(" ")} font-sans`}>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
