import React from 'react'
import ReactDOM from 'react-dom'

// Header
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}
// Content
const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} <strong>{props.exercises1}</strong>
        {props.part2} <strong>{props.exercises2}</strong>
        {props.part3} <strong>{props.exercises3}</strong>
      </p>
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


const App = () => {
  // const-definitions

  return (
    <div>
      <Header course= 'Half Stack application development' />
       <Content  part1 = 'Fundamentals of React'  exercises1 = '10'/>
       <Content  part2 = 'Using props to pass data' exercises2 = '7'/>
       <Content  part3 = 'State of a component' exercises3 = '14'/>
      <Total suma = {10+7+14}/> 
    </div>
  )
}

// const App = () => {
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'))