// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./styles/styles.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="secondary"></Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Lunch n' Learn
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={2} fit>
            Overview of React and the React Ecosystem
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>
            Why is a Javascript library or framework useful?
          </Heading>
          <List textColor="primary">
            <ListItem>JavaScript is awesome.</ListItem>
            <ListItem>So awesome you might start using a lot of it in an app.</ListItem>
            <ListItem>So much it might start to become a tangled mess.</ListItem>
            <ListItem>Such a tangled mess it’ll be hard to debug and re-use your code later.</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React
            <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="React logo" height="200" />
          </Heading>  
          <Text textAlign="left" textColor="primary">
            Popular, powerful front-end framework.
          </Text>
          <Text textAlign="left" textColor="primary">
            Developed by and sponsored by Facebook.
          </Text>
          <List textColor="primary">
            <ListItem>Make it easy to make reusable “view components”</ListItem>
            <ListItem>These “encapsulate” logic and HTML into a class</ListItem>
            <ListItem>Often make it easier to build modular applications</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary">Hello World</Heading>
            <CodePane textAlign="left" language="javascript" source={require("raw!./assets/code/helloworld.example")} />
          <Text textAlign="left" margin="5px 0 0">
            <pre>
              {`
ReactDOM.render(
  document.getElementById("app"), 
  <Hello />
);

              `}
            </pre>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
