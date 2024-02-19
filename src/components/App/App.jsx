import { useState, useEffect } from "react";

import { Container } from "./App.styled.jsx";

import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Notification from "../Notification/Notification";

function App() {
  const [values, setValues] = useState(() => {
    const savedValue = window.localStorage.getItem("saved-feedback");

    if (savedValue !== null) {
      return JSON.parse(savedValue);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(values));
  }, [values]);

  // const updateFeedback = (feedbackType) => {
  //   setValues({
  //     ...values,
  //     [feedbackType]: values[feedbackType] + 1,
  //   });
  // };

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

  // const description =
  //   "Please leave your feedback about our service by selecting one of the options below.";

  return (
    <Container>
      <Description
        title="Sip Happens Café"
        descrition="Please leave your feedback about our service by selecting one of the options below."
      ></Description>
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
    </Container>
  );
}

export default App;
