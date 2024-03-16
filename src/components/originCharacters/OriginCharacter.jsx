import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styled from "styled-components";
import SmokeBG from "../../assets/smoke-bg.webp";

function OriginCharacter({ character, description, image }) {
  const [displayText, setDisplayText] = useState(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onMouseEnter={() => setDisplayText(true)}
        onMouseLeave={() => setDisplayText(false)}
      >
        <StyledCardContent>
          {!displayText ? (
            <CardMedia
              component="img"
              height="500"
              image={image}
              alt={character}
            />
          ) : (
            <TextContainer>
              <Typography gutterBottom variant="h5" component="div">
                {character}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </TextContainer>
          )}
        </StyledCardContent>
      </CardActionArea>
    </Card>
  );
}
export default OriginCharacter;

const StyledCardContent = styled(CardContent)`
  height: 500px;
  background-image: url(${SmokeBG});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
`;

const TextContainer = styled(Box)`
  width: 90%;
`;
