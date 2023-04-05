## Criando o provider

- O Provider vai **delimitar onde o contexto é utilizado**;
- Vamos criar uma espécie de componente com a **prop children**;
- E este Provider deve **encapsular os demais componentes** em que precisamos consultar ou alterar o valor;
- Geralmente ele fica em **App.js** ou em **index.js**;
- Agora podemos **compartilhar o valor do contexto** em todos os componentes;