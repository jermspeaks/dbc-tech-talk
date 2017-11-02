import React from "react";
import {
	Heading,
	Slide,
	Text,
	BlockQuote,
	Quote,
	Cite
} from "spectacle";

export default (
	<Slide transition={["fade"]} bgColor="tertiary">
		<Heading size={6} textColor="primary">
			Hacker News PWA
		</Heading>
		<Text textColor="primary" textAlign="left">
			PWA = Progressive Web Application
		</Text>
		<BlockQuote>
			<Quote textSize="10" textColor="secondary">
				A Progressive Web App uses modern web capabilities to deliver an
				app-like user experience. They evolve from pages in browser tabs
				to immersive, top-level apps, maintaining the web's low friction
				at every moment.
			</Quote>
			<Cite textColor="secondary">
				<a
					href="https://developers.google.com/web/updates/2015/12/getting-started-pwa"
					target="_blank"
					rel="noopener noreferrer"
				>
					Addy Osmani
				</a>
			</Cite>
		</BlockQuote>
	</Slide>
);
