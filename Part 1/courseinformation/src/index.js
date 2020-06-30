import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>
    {props.part} {props.exercise}
  </p>
)

const Content = (props) => (
  <>
    <Part part={props.parts[0]} exercise={props.exercises[0]}/>
    <Part part={props.parts[1]} exercise={props.exercises[1]}/>
    <Part part={props.parts[2]} exercise={props.exercises[2]}/>
  </>
)

const Total = (props) => (
  <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
)

const App = () => {
  const course = "Half Stack Application Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using Props to Pass Data";
  const exercises2 = 7;
  const part3 = "State of a Component";
  const exercises3 = 14;
  const parts = [part1, part2, part3];
  const exercises = [exercises1, exercises2, exercises3];

  return (
    <div>
      <Header course={course} />
      <Content
        parts={parts}
        exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));