import React from "react";
import {
  Heading,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";

export default (
  <Slide transition={["fade"]} bgColor="secondary">
    <Heading size={6} textColor="tertiary" caps>
      React
      <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="React logo" height="200" />
    </Heading>  
    <Text textAlign="left" textColor="tertiary">
      Popular, powerful front-end framework.
    </Text>
    <Text textAlign="left" textColor="tertiary">
      Developed by and sponsored by Facebook.
    </Text>
    <List textColor="tertiary">
      <ListItem>Make it easy to make reusable “view components”</ListItem>
      <ListItem>These “encapsulate” logic and HTML into a class</ListItem>
      <ListItem>Often make it easier to build modular applications</ListItem>
    </List>
  </Slide>
);  