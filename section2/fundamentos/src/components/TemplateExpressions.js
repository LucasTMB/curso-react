const TemplateExpressions = () => {

    const name = 'Lucas';
    const data = {
        age: 19,
        job: 'desenvolvedor',
    }

    return (
        <div>
            <p>Olá, meu nome é {name}!</p>
            <p>Tenho {data.age} e sou {data.job}!</p>
        </div>
    )

}

export default TemplateExpressions;