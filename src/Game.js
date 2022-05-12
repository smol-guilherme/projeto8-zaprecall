import Logo from "./Logo";
import React from "react";

function Cover({ index, reveal, icons, result }) {
    return(
        <div className="cover">
            { result === 0 ? <h1> Pergunta {index+1} </h1> : <h1 className={'result-'+result.toString()}> Pergunta {index+1} </h1> } 
            <ion-icon onClick={reveal} name={icons[result]}></ion-icon>
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

function Conclusion({ results, quota }) {
    console.log(results)
    let zapNums = 0
    results.forEach(item => item === 3 ? zapNums++ : zapNums);
    return(
        <>
            { (results.includes(1) || quota < zapNums) ?
                <div className="conclusion">
                    <h2><img src="./content/sad.png" />Putz!</h2>
                    <div>Ainda faltam alguns...</div>
                    <div>Mas não desanime!</div>
                </div> :
                <div className="conclusion">
                    <h2><img src="./content/partying-face.png" />Parabéns!</h2>
                    <div>Você não esqueceu de nenhum flashcard!</div>
                </div>
            }
        </>
    )
}

function Bottom({ count, results, quota, icons }) {
    return (
        <div className="progress">
            { count !== 4 ? <></> : <Conclusion results={results} quota={quota} /> }
            { count }/4 CONCLUÍDOS
            <div>
                { results.length === 0 ? " " : results.map((icon, index) => <ion-icon key={index} name={icons[icon]}></ion-icon>) }
            </div>
        </div>
    )
}

export default function Game({ start, DEFAULTS, theme, quota }) {
    const icons = ["play-outline", "close-circle", "help-circle", "checkmark-circle"]
    const [count, setCount] = React.useState(0);
    const [answers, setAnswers] = React.useState([]);
    const [cards, setCards] = React.useState(pickTheme());
    
    function pickTheme() {
        console.log(theme)
        if(theme === "") {
            const newSet = DEFAULTS.filter((card) => card.theme === theme)
            return newSet;    
        }
        return DEFAULTS;
    }

    function revealCard(revealIndex) {
        cards[revealIndex].revealed = !cards[revealIndex].revealed;
        setCards([ ...cards ]);
    }

    function flipCard(flipIndex) {
        cards[flipIndex].flipped = true
        setCards([ ...cards ]);
    }

    function setResult(resultIndex, result = 0) {
        if (cards[resultIndex].result === 0) {
            cards[resultIndex].result = result;
            revealCard(resultIndex);
            setCount(count + 1);
            setAnswers([...answers, result]);
            setCards([ ...cards ]);
        }
    }

    return (
        <div className="main-screen">
            <Logo />
            { 
                cards.map((card, index) => !card.revealed
                ? <Cover key={index} index={index} reveal={() => revealCard(index)} icons={icons} result={card.result} /> 
                : <Cards key={index} setResult={setResult} flipCard={flipCard} index={index} card={card} /> )
            }
            <Bottom results={answers} quota={quota} count={count} icons={icons} />
        </div>
    )
}
