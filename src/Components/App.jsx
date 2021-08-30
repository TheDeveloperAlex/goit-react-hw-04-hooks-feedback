import React, { useState } from 'react'
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export default function () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  const countPositiveFeedbackPercentage = () => {
    const res = Math.floor((good * 100) / (bad + good + neutral))
    return (res)
  }

  const countTotal = () => {
    const res = bad + good + neutral;
    return res;
  }

  const updateStat = (property) => {
    switch (property) {
      case 'good':
        return setGood(prev => (prev + 1));
      case 'neutral':
        return setNeutral(prev => (prev + 1));
      case 'bad':
        return setBad(prev => (prev + 1));
    }
    
  };

  return (
    <>
      <Section title="Leave feedback">
        <FeedbackOptions fn={updateStat} />
      </Section>

      <Section title="Statistics">
        {countTotal() !== 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotal()} percentage={countPositiveFeedbackPercentage()} /> : <Notification message='No feedback given' />}
      </Section>
    </>
  )
}



