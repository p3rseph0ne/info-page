import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styled from "styled-components";
import SmokeBG from "../../../assets/smoke-bg.webp";

/**
 * Renders Character Card for a given Character Input
 * @param {String} description - Character description that will be shown on the backside
 * @param {String} backsideImage - path to the Image for the backside
 * @param {image} image - path to the image for the front
 * @param {String} alt - alttext to improve inclusivity for the component
 * @param {*} transparanteBackground - value to decide whether or not the image and test will have a background image or be transparent
 * @param {int} height - height value for the image in px, standard value being 500
 * @returns
 */
function OriginCharacter({
  description,
  backsideImage,
  image,
  alt,
  transparentBackground,
  height = 500,
}) {
  const [displayBackside, setDisplayBackside] = useState(false);

  return (
    <StyledCard>
      {/* ActionArea is relevant to know in which are the state of displayBackside should be set */}
      <CardActionArea
        onMouseEnter={() => setDisplayBackside(true)}
        onMouseLeave={() => setDisplayBackside(false)}
      >
        <StyledCardContent $transparentBackground={transparentBackground}>
          {/* Check whether or not displaybackside is supposed to be shown rn, if not, show card media with front content
          else if description is given, show description
          else if backsideImage is given, show backsideImage */}
          {!displayBackside ? (
            <CardMedia
              component="img"
              height={height}
              image={image}
              alt={alt}
            />
          ) : (
            <>
              {description && (
                <TextContainer>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </TextContainer>
              )}
              {backsideImage && (
                <CardMedia
                  component="img"
                  height="300"
                  image={backsideImage}
                  alt={alt}
                />
              )}
            </>
          )}
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}
export default OriginCharacter;

/**
 * Styled Components :)
 */

const StyledCardContent = styled(CardContent)`
  height: 500px;
  //depending on the prop input the background will be set to either transparent or a smoke image
  ${({ $transparentBackground }) =>
    $transparentBackground
      ? `background-color: transparent;`
      : `background-image: url(${SmokeBG});
         background-repeat: no-repeat;
         background-size: cover;`}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
`;

const TextContainer = styled(Box)`
  width: 90%;
`;

const StyledCard = styled(Card)`
  background-color: transparent !important;
  max-width: 350px;
  min-width: 350px;
`;
