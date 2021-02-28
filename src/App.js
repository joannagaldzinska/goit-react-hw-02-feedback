// import PropTypes from 'prop-types';
import Statistics from './components/Statistics';
import LeaveFeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleGoodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBadIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    const countPositiveFeedbackPercentage = () => {
      return Math.round((100 * good) / (bad + neutral + good));
    };
    const countTotalFeedback = () => {
      return good + neutral + bad;
    };

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <LeaveFeedbackOptions
            onGood={this.handleGoodIncrement}
            onNeutral={this.handleNeutralIncrement}
            onBad={this.handleBadIncrement}
          />
        </Section>

        <Section title="Statistics">
          {good + neutral + bad === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
