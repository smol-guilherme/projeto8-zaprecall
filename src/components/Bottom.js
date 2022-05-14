import sad from "../assets/images/sad.png"
import partying from "../assets/images/partying-face.png"

function Conclusion({ results, quota }) {
    let zapNums = 0;
    results.forEach(item => item === 3 ? zapNums++ : zapNums);
    return (
        <>
            {((zapNums < quota) || (results.includes(1))) ?
                <div className="conclusion">
                    <h2><img src={sad} alt="Expressão triste" />Putz!</h2>
                    <div>Ainda faltam alguns...</div>
                    <div>Mas não desanime!</div>
                </div> :
                <div className="conclusion">
                    <h2><img src={partying} alt="Expressão comemorativa" />Parabéns!</h2>
                    <div>Você não esqueceu de nenhum flashcard!</div>
                </div>
            }
        </>
    )
}

export default function Bottom({ count, results, quota, max, icons, reset }) {
    return (
        <div className="progress">
            {count !== max ? <></> : <Conclusion results={results} quota={quota} reset={reset} />}
            {count}/{max} CONCLUÍDOS
            {results.length !== max ?
                <div>
                    {results.map((icon, index) => <ion-icon key={index} name={icons[icon]}></ion-icon>)}
                </div> :
                <div>
                    {results.map((icon, index) => <ion-icon key={index} name={icons[icon]}></ion-icon>)}
                    <div className="reset" onClick={reset}>REINICIAR RECALL</div>
                </div>
            }
        </div>
    )
}