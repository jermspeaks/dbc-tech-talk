import React from "react";
import {
  Heading,
  Slide
} from "spectacle";
import Sharkwords from "../../examples/sharkwords";
import randomWord from "../../examples/sharkwords/words";

export default (
  <Slide transition={["fade"]} bgColor="tertiary">
    <Heading size={6} textColor="primary">Shark Words</Heading>
  	<Sharkwords answer={randomWord()} />
  </Slide>
);  