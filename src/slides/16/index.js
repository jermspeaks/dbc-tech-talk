import React from "react";
import {
	Heading,
	Slide,
	Text,
	Image
} from "spectacle";

export default (
	<Slide transition={["fade"]} bgColor="tertiary">
		<Heading size={6} textColor="primary">
			<a href="https://github.com/stephenkingsley/hackerNews-pwa" target="_blank" rel="noopener noreferrer">Hacker News PWA</a>
		</Heading>
		<Text textColor="primary">
			Demo adds one last component:
		</Text>
		<Text textColor="primary">Redux</Text>
		<Image src="images/logo-redux.png" width={200} height={200} />
	</Slide>
);
