import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const ancedotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({clickFunction, text}) => (
  <button onClick={clickFunction}>{text}</button>
)


const App = ({ ancedotes }) => {

  const [index, setIndex] = useState(Math.floor(Math.random() * ancedotes.length));
  const [votes, setVotes] = useState(Array(ancedotes.length).fill(0));
  // const [mostVotes, setMostvotes] = useState(0);
  const mostVotes = votes.findIndex((i) => i === Math.max(...votes));
  console.log(votes);

  const displayAncedote = () => {
    const randIndex = Math.floor(Math.random() * ancedotes.length);
    setIndex(randIndex);
  }

  const vote = () => {
    const votesCopy = [...votes];
    votesCopy[index] += 1;
    setVotes(votesCopy);
  }

  return (
    <div>
      <h2>Ancedote of the Day</h2>
      <p>{ancedotes[index]}</p>
      <p>Has {votes[index]} votes.</p>
      <Button clickFunction={vote} text="Vote" />
      <Button clickFunction={displayAncedote} text="Generate Ancedote" />
      <h2>Ancedote with the most Votes</h2>
      {ancedotes[mostVotes]}
      <p>Has {votes[mostVotes]} votes.</p>
    </div>
  )
}

ReactDOM.render(<App ancedotes={ancedotes} />, document.getElementById("root"));