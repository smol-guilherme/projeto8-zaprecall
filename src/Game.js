import Logo from "./Logo";
import React from "react";

function Cover({ reveal }) {
    return(
        <div className="cover">
            Pergunta {'aaaa'}
            <ion-icon onClick={reveal} name="play-outline"></ion-icon>
        </div>
    )
}

function Cards({ index, card, flipCard, setResult }) {
    return(
        <>
            {
                !card.flipped 
                ? <Question key={index} flipCard={flipCard} index={index} question={card.question} />
                : <Answer key={index} card={card} answer={card.answer} setResult={setResult} index={index} />
            }
        </>
    )
}

function Question({ index, question, flipCard }) {
    return (
        <div className="card">
            <div className="text-content">
                {question}
            </div>
            <div className="flip">
                <img onClick={() => flipCard(index)} src="./content/flip.png" />
            </div>
        </div>
    )
}

function Answer({ index, answer, setResult }) {
    return (
        <div className="card">
            <div className="text-content">
                {answer}
            </div>
            <div className="button-box">
                <div onClick={() => setResult(index, 1)} className="state-1">Não lembrei</div>
                <div onClick={() => setResult(index, 2)} className="state-2">Quase não lembrei</div>
                <div onClick={() => setResult(index, 3)} className="state-3">Zap!</div>
            </div>
        </div>
    )
}

// <ion-icon name="help-circle"></ion-icon>
// <ion-icon name="checkmark-circle"></ion-icon>
// <ion-icon name="close-circle"></ion-icon>

function Bottom({ count, answers }) {
    const icons = ["close-circle", "help-circle", "checkmark-circle"]
    return (
        <div className="progress">
            { count }/4 CONCLUÍDOS
            { answers.length === 0 ? " " : answers.map((icon) => <ion-icon name={icons[icon-1]}></ion-icon>) }
        </div>
    )
}

export default function Game({ start }) {
    const [count, setCount] = React.useState(0);
    const [answers, setAnswers] = React.useState([])
    const [cards, setCards] = React.useState([
        {   
            question: 'Pergunta 01?',
            answer: 'Resposta 01!',
            theme: 'default',
            flipped: false,
            revealed: false,
            result: undefined
        },
        {
            question: 'Pergunta 02?',
            answer: 'Resposta 02!',
            theme: 'default',
            flipped: false,
            revealed: false,
            result: undefined
        },
        {
            question: 'Pergunta 03?',
            answer: 'Resposta 03!',
            theme: 'default',
            flipped: false,
            revealed: false,
            result: undefined
        },
        {
            question: 'Pergunta 04?',
            answer: 'Resposta 04!',
            theme: 'default',
            flipped: false,
            revealed: false,
            result: undefined
        }
    ]);

    function revealCard(revealIndex) {
        cards[revealIndex].revealed = true;
        setCards([ ...cards ]);
    }

    function flipCard(flipIndex) {
        cards[flipIndex].flipped = true
        setCards([ ...cards ]);
    }

    function setResult(resultIndex, result = 0) {
        if (cards[resultIndex].result === undefined) {
            cards[resultIndex].result = result;
            setCount(count + 1);
            setAnswers(answers + result)
            console.log(answers)
            setCards([ ...cards ]);
        }
    }

    return (
        <div className="main-screen">
            <Logo />
            { 
                cards.map((card, index) => !card.revealed 
                ? <Cover reveal={() => revealCard(index)} /> 
                : <Cards key={index} setResult={setResult} flipCard={flipCard} index={index} card={card} /> )
            }
            <Bottom results={answers} count={count} />
        </div>
    )
}
