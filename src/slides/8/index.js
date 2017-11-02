import React from "react";
import {
  Heading,
  CodePane,
  Slide
} from "spectacle";

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <Heading size={6} textColor="primary">Shark Words</Heading>
  	<CodePane textAlign="left" lang="jsx" source={require("../../assets/code/sharkwords2.example")} /> 
  </Slide>
);  