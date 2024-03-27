import { CharacterImage } from "../shared/styled-components.sc";
import Karlach from "../../assets/characters/karlach.png";
import Shadowheart from "../../assets/characters/shadowheart.png";
import Astarion from "../../assets/characters/astarion.png";
import Gale from "../../assets/characters/gale.png";
import Laezel from "../../assets/characters/laezel.png";
import Wyll from "../../assets/characters/wyll.png";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

/**
 * Renders the image of a given party image as well as the given description
 * @param {String} name - name of the character
 * @param {String} description - description of the character
 * @returns
 */
function PartyMember({ name, description }) {
  /* returns the path to the correct character image based on the given name*/
  const getImageByCharacterName = (name) => {
    switch (name) {
      case "Astarion":
        return Astarion;
      case "Karlach":
        return Karlach;
      case "Gale":
        return Gale;
      case "Lae'zel":
        return Laezel;
      case "Wyll":
        return Wyll;
      case "Shadowheart":
        return Shadowheart;
      default:
        return null; // or a default image
    }
  };

  return (
    <Container>
      <ImageContainer>
        <CharacterImage src={getImageByCharacterName(name)} alt={name} />
        <Typography>{name}</Typography>
      </ImageContainer>
      <PartyText>{description}</PartyText>
    </Container>
  );
}

export default PartyMember;

/**
 * Styled components :)
 */

const Container = styled(Box)`
  margin: 1rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PartyText = styled(Typography)`
  text-align: left;
  max-width: 400px;
`;

const ImageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
`;
