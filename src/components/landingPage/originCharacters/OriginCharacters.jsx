import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import OriginCharacter from "./OriginCharacter";
import { Headline } from "../../shared/styled-components.sc";
import styled from "styled-components";
import NPCs from "../../../data/components";

/* Needed to make the Carousel responsive, for further information check out the docs for the carousel library: https://www.npmjs.com/package/react-multi-carousel  */
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

/**
 * Renders the Headline for the origin character section. Also Iterates over the NPC list provided and creates an originCharacter Card each inside of a Carousel
 * for further information regarding the Carousel check out the docs for the carousel library: https://www.npmjs.com/package/react-multi-carousel
 * @returns
 */
function OriginCharacters() {
  return (
    <Container>
      <Headline>Get to know: Origin Characters</Headline>
      <CarouselContainer>
        <Carousel responsive={responsive} dragable={false}>
          {/* Iterate over every NPC List entry and provides the information stored in the list to the OriginCharacter props */}
          {NPCs.map(({ name, image, description }) => (
            <OriginCharacter
              key={name}
              name={name}
              image={image}
              description={description}
            />
          ))}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}

export default OriginCharacters;

/**
 * Styled components :)
 */

const Container = styled(Box)`
  width: 100%;
`;

const CarouselContainer = styled(Box)`
  margin: 2rem 8vw 0 8vw;
`;
