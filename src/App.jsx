import React from 'react'
import './App.css'
import Start from './Start'
import Quiz from "./Quiz"

function App() {

  const [displayStart, changeStart] = React.useState(true) 
  const [displayQuiz, changeQuiz] = React.useState(false)
  const [questions, changeQuestions] = React.useState([])

  function addArrays(array1, array2) {
    let array3 = array2.concat(array1)
    let array4 = []
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * array3.length)
      const element = array3.splice([randomIndex],1)[0]
      array4.push(element)
    }
    return array4;
  }


  React.useEffect(()=> {
    fetch(`https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple`)
    .then(res => res.json())
    .then(data => {
      const newQuestion = data.results
      changeQuestions(newQuestion.map(question => {
        return {...question, answer: addArrays(question.correct_answer,question.incorrect_answers)}
      }))
    })
  }, [])

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
       displayQuiz = {displayQuiz}
       questions={questions}
      styles={displayQuiz ? "block" : "none" }
       /> 
    </div>
  )
}

export default App 

