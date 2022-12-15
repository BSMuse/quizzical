import React from 'react'
import './Quiz.css'

export default function Quiz(props) {
    const styles = {display: props.styles}
    return (
    <div className='Quiz' style={styles}>
        <div className='quiz-start'>
            <div className='quiz-question'>
                {/* <h3>{props[0].question}</h3> */}
                <div className='answers'>
                    <button></button><button></button><button></button><button></button>
                </div>
            </div>
            <button className='check-answers'>Check answers</button>
        </div>
    </div>
    )
}