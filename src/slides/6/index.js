import React from "react";
import {
  Heading,
  CodePane,
  Slide
} from "spectacle";
import Hello from "../../examples/hello2";

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <Heading size={6} textColor="primary">Hello World, Take 2</Heading>
    <CodePane textAlign="left" lang="jsx" source={require("../../assets/code/hello2.example")} />
  	<Hello from="Jeremy" to="World" />
  </Slide>
);  