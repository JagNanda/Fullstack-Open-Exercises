import React from 'react'

const Header = ({ name }) => (
    <h1>{name}</h1>
)

const Part = (props) => (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
)

const Content = (props) => (
    props.course.parts.map((part) => {
        return <Part part={part} key={part.name} />
    })
)

const Total = (props) => {

    const total = props.parts.reduce((t, p) => (t + p.exercises), 0);

    return (
        <strong>Total Exercises: {total}</strong>
    )
}

const Course = ({ course }) => {

    return (
        <div>
            <Header name={course.name} />
            <Content course={course} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course;