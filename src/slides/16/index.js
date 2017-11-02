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
			Hacker News PWA
		</Heading>
		<Text textColor="primary">
			Demo adds one last component:
		</Text>
		<Text textColor="primary">Redux</Text>
		<Image src="/images/logo-redux.png" width={200} height={200} />
	</Slide>
);
