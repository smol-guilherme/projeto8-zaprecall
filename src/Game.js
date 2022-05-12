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

function Cards({ deck, count }) {
    return(
        <> 
            {
                deck.map((item, index) => !item.flipped ? 
                <Question key={index} question={item.question} flipAction={() => flipCard(index)}/> : 
                <Answer count={count} key={index} answer={item.answer} deck={deck} />)
            }
        </>
    )
}

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

function Answer({ deck, answer, index, count }) {
    function updateData(index, result) {
        count()
        deck[index].state.answer
    }
    
    return (
        <div className="card">
            <div className="text-content">
                {answer}
            </div>
            <div className="button-box">
                <div onClick={() => updateData(index, 1)} className="state-1">Não lembrei</div>
                <div onClick={() => updateData(index, 2)} className="state-2">Quase não lembrei</div>
                <div onClick={() => updateData(index, 3)} className="state-3">Zap!</div>
            </div>
        </div>
    )
}

function Flip({ flip }) {
    return (
        <div className="flip">
            <img onClick={flip} src="./content/flip.png" />
        </div>
    )
}

function Bottom({ count }) {
    return (
        <div className="progress">
            {count}/4 CONCLUÍDOS
        </div>
    )
}

export default function Game({ start }) {
    const done = { answer: 0, selectable: true };
    const [cards, setCards] = React.useState([
        {   
            question: 'Pergunta 01?',
            answer: 'Resposta 01!',
            theme: 'default',
            flipped: false,
            state: done
        },
        {
            question: 'Pergunta 02?',
            answer: 'Resposta 02!',
            theme: 'default',
            flipped: false,
            state: done
        },
        {
            question: 'Pergunta 03?',
            answer: 'Resposta 03!',
            theme: 'default',
            flipped: false,
            state: done
        },
        {
            question: 'Pergunta 04?',
            answer: 'Resposta 04!',
            theme: 'default',
            flipped: false,
            state: done
        }
    ]);
    
    function flipCard(index) {
        cards[index].flipped = !cards[index].flipped;
        setCards([...cards])
    }
    
    const [count, setCount] = React.useState(0)
    const [revealed, setRevealed] = React.useState(false)

    function countAnswer() {
        setCount(count + 1)
    }

    function revealCard() {
        setRevealed(!revealed)
    }

    return (
        <div className="main-screen">
            <Logo />
            { !revealed ? <Cover reveal={revealCard} /> : <Cards done={setDone} count={countAnswer} deck={cards} /> }
            <Bottom count={count} />
        </div>
    )
}