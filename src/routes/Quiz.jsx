import { useState } from "react";
import Grove from "../assets/grove.png";
import Section from "../components/shared/Section";
import { Headline } from "../components/shared/styled-components.sc";
import styled from "styled-components";
import { Box, Button } from "@mui/material";

function Quiz() {
  const [count, setCount] = useState(0);

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
    correctAnswers: 0,
    wrongAnswers: 0,
  });

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

    console.log(nextQuestion);
    console.log(nextChoices);
    console.log(nextCorrectAnswer);
    setActiveQuestion(nextQuestion);
    setActiveChoices(nextChoices);
    setActiveCorrectAnswer(nextCorrectAnswer);
  };
  const onNextQuestion = () => {
    console.log("score nach vorheriger frage:" + result.score);
    if (selectedAnswer === activeCorrectAnswer) {
      setResult({
        ...result,
        score: result.score + 1,
      });
      console.log("richtig");
      console.log("score: " + result.score);
    } else {
      console.log("falsch");
      console.log("score: " + result.score);
    }

    const nextIndex =
      Quizquestions.findIndex(
        (question) => question.question === activeQuestion
      ) + 1;

    const nextQuestion = Quizquestions[nextIndex].question;
    const nextChoices = Quizquestions[nextIndex].choices;
    const nextCorrectAnswer = Quizquestions[nextIndex].correctAnswer;

    console.log(nextQuestion);
    console.log(nextChoices);
    console.log(nextCorrectAnswer);

    if (nextIndex <= 9) {
      setActiveQuestion(nextQuestion);
      setActiveChoices(nextChoices);
      setActiveCorrectAnswer(nextCorrectAnswer);
    } else {
      setQuizCompleted = true;
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
        <Headline>Are you ready for Faerun?</Headline>
        <StyledBox>
          {!activeQuestion && (
            <QuizButton variant="outlined" onClick={() => onStart()}>
              START
            </QuizButton>
          )}

          {activeQuestion && <Box> {activeQuestion} </Box>}
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
        </StyledBox>
      </Section>
    </div>
  );
}

export default Quiz;

const StyledBox = styled(Box)`
  background: transparent !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  width: 80%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase !important;
  padding-top: 2rem;
`;
const AnswerContainer = styled(Box)`
  background: transparent !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  margin-top: 2rem;
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
