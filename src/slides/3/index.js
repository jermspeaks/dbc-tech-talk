import React from "react";
import {
  Heading,
  ListItem,
  List,
  Slide
} from "spectacle";

export default (
	<Slide transition={["fade"]} bgColor="secondary">
      <Heading size={6} textColor="tertiary" caps>
        Why is a Javascript library or framework useful?
      </Heading>
      <List textColor="tertiary">
        <ListItem>JavaScript is awesome.</ListItem>
        <ListItem>So awesome you might start using a lot of it in an app.</ListItem>
        <ListItem>So much it might start to become a tangled mess.</ListItem>
        <ListItem>Such a tangled mess it’ll be hard to debug and re-use your code later.</ListItem>
      </List>
    </Slide>
);