import flip from "../assets/images/flip.png"

function Question({ index, question, flipCard }) {
    return (
        <div className="card">
            <div className="text-content">
                {question}
            </div>
            <div className="flip">
                <img onClick={() => flipCard(index)} src={flip} alt={<ion-icon name="shuffle-outline"></ion-icon>} />
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

export default function Cards({ index, card, flipCard, setResult }) {
    return (
        <>
            {
                !card.flipped
                    ? <Question key={index} flipCard={flipCard} index={index} question={card.question} />
                    : <Answer key={index} card={card} answer={card.answer} setResult={setResult} index={index} />
            }
        </>
    )
}