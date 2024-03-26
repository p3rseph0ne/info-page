import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styled from "styled-components";
import SmokeBG from "../../../assets/smoke-bg.webp";

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
    <StyledCard $transparentBackground={transparentBackground}>
      <CardActionArea
        onMouseEnter={() => setDisplayBackside(true)}
        onMouseLeave={() => setDisplayBackside(false)}
      >
        <StyledCardContent>
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

const StyledCardContent = styled(CardContent)`
  height: 500px;
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
