import React from 'react'
import './Quiz.css'

export default function Quiz(props) {
    const styles = {display: props.styles}
    const { questions } = props

    const handleClick = (event)=> {
        const parent = event.target.parentElement
        const childElements = parent.querySelectorAll("button")
        childElements.forEach((childElement) => {
            childElement.style.backgroundColor = "#F5F7FB"
            childElement.classNameList.remove = "selected"
            
    })
        event.target.style.backgroundColor="#D6DBF5"
        event.target.classNameList.add = "selected"
    }

     const checkAnswers = () => {
        const buttons = document.querySelectorAll("button")
        buttons.forEach((button) => {
            if (button.className === "correct") {
                button.style.backgroundColor = "#94D7A2"
            } else if (button.className === "selected"){
                button.style.backgroundColor = "red"
            }else {
                button.style.opacity = "0.5"
            }
    })
}

    function decodeHtml(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
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
      
      const allQuestions = questions.map(item => {
        const { question, correct_answer, incorrect_answers } = item
          const answers = addArrays(correct_answer, incorrect_answers)
          return (
            <div className='quiz-question'>
                      <p>{decodeHtml(question)}</p>
                      <div className='answers'>
                          <button onClick={handleClick} className={correct_answer === answers[0] ?  "correct" : "incorrect" }>{decodeHtml(answers[0])}</button>
                          <button onClick={handleClick} className={correct_answer === answers[1] ?  "correct" : "incorrect" }>{decodeHtml(answers[1])}</button>
                          <button onClick={handleClick} className={correct_answer === answers[2] ?  "correct" : "incorrect" }>{decodeHtml(answers[2])}</button>
                          <button onClick={handleClick} className={correct_answer === answers[3] ?  "correct" : "incorrect" }>{decodeHtml(answers[3])}</button>
                      </div>
            </div>
          )
      })

    return (
    <div className='quiz' style={styles}>
        <div className='quiz-start'>
            {allQuestions}
        </div>
            <button className='check-answers' onClick={checkAnswers}>Check answers</button>
    </div>
    )
}