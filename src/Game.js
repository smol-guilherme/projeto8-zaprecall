import React from "react";
import Logo from "./components/Logo";
import Cover from "./components/Cover";
import Cards from "./components/Cards";
import Bottom from "./components/Bottom";

const RNG = 0.33;

export default function Game({ start, DEFAULTS, theme, quota, setOptions }) {
    const icons = ["play-outline", "close-circle", "help-circle", "checkmark-circle"]
    const [count, setCount] = React.useState(0);
    const [answers, setAnswers] = React.useState([]);
    const [cards, setCards] = React.useState(pickTheme);

    function randomize() {
        return Math.random() - RNG;
    }

    function resetAll() {
        setCards([]);
        setOptions([]);
        setCount(0);
        setAnswers([]);
        start();
    }

    function pickTheme() {
        if (theme.length !== 0) {
            const newSet = [...DEFAULTS.filter((card) => card.theme === theme)];
            return newSet.sort(randomize);
        }
        const defaultSet = [...DEFAULTS]
        return defaultSet.sort(randomize);
    }

    function revealCard(revealIndex) {
        cards[revealIndex] = { ...cards[revealIndex], revealed: !cards[revealIndex].revealed };
        setCards([...cards]);
    }

    function flipCard(flipIndex) {
        cards[flipIndex] = { ...cards[flipIndex], flipped: !cards[flipIndex].flipped };
        setCards([...cards]);
    }

    function setResult(resultIndex, result = 0) {
        if (cards[resultIndex].result === 0) {
            cards[resultIndex] = { ...cards[resultIndex], result: result };
            revealCard(resultIndex);
            setCount(count + 1);
            setAnswers([...answers, result]);
            setCards([...cards]);
        }
    }

    return (
        <div className="main-screen">
            <Logo />
            {
                cards.map((card, index) => !card.revealed
                    ? <Cover key={index} index={index} reveal={() => revealCard(index)} icons={icons} result={card.result} />
                    : <Cards key={index} setResult={setResult} flipCard={flipCard} index={index} card={card} />)
            }
            <Bottom results={answers} quota={quota} count={count} max={cards.length} icons={icons} reset={resetAll} />
        </div>
    )
}
