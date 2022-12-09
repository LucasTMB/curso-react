const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e) // e = event

        alert("Ativou o evento!")
    }

    const renderSomething = (x) => {
        if (x) 
            return <h1>Renderizando isso</h1>
        else
            return <h1>Também posso renderizar!</h1>
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique em mim!</button>
            </div>
            <div>
                <button onClick={() => alert('Isso é uma função dentro de um evento')}>Clique em mim!</button>
            </div>
            <div>
                <button onClick={() => alert('Isso é uma má prática! Na próxima, crie a função fora do evento')}>Clique em mim!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    
    )

}

export default Events;