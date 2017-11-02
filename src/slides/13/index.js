import React from "react";
import {
  Heading,
  CodePane,
  Slide,
  Text
} from "spectacle";

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <Heading size={6} textColor="primary">Ubermelon</Heading>
    <Text textColor="primary">We will take a look at a single page app</Text>
  	<CodePane textAlign="left" lang="python" source={require("../../assets/code/flaskserver.example")} /> 
  </Slide>
);  