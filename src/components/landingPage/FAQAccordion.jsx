import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Box } from "@mui/material";
import { Headline } from "../shared/styled-components.sc";

const FAQ = [
  {
    question: "What is the Dungeons & Dragons rule set?",
    answer:
      "Dungeons & Dragons (D&D) is a well-known pen-and-paper role-playing game that has been around since the 1970s. It establishes the rules and mechanics that are also used in Baldur's Gate 3. D&D offers a variety of character classes, races, abilities, and more, all integrated into the game. BG3 uses the Fifth Edition of DnD Rules.",
  },
  {
    question: "What are character classes?",
    answer:
      "Character classes define the abilities and traits of your game character. In Baldur's Gate 3, you can choose from various classes such as Fighter, Wizard, Rogue, etc. Each class has its own unique abilities and advantages.",
  },
  {
    question: "What are races?",
    answer:
      "Races determine the physical characteristics and abilities of your character. Examples of races include Humans, Elves, Dwarves, Halflings, and more. Each race provides different bonuses and abilities.",
  },
  {
    question: "What are attributes?",
    answer:
      "Attributes are fundamental characteristics of your character, such as Strength, Dexterity, Constitution, etc. They affect various aspects of the game, such as the damage you deal, your hit points, or your ability to disarm traps.",
  },
  {
    question: "What does NPC mean?",
    answer:
      "NPC stands for Non-Player Character. These are characters controlled by the game with which you can interact. NPCs can be merchants, allies, quest givers, or enemies.",
  },
  {
    question: "What is a quest giver?",
    answer:
      "A quest giver is an NPC who gives the player tasks or quests to complete. These quests often advance the plot and reward the player with experience, items, or other benefits.",
  },
  {
    question: "How does a roll work?",
    answer:
      "A roll is usually performed automatically by the game, based on the rules of the Dungeons & Dragons system. For each roll, a die with a certain number of sides is used to generate a random result. This result is then compared with your character's abilities and attributes as well as the game rules to determine whether the action is successful or not.",
  },
  {
    question: "What is a Turn-Based combat system?",
    answer:
      "A Turn-Based combat system is a combat system where the actions of characters and enemies occur in turns. Each character has the opportunity to perform actions such as attacks, spells, or movements during their turn. After all characters and enemies have performed their actions, the round ends and a new turn begins. This type of combat system allows for strategic planning and decision-making, as players have time to carefully choose their actions before the next move is executed.",
  },
];

function FAQAccordion() {
  const half = Math.ceil(FAQ.length / 2);
  const firstColumnItems = FAQ.slice(0, half);
  const secondColumnItems = FAQ.slice(half);

  const renderAccordions = (items) =>
    items.map(({ question, answer }, index) => (
      <StyledAccordion key={index}>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
        >
          <Typography variant="body2">{question}</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography variant="body2">{answer}</Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
    ));

  return (
    <OuterContainer>
      <Headline>FAQ</Headline>
      <StyledBox>
        <Container>
          <Column>{renderAccordions(firstColumnItems)}</Column>
          <Column>{renderAccordions(secondColumnItems)}</Column>
        </Container>
      </StyledBox>
    </OuterContainer>
  );
}

export default FAQAccordion;

const OuterContainer = styled(Box)`
  height: 100%;
  margin: 2rem;
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 80%;
`;

const Column = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;

  &:nth-child(odd) {
    margin-right: 5px;
  }

  &:nth-child(even) {
    margin-left: 5px;
  }
`;

const StyledAccordion = styled(Accordion)`
  background: transparent !important;
  width: 100%;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  background-color: rgba(0, 0, 0, 0.4) !important;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: rgba(0, 0, 0, 0.4) !important;
`;
