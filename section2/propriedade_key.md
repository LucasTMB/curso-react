## A propriedade key

- Iterar listas sem a **propriedade key** nos gera um warning, podemos verificar isso no console;
- **O React precisa de uma chave única** em cada um dos itens iterados;
- Isso serve para **ajudá-lo na renderização do componente**;
- Geralmente teremos um **array de objetos** e podemos colocar key como alguma chave única, como o **id** de algum dado;
- Em **último caso** devemos utilizar o index do método map;