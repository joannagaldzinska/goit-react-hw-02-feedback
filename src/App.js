// import PropTypes from 'prop-types';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import { Component } from 'react';

const OPTIONS = ['good', 'neutral', 'bad'];

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = ({ currentTarget }) => {
    const { feedback } = currentTarget.dataset;
    console.log(currentTarget);

    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  // handleGoodIncrement = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handleNeutralIncrement = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleBadIncrement = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const countPositiveFeedbackPercentage = () => {
      return Math.round((100 * good) / (bad + neutral + good));
    };
    const countTotalFeedback = () => {
      return good + neutral + bad;
    };

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={OPTIONS}
            onLeaveFeedback={this.handleIncrement}
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
