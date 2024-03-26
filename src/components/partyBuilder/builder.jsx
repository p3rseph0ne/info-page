import { Box, Button, Tooltip, Typography } from "@mui/material";
import { Headline } from "../shared/styled-components.sc";
import styled from "styled-components";
import { useEffect, useState } from "react";

import PartyMember from "./PartyMember";
import { originCharacterParties, tavParties } from "../../data/partyBuilder";

function Builder() {
  const [currentPicksOrigin, setCurrentPicksOrigin] = useState([]);
  const [currentPicksTav, setCurrentPicksTav] = useState([]);
  const [currentParty, setCurrentParty] = useState([]);
  const [currentSelected, setCurrentSelected] = useState();
  const [activeButton, setActiveButton] = useState();
  const [activeClassButton, setActiveClassButton] = useState();

  useEffect(() => {
    setCurrentParty([]);
    setCurrentSelected(undefined);
    setActiveClassButton(undefined);
  }, [activeButton]);

  const onOriginButtonClick = () => {
    setActiveButton("origin");
    setCurrentPicksTav([]);
    const characterList = originCharacterParties.map((character) => {
      return {
        name: character.name,
        class: character.class,
        image: character.image,
      };
    });

    setCurrentPicksOrigin(characterList);
  };

  const onTavButtonClick = () => {
    setActiveButton("tav");
    setCurrentPicksOrigin([]);
    const characterList = tavParties.map((character) => {
      return {
        class: character.class,
      };
    });
    setCurrentPicksTav(characterList);
  };

  const onCharacterButtonClick = (name, index) => {
    setCurrentSelected(index);
    const party = originCharacterParties
      .filter((character) => character.name == name)
      .map((character) => character.party);
    setCurrentParty(party[0]);
  };

  const onClassButtonClick = (classname, index) => {
    setActiveClassButton(classname);
    setCurrentSelected(index);
    const party = tavParties
      .filter((character) => character.class == classname)
      .map((character) => character.party);
    setCurrentParty(party[0]);
  };

  return (
    <Box>
      <Headline>Build your party</Headline>
      <Container>
        <BuildArea>
          <ButtonContainer>
            <BuilderButton
              $active={activeButton == "tav"}
              variant="outlined"
              onClick={onTavButtonClick}
            >
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
            {currentPicksOrigin.map((pick, index) => (
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

          <PickContainer>
            {currentPicksTav.map((pick, index) => (
              <BuilderButton
                key={pick.class}
                $active={activeClassButton == pick.class}
                variant="outlined"
                onClick={() => onClassButtonClick(pick.class, index)}
              >
                {pick.class}
              </BuilderButton>
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
  margin-bottom: 2rem !important;
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
