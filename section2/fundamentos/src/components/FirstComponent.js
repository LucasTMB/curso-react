import MyComponent from './MyComponent';

// arquivo de estilo
import '../App.css';

const FirstComponent = () => {

    return (
        // Essa função faz isso
        <div className="FirstComponent-style">
            {/* Algum comentário */}
            <h2>Meu primeiro componente</h2>
            <MyComponent />
        </div>
    )

}

export default FirstComponent;