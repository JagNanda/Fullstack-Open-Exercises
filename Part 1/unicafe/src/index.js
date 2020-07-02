import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ clickFunction, text }) => (
  <button onClick={clickFunction}>{text}</button>
)

const Statistic = ({ value, text }) => (
  <span>{text}: {value}</span>
)

const Statistics = ({ good, bad, neutral }) => {

  const score = good - bad;
  const totalVotes = good + bad + neutral;
  const average = score / totalVotes;
  const percentPositive = good / totalVotes;

  if (totalVotes === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given yet</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td><Statistic value={good} text="good" /></td>
          </tr>
          <tr>
            <td><Statistic value={neutral} text="neutral" /></td>
          </tr>
          <tr>
            <td><Statistic value={bad} text="bad" /></td>
          </tr>
          <tr>  
            <td>All: {totalVotes}</td>
          </tr> 
          <tr>
            <td>Average: {average}</td>
          </tr>
          <tr>
            <td>Positive: {percentPositive}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementValue = (value, setValue) => {

    setValue(value + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button clickFunction={() => incrementValue(good, setGood)} text="Good" />
      <Button clickFunction={() => incrementValue(neutral, setNeutral)} text="Neutral" />
      <Button clickFunction={() => incrementValue(bad, setBad)} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


