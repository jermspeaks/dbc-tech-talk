import React from "react";
import {
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Cite
} from "spectacle";

export default (
  <Slide transition={["fade"]} bgColor="secondary">
    <Heading size={6} textColor="tertiary" caps>
      React
      <Image display="block" src="images/logo-react.png" alt="React logo" height={200} />
    </Heading>  
    <Text textColor="tertiary">
      Popular, powerful front-end framework.
    </Text>
    <Text textColor="tertiary">
      Developed by and sponsored by Facebook.
    </Text>
    <List textColor="tertiary">
      <ListItem textSize="12">Make it easy to make reusable “view components”</ListItem>
      <ListItem textSize="12">These “encapsulate” logic and HTML into a class</ListItem>
      <ListItem textSize="12">Often make it easier to build modular applications</ListItem>
    </List>
    <Cite>Hackbright</Cite>
  </Slide>
);  