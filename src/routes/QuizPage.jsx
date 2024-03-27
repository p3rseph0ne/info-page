import React from "react";
import Grove from "../assets/grove.png";
import Section from "../components/shared/Section";
import Quiz from "../components/quiz/Quiz";

/**
 * Renders the Section and Quiz Component for the Wuiz site
 */
function QuizPage() {
  return (
    <Section background={Grove}>
      <Quiz />
    </Section>
  );
}

export default QuizPage;
