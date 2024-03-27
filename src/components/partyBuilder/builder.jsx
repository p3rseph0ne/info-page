import { Box, Button, Tooltip, Typography } from "@mui/material";
import { Headline } from "../shared/styled-components.sc";
import styled from "styled-components";
import { useEffect, useState } from "react";
import PartyMember from "./PartyMember";
import { originCharacterParties, tavParties } from "../../data/partyBuilder";
/**
 * Renders all of the Choice-Buttons as well as the dynamic partycontainer which displays the best picks for party companions based on the choice for the player character
 * @returns
 */
function Builder() {
  /* which Origin character is picked currently */
  const [currentPicksOrigin, setCurrentPicksOrigin] = useState([]);
  /* Which player class is picked currently */
  const [currentPicksTav, setCurrentPicksTav] = useState([]);
  /* Which party picks are dispalyed currently */
  const [currentParty, setCurrentParty] = useState([]);
  /* Tracks which character button is currently selected to apply styling to that button */
  const [currentSelected, setCurrentSelected] = useState();
  /* Tracks whether the user klicked on TAV or ORIGIN to render the correct set of option buttons in the pickcontainer  */
  const [activeButton, setActiveButton] = useState();
  /* Tracks which class button is currently selected to apply styling to that button */
  const [activeClassButton, setActiveClassButton] = useState();

  /* useEffect hook -> Sets currentparty, CurrentSelected and ActiveClassButton to undefined every time the user switches between the two to ensure that no class or
  character is pre-selected when switching between tav and origin und there's also no "old" party recommendation displayed
  for further information check out: https://react.dev/reference/react/useEffect */
  useEffect(() => {
    setCurrentParty([]);
    setCurrentSelected(undefined);
    setActiveClassButton(undefined);
  }, [activeButton]);

  /**
   * After the Origin button is clicked, the activebutton is set to origin and currentpicks is set to empty
   * The function iterates over the provided list of possible characters to chose from and sets them in currentPicksOrigin to be displayed in the Pickcontainer
   */
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

  /**
   * After the Tav button is clicked, the activebutton is set to tav and currentpicks is set to empty
   * The function iterates over the provided list of possible classes to chose from and sets them in currentPicksTav to be displayed in the Pickcontainer
   */
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

  /**
   * sets currentselected to apply proper styling
   * filters the list with all origin party combinations for the selected character and sets currentparty to the corresponding party for the picked character
   * @param {String} name - nome of the origincharacter picked
   * @param {int} index
   */
  const onCharacterButtonClick = (name, index) => {
    setCurrentSelected(index);
    const party = originCharacterParties
      .filter((character) => character.name == name)
      .map((character) => character.party);
    setCurrentParty(party[0]);
  };

  /**
   * sets currentselected and activeclassbutton to apply proper styling
   * filters the list with all class party combinations for the selected class and sets currentparty to the corresponding party for the picked class
   * @param {String} classname - name of the class picked
   * @param {int} index
   */
  const onClassButtonClick = (classname, index) => {
    setActiveClassButton(classname);
    setCurrentSelected(index);
    const party = tavParties
      .filter((character) => character.class == classname)
      .map((character) => character.party);
    setCurrentParty(party[0]);
  };

  return (
    <>
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
            {/*Iterate over origin characters and display them */}
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
            {/*Iterate over class options and display them */}
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
            {/*Iterate over currentparty and display every character in that party with an image and a description why theyd fit the party well */}
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
    </>
  );
}

export default Builder;

/**
 * Styled Components :)
 */

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
