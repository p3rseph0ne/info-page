import React from "react";
import { useState } from "react";
import { Headline } from "../../components/shared/styled-components.sc";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Quizquestions from "../../data/quiz";
import MailModal from "./MailModal";

/**
 * Renders the Quiz thats displayed on the QuizPage
 * @returns
 */
function Quiz() {
  /* current selected answer */
  const [selectedAnswer, setSelectedAnswer] = useState("");
  /* current active index */
  const [activeIndex, setActiveIndex] = useState(-1);
  /* result counter */
  const [result, setResult] = useState({
    score: 0,
    givenAnswers: [],
  });
  /* current expanded accordion in the resultContainer */
  const [expanded, setExpanded] = useState("");
  /* Tracks whether or not the Mail Modal is open */
  const [open, setOpen] = React.useState(false);
  /* current set of question, available choices and correct Answer for the given index taken from the Quizquestion list. If thats undefined it's an empty object  */
  const { question, choices, correctAnswer } = Quizquestions[activeIndex] ?? {};
  /* tracks whether or not the quiz has been completed yet */
  const quizCompleted = activeIndex === Quizquestions.length;

  /* Ensures that only one panel of the accordion can be open at a time */
  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  /**
   * checks if the given answer equals the correct answer and sets the new score by creating a flat copy of the current result state and saving a new object in the state
   * tracks which answer was given
   * sets the active index tp the next index
   * empties the selectedAnswer State
   */
  const onNextQuestion = () => {
    setResult({
      ...result,
      score: selectedAnswer === correctAnswer ? result.score + 1 : result.score,
      givenAnswers: result.givenAnswers.concat([selectedAnswer]),
    });

    const nextIndex = activeIndex + 1;
    setActiveIndex(nextIndex);
    setSelectedAnswer("");
  };

  /* sets the current choice */
  const onChoice = (choice) => {
    setSelectedAnswer(choice);
  };

  /* sets activeindex to 0 after the start button was clicked to start the quiz, if it was already 0 or higher, calls onNextQuestion */
  const onButtonClick = () => {
    if (activeIndex === -1) {
      setActiveIndex(0);
      return;
    }

    onNextQuestion();
  };

  /* returns the correct button label depending on how far the user is into the quit */
  const getButtonLabel = () => {
    if (quizCompleted) {
      return "Result";
    }

    if (activeIndex === -1) {
      return "Start";
    }

    return "Next";
  };

  /* disables the button until an answer is selected */
  const getButtonDisabled = () => {
    if (activeIndex === -1 || selectedAnswer) {
      return false;
    }

    return true;
  };

  return (
    <>
      {/* ensure that the headline will only be shown until the quiz is started */}
      {activeIndex === -1 && <Headline>Are you ready for Faerun?</Headline>}
      <StyledBox>
        {/* ensure the the question is only shown once choices is not empty (== new question, choices and correct answer were set after the user pressed start) */}
        {choices && <Box> {question} </Box>}
        <AnswerContainer>
          {/* ensure the the choices buttons are only shown once choices is not empty (== new question, choices and correct answer were set after the user pressed start) */}
          {choices &&
            choices.map((choice, index) => (
              <QuizButton
                key={index}
                $active={selectedAnswer == choice}
                variant="outlined"
                onClick={() => onChoice(choice)}
              >
                {choice}
              </QuizButton>
            ))}
        </AnswerContainer>
        <QuizButton
          variant="outlined"
          disabled={getButtonDisabled()}
          onClick={onButtonClick}
        >
          {getButtonLabel()}
        </QuizButton>
        {/* ensure the the Resultcontainer is only shown once the quiz is completed */}
        {quizCompleted && (
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
            {/* iterates over all Quizquestion, sets the question as the Accordion summary and the correct and given answer as the Accordion Details */}
            {Quizquestions.map((question) => (
              <StyledAccordion
                key={question.question}
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

            <QuizButton variant="outlined" onClick={() => setOpen(true)}>
              Send my results per Mail
            </QuizButton>
            <MailModal
              open={open}
              handleClose={() => setOpen(false)}
              result={result}
            />
          </ResultContainer>
        )}
      </StyledBox>
    </>
  );
}

export default Quiz;

/**
 * Styled components :)
 */

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
