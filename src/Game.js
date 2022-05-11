import Logo from "./Logo";
import React from "react";


function Bottom() {
    return(
        <div>
            oi
        </div>
    )
}


export default function Game({ 
    start }) {
    const [side, setSide] = React.useState(false)
    const button1 = 'gira Pirueta'
    const button2 = 'but1 but2 but3'
    const card = {
        question: 'Ah meu deus?',
        answer: 'Meu deus!',
        state: undefined
    }
    const cards = [
        {
            question: 'Ah meu deus?',
            answer: 'Meu deus!',
            state: undefined
        },
        {
            question: 'Ah meu deus?',
            answer: 'Meu deus!',
            state: undefined
        },
    ]
    return (
        <div className="main-screen">
            <Logo />
            <div className="card">
                <div>{ !side ? card.question : card.answer}</div>
                <div>{ !side ? button1 : button2}</div>
            </div>
            <Bottom />
        </div>
    )
}