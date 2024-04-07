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
    // Consider anything above 'xl' as super large
    breakpoint: { max: 4000, min: 1537 }, // Adjusting min to just above 'xl'
    items: 5,
  },
  desktop: {
    // Maps to 'xl' and upper 'lg'
    breakpoint: { max: 1536, min: 1200 }, // Using 'lg' and 'xl' breakpoints
    items: 3,
  },
  smallDesktop: {
    // Maps to lower 'lg' and 'md'
    breakpoint: { max: 1199, min: 900 }, // Adjusting to 'md' and 'lg'
    items: 2, // Assuming you want 3 items for smaller desktops as well; adjust as needed
  },
  tablet: {
    // Maps to 'sm' and 'md'
    breakpoint: { max: 899, min: 600 }, // Using 'sm' and 'md' breakpoints
    items: 1.5,
  },
  mobile: {
    // Maps to 'xs' and 'sm'
    breakpoint: { max: 599, min: 0 }, // Using 'xs' and 'sm'
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
