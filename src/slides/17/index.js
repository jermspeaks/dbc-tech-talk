import React from "react";
import {
	Heading,
	Slide,
	ListItem,
	List
} from "spectacle";

export default (
	<Slide transition={["fade"]} bgColor="tertiary">
		<Heading size={6} textColor="primary">
			Resources
		</Heading>
		<List>
			<ListItem><a href="https://github.com/jermspeaks/dbc-tech-talk" target="_blank" rel="noopener noreferrer">Slides</a></ListItem>
			<ListItem><a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a></ListItem>
			<ListItem><a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">React Tutorial</a></ListItem>
			<ListItem><a href="http://fellowship.hackbrightacademy.com/materials/lectures/react/" target="_blank" rel="noopener noreferrer">Hackbright React Lecture</a></ListItem>
			<ListItem><a href="https://developers.google.com/web/updates/2015/12/getting-started-pwa" target="_blank" rel="noopener noreferrer">Getting Started with PWAs</a></ListItem>
			<ListItem><a href="https://github.com/enaqx/awesome-react" target="_blank" rel="noopener noreferrer">Awesome React</a></ListItem>
		</List>
	</Slide>
);
