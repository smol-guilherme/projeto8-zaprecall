import React from "react";
import Game from "./Game";

const DEFAULTS = [
    {
        question: 'O que é JSX? ',
        answer: 'Uma extensão de linguagem do JavaScript',
        theme: 'React',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'O React é __ ',
        answer: 'uma biblioteca JavaScript para construção de interfaces',
        theme: 'React',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Componentes devem iniciar com __ ',
        answer: 'letra maiúscula',
        theme: 'React',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões',
        theme: 'React',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'O ReactDOM nos ajuda __ ',
        answer: 'interagindo com a DOM para colocar componentes React na mesma',
        theme: 'React',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Usamos o npm para __ ',
        answer: 'gerenciar os pacotes necessários e suas dependências',
        theme: 'React',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Usamos props para __ ',
        answer: 'passar diferentes informações para componentes',
        theme: 'React',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Usamos estado (state) para __ ',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
        theme: 'React',
        flipped: false,
        revealed: false,
        result: 0
    },
];

function Forms({ handleData, children }) {
    return (
        <form className="forms" onSubmit={handleData} >
            { children }
        </form>
    )
}

function Main({ handleData, options }) {
    const themes = [];

    DEFAULTS.forEach((item) => {
        if (!themes.includes(item.theme))
            themes.push(item.theme)
    })

    return (
        <div className="main-screen">
            <img className="main-logo" src="./content/logo.png" alt="./content/flash.png" />
            <div className="title">ZapRecall</div>
            {
                options.length === 0 ?
                    <Forms handleData={handleData}>
                        <input className="quota" placeholder="Escolha sua meta de zaps" type="number" min={1} max={DEFAULTS.length} required></input>
                        <button className="button" type="submit">Iniciar Recall</button>
                    </Forms> :
                    <Forms handleData={handleData}>
                        <select className="theme" >
                            <option value="" disabled selected>Selecione seu deck</option>
                            {themes.map((t, index) => <option key={index} value={t}>{t}</option>)}
                        </select>
                        <button className="button" type="submit">Iniciar Recall</button>
                    </Forms>
            }
        </div>
    )
}

export default function Start() {
    const [start, setStart] = React.useState(false);
    const [options, setOptions] = React.useState([]);

    function handleData(submitEvent) {
        submitEvent.preventDefault();
        const forms = submitEvent.target;
        switch(forms[0].type) {
            case 'number':
                setOptions(forms[0].value);
                break;
            case 'select-one':
                const newOpt = [...options, forms[0].value]
                setOptions(newOpt);
                startGame();
                break;
            default:
                break;
        }
    }

    function startGame() {
        if (!start && options[0] !== undefined) {
            setStart(!start)
        }
    }

    return (
        <div>
            {
                !start ?
                    <Main options={options} handleData={handleData} /> :
                    <Game quota={options[0]} theme={options[1]} DEFAULTS={DEFAULTS} start={startGame} />
            }
        </div>
    )
}