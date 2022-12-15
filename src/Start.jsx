import React from 'react'
import './Start.css'

export default function Start(props) {
    const styles = {display: props.styles}

    return (
    <div className='quiz-open' style={styles}>
        <h1>Quizzical</h1>
        <p>How smart are you... Really?</p>
        <button onClick={props.clickToStart}>Start quiz</button>
    </div> ) 
} 
