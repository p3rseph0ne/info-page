import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import OriginCharacter from "../originCharacters/OriginCharacter";

/**
 * Renders OriginCharactercards with the props provided and handles the flipping of the cards on mouseenter and mouseleave so that the image and description change
 * correctly
 * @param {*} param0
 * @returns
 */
function ChosenOne({ image, god, godDescription, description }) {
  const [showGodDescription, setShowGodDescription] = useState(false);
  return (
    <Container>
      {/*
      Wrap "OriginCharacter" in a Box, to attach MouseEnter and MouseLeave eventlisteners
      To only switch to the "God" if the user hovers over the image and not over the text
      */}
      <Box
        onMouseEnter={() => setShowGodDescription(true)}
        onMouseLeave={() => setShowGodDescription(false)}
      >
        <OriginCharacter
          image={image}
          backsideImage={god}
          transparentBackground
        />
      </Box>

      {/* if the state showGodDescription is set to true by onMouseEnter(), godDescription is shown. 
      Otherwiese ( : -> else) description is shown*/}
      {showGodDescription ? (
        <Description>{godDescription}</Description>
      ) : (
        <Description>{description}</Description>
      )}
    </Container>
  );
}

/**
 * Styled Components :)
 */

const Container = styled(Box)`
  min-width: 350px;
  max-width: 350px;
`;

const Description = styled(Typography)`
  margin-top: 2rem !important;
  min-height: 300px;
  max-height: 300px;
`;
export default ChosenOne;
