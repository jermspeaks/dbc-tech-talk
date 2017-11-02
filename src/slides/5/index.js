import React from "react";
import {
  Heading,
  CodePane,
  Slide
} from "spectacle";
import Hello from "../../examples/hello1";

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <Heading size={6} textColor="primary">Hello World</Heading>
     <CodePane textAlign="left" lang="jsx" source={require("../../assets/code/helloworld.example")} />
  	<Hello />
  </Slide>
);  