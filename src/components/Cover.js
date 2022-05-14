export default function Cover({ index, reveal, icons, result }) {
    return (
        <>
            {
                result === 0 ?
                    <div className="cover">
                        <h1> Pergunta {index + 1} </h1>
                        <ion-icon onClick={reveal} name={icons[result]}></ion-icon>
                    </div>
                    :
                    <div className="cover">
                        <h1 className={'result-' + result.toString()}> Pergunta {index + 1} </h1>
                        <ion-icon name={icons[result]}></ion-icon>
                    </div>
            }
        </>
    )
}