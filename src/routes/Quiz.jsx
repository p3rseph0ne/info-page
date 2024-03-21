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
        "BFifth Edition",
        "Third Editio",
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
      choices: ["Sorcerer", "Paladin", "Monk", "Blood Hunter"],
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
      correctAnswer:
        "The result of a dice roll of a performance check of any kind",
    },
  ];
  const [activeQuestion, setActiveQuestion] = useState();
  const [activeChoices, setActiveChoices] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [activeButton, setActiveButton] = useState();
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
    const CorrectAnswer = Quizquestions[nextIndex].correctAnswer;

    console.log(nextQuestion);
    console.log(nextChoices);
    setActiveQuestion(nextQuestion);
    setActiveChoices(nextChoices);
  };
  const onNextQuestion = () => {
    /* check ob -1 ist */
    /* check ob nächste Frage existiert*/

    const nextIndex =
      Quizquestions.findIndex(
        (question) => question.question === activeQuestion
      ) + 1;

    const nextQuestion = Quizquestions[nextIndex].question;
    const nextChoices = Quizquestions[nextIndex].choices;
    const CorrectAnswer = Quizquestions[nextIndex].correctAnswer;

    console.log(nextQuestion);
    console.log(nextChoices);
    setActiveQuestion(nextQuestion);
    setActiveChoices(nextChoices);

    /* das funktioniert noch nicht so richtig, evtl so lösen, dass antworten gespeichert werden und am ende berechnet damit wir anzeigen können was
    ausgewählt wurde*/
    if (selectedAnswer === CorrectAnswer) {
      setResult(
        result.score + 1,
        result.correctAnswers + 1,
        result.wrongAnswers
      );
      console.log("richtig");
    } else {
      setResult(result.score, result.correctAnswers, result.wrongAnswers + 1);
      console.log("falsch");
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
              activeChoices.map((choice) => (
                <QuizButton
                  $active={activeButton == choice}
                  variant="outlined"
                  onClick={() => onChoice(choice)}
                >
                  {choice}
                </QuizButton>
              ))}
          </AnswerContainer>
          {activeQuestion && (
            <QuizButton variant="outlined" onClick={() => onNextQuestion()}>
              NUR KLICKBAR WENN ETWAS AUSGEWÄHLT WURDE
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
  background-color: ${({ $active }) =>
    $active ? "#fbcea0 !important" : "transparent"};
  color: ${({ $active }) => ($active ? "black !important" : "#fbcea0")};
`;
