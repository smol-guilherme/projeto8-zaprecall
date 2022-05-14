import React from "react";
import Game from "./Game";
import Main from "./Main";

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
    {
        question: 'Quem é o pai do gohan?',
        answer: 'Piccolo (pai é quem cria)',
        theme: 'DragonBall',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Quantos saiyajins restaram?',
        answer: '6 - Goku, Vegeta, Gohan, Goten, Trunks, Pan', 
        theme: 'DragonBall',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Qual o verdadeiro nome do Goku?',
        answer: 'Kakarotto',
        theme: 'DragonBall',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Oi _ Goku!',
        answer: 'eu sou',
        theme: 'DragonBall',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Qualquer inimigo...Vegeta: ___',
        answer: 'Inseto!',
        theme: 'DragonBall',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'é mais de ___!!!',
        answer: 'oito miiiiiilllll', 
        theme: 'DragonBall',
        flipped: false,
        revealed: false,
        result: 0
    },    
    {
        question: 'Quem foi Harambe?',
        answer: 'O gorila morto em 2016', 
        theme: 'Memes',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: "O som 'oof' surgiu do jogo __",
        answer: 'Roblox',
        theme: 'Memes',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: "A categoria de memes da qual a Trollface faz parte se chama __",
        answer: 'Rage comics',
        theme: 'Memes',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Qual foi um dos primeiros videos virais do YouTube?',
        answer: 'Evolution of Dance',
        theme: 'Memes',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'A cultura do BIRL foi difundida por __',
        answer: 'Leo Stronda',
        theme: 'Memes',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'O animal que foi eternizado em forma de memes foi __',
        answer: 'O Shiba Inu',
        theme: 'Memes', 
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'O video do choque da uva foi protagonizado por __',
        answer: 'Um cacho uvas (O Lazier Martins foi a vítima)',
        theme: 'Memes',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: "'É uma cilada, Bino' tem origem __",
        answer: 'Na série de TV, Carga Pesada', 
        theme: 'Memes', 
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Quem foi Nazaré?',
        answer: 'A antagonista de Senhora do Destino', 
        theme: 'Memes', 
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Qual o nome do protagonista?',
        answer: 'Luffy (Piratinha que estica)',
        theme: 'One Piece',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'Quantos episodios tem o anime?',
        answer: '+1000',
        theme: 'One Piece',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'O anime vai acabar? ',
        answer: 'Só deus sabe',
        theme: 'One Piece',
        flipped: false,
        revealed: false,
        result: 0
    },
    {
        question: 'O lele-san gosta do anime?',
        answer: 'Infelizmente não',
        theme: 'One Piece',
        flipped: false,
        revealed: false,
        result: 0
    },
];

// {
// question: '',
// answer: '',
// theme: '',
// flipped: false,
// revealed: false,
// result: 0
// },

// {
// question: '',
// answer: '',
// theme: 'Genshin Impact',
// flipped: false,
// revealed: false,
// result: 0
// },
// {
// question: '__ é o Lobo do Norte',
// answer: 'Andrius',
// theme: 'Genshin Impact',
// flipped: false,
// revealed: false,
// result: 0
// },
// {
// question: 'Os nomes dos deuses são baseados no livro __',
// answer: 'Ars Goetia',
// theme: 'Genshin Impact',
// flipped: false,
// revealed: false,
// result: 0
// },

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
        setStart(!start)
    }

    return (
        <div>
            {
                !start ?
                <Main options={options} handleData={handleData} DEFAULTS={DEFAULTS} /> :
                <Game quota={options[0]} theme={options[1]} DEFAULTS={DEFAULTS} start={startGame} setOptions={setOptions} />
            }
        </div>
    )
}