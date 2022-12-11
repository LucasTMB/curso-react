## Desestruturando props

- É super comum passar **mais de uma prop em um componente**;
- Para facilitar isso, o React nos permite **desestruturar as propriedades que chegam**, com o recurso de destructuring;
- Se temos duas props: name e age;
- Podemos fazes assim: function MyComponent(**{name, age}**);
- Agora **não precisamos mais utilizar** props.algumaCoisa; 