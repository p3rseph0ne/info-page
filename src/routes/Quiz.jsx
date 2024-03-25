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
import Quizquestions from "../data/quiz";
import MailModal from "../components/quiz/MailModal";

function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [result, setResult] = useState({
    score: 0,
    givenAnswers: [],
  });
  const [expanded, setExpanded] = useState("");
  const [open, setOpen] = React.useState(false);
  const { question, choices, correctAnswer } = Quizquestions[activeIndex] ?? {};
  const quizCompleted = activeIndex === Quizquestions.length;

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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

  const onChoice = (choice) => {
    setSelectedAnswer(choice);
  };

  const onButtonClick = () => {
    if (activeIndex === -1) {
      setActiveIndex(0);
      return;
    }

    onNextQuestion();
  };

  const getButtonLabel = () => {
    if (quizCompleted) {
      return "Result";
    }

    if (activeIndex === -1) {
      return "Start";
    }

    return "Next";
  };

  const getButtonDisabled = () => {
    if (activeIndex === -1 || selectedAnswer) {
      return false;
    }

    return true;
  };

  return (
    <div>
      <Section background={Grove}>
        {activeIndex === -1 && <Headline>Are you ready for Faerun?</Headline>}
        <StyledBox>
          {choices && <Box> {question} </Box>}
          <AnswerContainer>
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
