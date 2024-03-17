import { Box, Button, Tooltip, Typography } from "@mui/material";
import { Headline } from "../shared/styled-components.sc";
import styled from "styled-components";
import { useState } from "react";
import Karlach from "../../assets/characters/karlach.png";
import Shadowheart from "../../assets/characters/shadowheart.png";
import Astarion from "../../assets/characters/astarion.png";
import Gale from "../../assets/characters/gale.png";
import Laezel from "../../assets/characters/laezel.png";
import Wyll from "../../assets/characters/wyll.png";
import PartyMember from "./partyMember";

const originCharacterParties = [
  {
    name: "Astarion",
    class: "Rogue",
    image: Astarion,
    party: [
      {
        name: "Gale",
        description:
          "Provides ranged magical support, crowd control, and area damage, complementing Astarion's single-target focus.",
      },
      {
        name: "Lae'zel",
        description:
          "Her tanking ability allows Astarion to exploit sneak attack opportunities with enemies focused on her.",
      },
      {
        name: "Shadowheart",
        description:
          "Offers healing and support spells, and her medium armor can provide an additional frontline.",
      },
    ],
  },
  {
    name: "Karlach",
    class: "Barbarian",
    image: Karlach,
    party: [
      {
        name: "Gale",
        description:
          "Provides powerful offensive spells to control the battlefield, complementing Karlach's melee strength.",
      },
      {
        name: "Shadowheart",
        description:
          "Her healing and buffing capabilities support Karlach's frontline engagement.",
      },
      {
        name: "Wyll",
        description:
          "His ranged attack options create opportunities for Karlach to capitalize on distracted or weakened enemies.",
      },
    ],
  },
  {
    name: "Gale",
    class: "Wizard",
    image: Gale,
    party: [
      {
        name: "Lae'zel",
        description:
          "Acts as a protective barrier, ensuring Gale has the space and safety to cast spells effectively.",
      },
      {
        name: "Wyll",
        description:
          "The combination of wizard and warlock spells offers a dynamic range of magical attacks and defenses.",
      },
      {
        name: "Astarion",
        description:
          "Can eliminate threats that get too close to Gale, providing valuable intelligence for spell strategy.",
      },
    ],
  },
  {
    name: "Lae'zel",
    class: "Fighter",
    image: Laezel,
    party: [
      {
        name: "Shadowheart",
        description:
          "Provides healing and buffs, ensuring Laezel can stay in the fight longer.",
      },
      {
        name: "Gale",
        description:
          "Offers ranged support, allowing Laezel to focus on engaging enemies up close.",
      },
      {
        name: "Wyll",
        description:
          "Adds a mix of magic and physical combat to the party, providing versatility.",
      },
    ],
  },
  {
    name: "Wyll",
    class: "Warlock",
    image: Wyll,
    party: [
      {
        name: "Lae'zel",
        description:
          "Provides a solid frontline, protecting Wyll as he casts from a distance.",
      },
      {
        name: "Shadowheart",
        description:
          "Her support capabilities ensure Wyll can maximize his spellcasting potential.",
      },
      {
        name: "Astarion",
        description:
          "Astarion's stealth and damage output can quickly take down targets weakened by Wyll's magic.",
      },
    ],
  },
  {
    name: "Shadowheart",
    class: "Cleric",
    image: Shadowheart,
    party: [
      {
        name: "Gale",
        description:
          "This magical duo with Wyll provides a broad range of offensive and defensive capabilities.",
      },
      {
        name: "Wyll",
        description:
          "Alongside Gale, creates a balanced and resilient party with diverse magical abilities.",
      },
      {
        name: "Lae'zel",
        description:
          "Ensures that the party has a solid frontline, allowing Shadowheart to focus on support from a safer distance.",
      },
    ],
  },
];

function Builder() {
  const [currentPicks, setCurrentPicks] = useState([]);
  const [currentParty, setCurrentParty] = useState([]);
  const [currentSelected, setCurrentSelected] = useState();
  const [activeButton, setActiveButton] = useState();

  const onOriginButtonClick = () => {
    setActiveButton("origin");
    const characterList = originCharacterParties.map((character) => {
      return {
        name: character.name,
        class: character.class,
        image: character.image,
      };
    });

    setCurrentPicks(characterList);
  };

  const onCharacterButtonClick = (name, index) => {
    setCurrentSelected(index);
    const party = originCharacterParties
      .filter((character) => character.name == name)
      .map((character) => character.party);
    setCurrentParty(party[0]);
  };

  return (
    <Box>
      <Headline>Build your party</Headline>
      <Container>
        <BuildArea>
          <ButtonContainer>
            <BuilderButton $active={activeButton == "tav"} variant="outlined">
              Tav
            </BuilderButton>
            <BuilderButton
              $active={activeButton == "origin"}
              variant="outlined"
              onClick={onOriginButtonClick}
            >
              Origin
            </BuilderButton>
          </ButtonContainer>
          <PickContainer>
            {currentPicks.map((pick, index) => (
              <Tooltip key={pick.name} title={`${pick.name} (${pick.class})`}>
                <CharacterButton
                  $fullOpacity={index == currentSelected}
                  onClick={() => onCharacterButtonClick(pick.name, index)}
                >
                  <CharacterImage src={pick.image} alt={pick.name} />
                </CharacterButton>
              </Tooltip>
            ))}
          </PickContainer>
        </BuildArea>
        <BuildArea>
          <PartyContainer>
            {currentParty.map((member) => (
              <PartyMember
                key={`member_${member.name}`}
                name={member.name}
                description={member.description}
              />
            ))}
          </PartyContainer>
        </BuildArea>
      </Container>
    </Box>
  );
}

export default Builder;

const Container = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const BuildArea = styled(Box)`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 49vw;

  &:nth-child(odd) {
    border-right: 1px solid #fbcea0;
  }
`;

const ButtonContainer = styled(Box)``;

const PickContainer = styled(Box)`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const BuilderButton = styled(Button)`
  width: 150px;
  margin-right: 1rem !important;
  margin-left: 1rem !important;
  border-color: #fbcea0 !important;
  background-color: ${({ $active }) =>
    $active ? "#fbcea0 !important" : "transparent"};
  color: ${({ $active }) => ($active ? "black !important" : "#fbcea0")};
`;

const CharacterImage = styled.img`
  width: 150px;
`;

const PartyContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CharacterButton = styled(Button)`
  opacity: ${({ $fullOpacity }) => ($fullOpacity ? 1 : 0.5)};

  &:hover {
    opacity: 1;
  }
`;
