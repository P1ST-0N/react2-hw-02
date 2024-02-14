import { useState } from "react";

import { Container } from "./App.styled.jsx";

import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Notification from "../Notification/Notification";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [feedbackType]: prevValues[feedbackType] + 1,
      };
    });
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const percentGoodFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <Container>
      <Description title="Sip Happens Café">
        <Options
          onUpdate={updateFeedback}
          onReset={resetFeedback}
          total={totalFeedback}
        />
        {totalFeedback !== 0 ? (
          <Feedback
            values={values}
            total={totalFeedback}
            percent={percentGoodFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Description>
    </Container>
  );
}

export default App;
