import Logo from "./Logo";
import React from "react";

function Question({ question, flipAction }) {
    return (
        <div className="card">
            <div className="text-content">
                {question}
            </div> 
            { <Flip flip={flipAction} /> }
        </div>
    )
}

function Answer({ answer }) {
    return (
        <div className="card">
            <div className="text-content">
                {answer}
            </div>
            <div className="button-box">
                <div className="state-1">Não lembrei</div>
                <div className="state-2">Quase não lembrei</div>
                <div className="state-3">Zap!</div>
            </div>
        </div>
    )
}

function Flip({ flip }) {
    return (
        <div className="flip">
            <img onClick={flip} src="./content/Vector.png" />
        </div>
    )
}

function Bottom() {
    return (
        <div className="progress">
            0/4 CONCLUÍDOS
        </div>
    )
}

export default function Game({ start }) {
    const [side, setSide] = React.useState(false);
    const [done, setDone] = React.useState(0);
    const [cards, setCards] = React.useState([
        {
            question: 'Pergunta 01?',
            answer: 'Resposta 01!',
            theme: 'default',
            state: undefined,
            flipped: false
        },
        {
            question: 'Pergunta 02?',
            answer: 'Resposta 02!',
            theme: 'default',
            state: undefined,
            flipped: false
        },
        {
            question: 'Pergunta 03?',
            answer: 'Resposta 03!',
            theme: 'default',
            state: undefined,
            flipped: false
        },
        {
            question: 'Pergunta 04?',
            answer: 'Resposta 04!',
            theme: 'default',
            state: undefined,
            flipped: false
        }
    ]);

    function flipCard(index) {
        cards[index].flipped = !cards[index].flipped;
        setCards([...cards])
    }

    return (
        <div className="main-screen">
            <Logo />
                { cards.map((item, index) => !item.flipped ? <Question key={index} question={item.question} flipAction={() => flipCard(index)}/> : <Answer key={index} answer={item.answer} />)}
            <Bottom />
        </div>
    )
}