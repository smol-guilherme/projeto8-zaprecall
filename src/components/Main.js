import logo from "../assets/images/logo.png"

function Forms({ handleData, children }) {
    return (
        <form className="forms" onSubmit={handleData} >
            { children }
        </form>
    )
}

export default function Main({ handleData, options, DEFAULTS }) {
    const themes = [];

    DEFAULTS.forEach((item) => {
        if (!themes.includes(item.theme))
            themes.push(item.theme)
    })

    return (
        <div className="main-screen">
            <img className="main-logo" src={logo} alt="logo ZapRecall" />
            <div className="title">ZapRecall</div>
            {
                options.length === 0 ?
                    <Forms handleData={handleData}>
                        <input className="quota" placeholder="Escolha sua meta de zaps" type="number" min={1} max={DEFAULTS.length} required></input>
                        <button className="button" type="submit">Iniciar Recall</button>
                    </Forms> :
                    <Forms handleData={handleData}>
                        <select className="theme" defaultValue={""}>
                            <option value="" disabled>Selecione seu deck</option>
                            {themes.map((t, index) => <option key={index} value={t}>{t}</option>)}
                        </select>
                        <button className="button" type="submit">Iniciar Recall</button>
                    </Forms>
            }
        </div>
    )
}