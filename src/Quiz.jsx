import React from 'react'
import './Quiz.css'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

export default function Quiz(props) {
    const [allQuestions, changeQuestions] = React.useState()
    const [quiz,quizDone] = React.useState(false) 
    let ids = []
    const [score, changeScore] = React.useState(0)
    const [chosenIds, changeIds] = React.useState([])
    const styles = {display: props.styles}
    const { questions } = props
    const { displayQuiz } = props

    const handleClick = (event)=> {
        let questionIds = []
        const parent = event.target.parentElement
        const childElements = parent.querySelectorAll("button")
        childElements.forEach((childElement) => {
            childElement.style.backgroundColor = "#F5F7FB" 
            questionIds.push(childElement.id)
    })
        event.target.style.backgroundColor= "#D6DBF5"
        ids = ids.filter(item => !questionIds.includes(item))
        ids.push(event.target.getAttribute('id'))
        changeIds(ids)
    }

     const checkAnswers = () => {
        quizDone(true)
        const buttons = document.querySelectorAll("button")
        buttons.forEach((button) => {
            if (chosenIds.includes(button.id) && button.className === "correct") {
                button.style.backgroundColor = "#94D7A2"
                changeScore(prevState=>prevState + 1)
            }else if (button.className === "correct"){
                button.style.backgroundColor = "#94D7A2"
            } 
            else if (button.className === "incorrect" && chosenIds.includes(button.id)) {
                button.style.backgroundColor = "#FF0000"
            }
            else {
                button.style.opacity = "0.5"
            }
    })
}

    function decodeHtml(html) {
        const txt = document.createElement("textarea")
        txt.innerHTML = html
        return txt.value
      }


      React.useEffect(()=> {changeQuestions(
        questions.map(item => {
        const { question, correct_answer, answer} = item
          return (
            <div className='quiz-question'>
                      <p>{decodeHtml(question)}</p>
                      <div className='answers'>
                          <button onClick={handleClick} id = {nanoid()} className={correct_answer === answer[0] ?  "correct" : "incorrect" }>{decodeHtml(answer[0])}</button>
                          <button onClick={handleClick} id = {nanoid()} className={correct_answer === answer[1] ?  "correct" : "incorrect" }>{decodeHtml(answer[1])}</button>
                          <button onClick={handleClick} id = {nanoid()} className={correct_answer === answer[2] ?  "correct" : "incorrect" }>{decodeHtml(answer[2])}</button>
                          <button onClick={handleClick} id = {nanoid()} className={correct_answer === answer[3] ?  "correct" : "incorrect" }>{decodeHtml(answer[3])}</button>
                      </div>
            </div>
            )
         })
        )
        },[displayQuiz])
        
        const playAgain = () => {
            console.log('clicked')
            quizDone(false)
            redoQuiz(true)
        }
        const correctAnswers = 
        <div className='correct-container'>
            <p>You scored {score}/4 correct answers</p>
            <button className='play-again' onClick={playAgain}>Play again</button>
        </div>
    
    return (
    <div className='quiz' style={styles}>
        <div className='quiz-start'>
            {allQuestions}
        </div>
            {!quiz && <button className='check-answers' onClick={checkAnswers} disabled={chosenIds.length < 4}>Check answers</button>}
            <div>
            {quiz && correctAnswers}
            {/* {redo && <Quiz/>} */}
        </div>
    </div>
    )
}