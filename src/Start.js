import React from "react";
import Game from "./Game";

function Main({ start }) {
    return (
        <div className="main-screen">
            <img className="main-logo" src="./content/logo.png" alt="Imagem do zapcoisa" />
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