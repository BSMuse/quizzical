import React from 'react'
import './App.css'
import Start from './Start'
import Quiz from "./Quiz"

function App() {

  const [displayStart, changeStart] = React.useState(true) 
  const [displayQuiz, changeQuiz] = React.useState(false)
  const [questions, changeQuestions] = React.useState([])

  React.useEffect(()=> {
    fetch(`https://opentdb.com/api.php?amount=4&difficulty=hard&type=multiple`)
    .then(res => res.json())
    .then(data => {changeQuestions(data.results)})
  }, [0])

const handleClickToStart = ()=> {
  changeStart(false)
  changeQuiz(true)
  // console.log(questions[0].incorrect_answers)
  const test = allQuestions(questions[0])
  console.log(test[0])
}



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


class Question {
  constructor(questions){
    Object.assign(this, questions)
  }
  newObject() 
  {
    const { question, correct_answer, incorrect_answers} = this
    return (
      // `This is the question:${question} this is the right answer ${correct_answer} and these are wrong ${incorrect_answers}`
      {aQuestion: question, 
      answers: addArrays(correct_answer, incorrect_answers),
      correct: correct_answer,}
    )
  }s
}

const allQuestions = (array) => {
  let questionsArray = ""
for (let i=0; i <array.length; i++) {
  questionsArray += new Question(array[i])
}
return questionsArray
}


// const handleClickAnswerCheck = ()=> {

// } 

  return (
    <div className="App">
      <Start 
      clickToStart={handleClickToStart}
      styles={!displayStart ? "none" : "block" }
      />
       <Quiz
      styles={displayQuiz ? "block" : "none" }
       /> 
    </div>
  )
}

export default App 

