import React from "react";
import Game from "./Game";

function Main({ start }) {
    return (
        <div className="main-screen">
            <img src="https://www.significadodossonhos.net.br/wp-content/uploads/2012/10/significado-dos-sonhos-peixe1.jpg" alt="Imagem do zapcoisa" />
            <div onClick={start}>Iniciar Zap Zap</div>
        </div>
    )
}

export default function Start() {
    const [start, setStart] = React.useState(false);

    function startGame() {
        console.log("zap?")
        if(!start) {
            console.log("zap!")
            setStart(!start)
        }
    }

    return(
        <div>
            { !start ? <Main start={startGame} /> : <Game start={startGame} /> }
        </div>
    )
}