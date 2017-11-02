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
        <ListItem textSize="12">JavaScript is awesome.</ListItem>
        <ListItem textSize="12">So awesome you might start using a lot of it in an app.</ListItem>
        <ListItem textSize="12">So much it might start to become a tangled mess.</ListItem>
        <ListItem textSize="12">Such a tangled mess it’ll be hard to debug and re-use your code later.</ListItem>
      </List>
    </Slide>
);