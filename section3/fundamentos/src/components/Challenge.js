const Challenge = () => {

    const handleMyEvent = () => {
        let num1 = parseInt(document.querySelector('#num1').value);
        let num2 = parseInt(document.querySelector('#num2').value);
        let output = document.querySelector('#output');

        let soma = num1 + num2;

        output.innerText = `Resultado da soma: ${soma}`
    }

    return (
        <div>
            <div>
                <input type="number" name="num1" id="num1" />
            </div>
            <div>
                <input type="number" name="num2" id="num2" />
            </div>
            <div>
                <button onClick={handleMyEvent}>Somar valores</button>
            </div>
            <div id='output'></div>
        </div>
    )

}

export default Challenge;