## useImperativeHandle

- Com o hook **useImperativeHandle** temos como acionar ações em um outro componente de forma imperativa;
- Como não podemos passar refs como props, precisamos usar uma função **fowardRef**;
- Isso não permite passar as referências, e torna o nosso exemplo viável;