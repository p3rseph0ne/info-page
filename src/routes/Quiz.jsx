import React from "react";
import { useState } from "react";
import Grove from "../assets/grove.png";
import Section from "../components/shared/Section";
import { Headline } from "../components/shared/styled-components.sc";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

function Quiz() {
  const Quizquestions = [
    {
      question: "What city does the game prominently feature?",
      choices: ["Waterdeep", "Baldur's Gate", "Neverwinter", "Luskane"],
      correctAnswer: "Baldur's Gate",
    },
    {
      question: "Who is Bhaal?",
      choices: [
        "The God of Murder",
        "The God of Death",
        "The Lord of Darkness",
        "The Goddes of Darkness",
      ],
      correctAnswer: "The God of Murder",
    },
    {
      question: "Which D&D edition rules does Baldur's Gate 3 adapt?",
      choices: [
        "Fourth Edition",
        "Fifth Edition",
        "Third Edition",
        "Pathfinder",
      ],
      correctAnswer: "Fifth Edition",
    },
    {
      question: "Which character is a vampire spawn?",
      choices: ["Astarion", "Volo", "Raphael", "Luskane"],
      correctAnswer: "Astarion",
    },
    {
      question: "Which Githyanki warrior is a potential party member?",
      choices: ["Vlaakith", "Kith'rak Voss", "Lae'zel", "Orpehus"],
      correctAnswer: "Lae'zel",
    },
    {
      question:
        "What affliction do the main characters share at the beginning of the game?",
      choices: [
        "Lycanthropy",
        "Mind Flayer tadpole",
        "Vampirism",
        "Curse of Strahd",
      ],
      correctAnswer: "Mind Flayer tadpole",
    },
    {
      question: "Which race is not playable in Baldur's Gate 3?",
      choices: ["Tiefling", "Half-Elf", "Gnome", "Drow"],
      correctAnswer: "Gnome",
    },

    {
      question: "Which class is not available in Baldur's Gate 3?",
      choices: ["Sorcerer", "Paladin", "Monk", "Blood Hunter"],
      correctAnswer: "Blood Hunter",
    },
    {
      question: "Who is the deity associated with Shadowheart, the cleric?",
      choices: ["Lolth", "Shar", "Lathander", "Selune"],
      correctAnswer: "Shar",
    },
    {
      question: "What is a roll?",
      choices: [
        "A script with relevant player information",
        "A bonus action",
        "A performance check",
        "A baked good, worth 1 Camp Supply",
      ],
      correctAnswer: "A performance check",
    },
  ];
  const [activeQuestion, setActiveQuestion] = useState();
  const [activeChoices, setActiveChoices] = useState([]);
  const [activeCorrectAnswer, setActiveCorrectAnswer] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [activeButton, setActiveButton] = useState();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    givenAnswers: [],
  });
  const [showResultButton, setShowResultButton] = useState(false);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const onStart = () => {
    /* check ob -1 ist */
    /* check ob nächste Frage existiert*/
    const nextIndex =
      Quizquestions.findIndex(
        (question) => question.question === activeQuestion
      ) + 1;

    const nextQuestion = Quizquestions[nextIndex].question;
    const nextChoices = Quizquestions[nextIndex].choices;
    const nextCorrectAnswer = Quizquestions[nextIndex].correctAnswer;

    setActiveQuestion(nextQuestion);
    setActiveChoices(nextChoices);
    setActiveCorrectAnswer(nextCorrectAnswer);
  };

  const onResults = () => {
    if (selectedAnswer === activeCorrectAnswer) {
      setResult({
        ...result,
        score: result.score + 1,
        givenAnswers: result.givenAnswers.concat([selectedAnswer]),
      });
      console.log("richtig");
      console.log("score: " + result.score);
    } else {
      setResult({
        ...result,
        givenAnswers: result.givenAnswers.concat([selectedAnswer]),
      });
      console.log("falsch");
      console.log("score: " + result.score);
    }
    setActiveQuestion();
    setActiveChoices();
    setSelectedAnswer();
    setShowResultButton(false);
  };

  const onNextQuestion = () => {
    if (selectedAnswer === activeCorrectAnswer) {
      setResult({
        ...result,
        score: result.score + 1,
        givenAnswers: result.givenAnswers.concat([selectedAnswer]),
      });
      console.log("richtig");
      console.log("score: " + result.score);
    } else {
      setResult({
        ...result,
        givenAnswers: result.givenAnswers.concat([selectedAnswer]),
      });
      console.log("falsch");
      console.log("score: " + result.score);
    }

    const nextIndex =
      Quizquestions.findIndex(
        (question) => question.question === activeQuestion
      ) + 1;
    console.log("next index " + nextIndex);

    const nextQuestion = Quizquestions[nextIndex].question;
    const nextChoices = Quizquestions[nextIndex].choices;
    const nextCorrectAnswer = Quizquestions[nextIndex].correctAnswer;

    if (nextIndex == Quizquestions.length - 1) {
      setQuizCompleted(true);
      setShowResultButton(true);
    }
    if (nextIndex < Quizquestions.length) {
      console.log("next index < quizquestions.length" + nextIndex);
      setActiveQuestion(nextQuestion);
      setActiveChoices(nextChoices);
      setActiveCorrectAnswer(nextCorrectAnswer);
    }
    setSelectedAnswer("");
  };

  const onChoice = (choice) => {
    setActiveButton(choice);
    setSelectedAnswer(choice);
  };

  return (
    <div>
      <Section background={Grove}>
        {!quizCompleted ||
          (activeQuestion && <Headline>Are you ready for Faerun?</Headline>)}
        <StyledBox>
          {!activeQuestion && !quizCompleted && (
            <QuizButton variant="outlined" onClick={() => onStart()}>
              START
            </QuizButton>
          )}
          {activeChoices && <Box> {activeQuestion} </Box>}
          <AnswerContainer>
            {activeChoices &&
              activeChoices.map((choice, index) => (
                <QuizButton
                  key={index}
                  $active={activeButton == choice}
                  variant="outlined"
                  onClick={() => onChoice(choice)}
                >
                  {choice}
                </QuizButton>
              ))}
          </AnswerContainer>
          {activeQuestion && !quizCompleted && (
            <QuizButton
              variant="outlined"
              disabled={!selectedAnswer}
              onClick={() => onNextQuestion()}
            >
              NEXT
            </QuizButton>
          )}
          {showResultButton && (
            <QuizButton variant="outlined" onClick={() => onResults()}>
              RESULTS
            </QuizButton>
          )}
          {quizCompleted && !activeQuestion && (
            <ResultContainer>
              <Stack spacing={2} direction="row">
                <CircularProgress
                  variant="determinate"
                  value={result.score * 10}
                />
                <Headline>
                  You got {result.score} out of {Quizquestions.length} correct!
                </Headline>
              </Stack>

              {Quizquestions.map((question, index) => (
                <StyledAccordion
                  expanded={expanded === question.question}
                  onChange={handleChange(question.question)}
                >
                  <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body2">{question.question}</Typography>
                  </StyledAccordionSummary>
                  <StyledAccordionDetails>
                    <Typography variant="body2">
                      Correct Answer: {question.correctAnswer}
                      <br />
                      Your Answer:{" "}
                      {result.givenAnswers[Quizquestions.indexOf(question)]}
                    </Typography>
                  </StyledAccordionDetails>
                </StyledAccordion>
              ))}
            </ResultContainer>
          )}
        </StyledBox>
      </Section>
    </div>
  );
}

export default Quiz;

const StyledBox = styled(Box)`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase !important;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;
const ResultContainer = styled(Box)`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const AnswerContainer = styled(Box)`
  margin-top: 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

const QuizButton = styled(Button)`
  margin-right: 1rem !important;
  margin-left: 1rem !important;
  margin-bottom: 2rem !important;
  border-color: #fbcea0 !important;
  &:disabled {
    opacity: 0.3;
  }
  background-color: ${({ $active }) =>
    $active ? "#fbcea0 !important" : "transparent"};
  color: ${({ $active }) => ($active ? "black !important" : "#fbcea0")};
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
