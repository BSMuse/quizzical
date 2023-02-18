import React from 'react'
import './App.css'
import Start from './Start'
import Quiz from "./Quiz"

function App() {

  const [displayStart, changeStart] = React.useState(true) 
  const [displayQuiz, changeQuiz] = React.useState(false)
  const [questions, changeQuestions] = React.useState([])
  const allQuestions = ""

  React.useEffect(()=> {
    fetch(`https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple`)
    .then(res => res.json())
    .then(data => {changeQuestions(data.results)})
  }, [0])

const handleClickToStart = ()=> {
  changeStart(false)
  changeQuiz(true)
}

  return (
    <div className="App">
      <Start 
      clickToStart={handleClickToStart}
      styles={!displayStart ? "none" : "block" }
      />
       <Quiz
       questions={questions}
      styles={displayQuiz ? "block" : "none" }
       /> 
    </div>
  )
}

export default App 

