import React from 'react'
import ReactDOM from 'react-dom'


// HEADER
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>

}

// part1
const Part1 = (props) => {
  return (
    <div>
      <p>{props.part1} <strong>{props.exercises1}</strong></p>
    </div>
  )
}
// part2
const Part2 = (props) => {
  return (
    <div>
      <p>{props.part2} <strong>{props.exercises2}</strong></p>
    </div>
  )
}

// part3
const Part3 = (props) => {
  return (
    <div>
      <p>{props.part3} <strong>{props.exercises3}</strong></p>
    </div>
  )
}
// Content
const Content = () => {
  return (
    <div>
      <Part1 part1='Fundamentals of React' exercises1='10' />
      <Part2 part2='Using props to pass data' exercises2='7' />
      <Part3 part3='State of a component' exercises3='14' />


    </div>
  )
}
// total
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.suma}</p>
    </div>
  )
}

// app
const App = () => {
  const course = {
    name: 'Header nuevo',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total suma = {course.parts[0].exercises+ course.parts[1].exercises+ course.parts[2].exercises} /> 

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<Content />, document.getElementById('root'))


// cd desktop/SOFTWARE D/ 