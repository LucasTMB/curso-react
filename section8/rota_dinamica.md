## Rota dinâmica

- Para criar uma rota dinâmica, vamos precisar definir uma **nova Route** em App.js;
- Que deve ter o padrão de: **/products/:id**
- Onde **:id** é o dado dinâmico, ou seja, podemos ter qualquer valor;
- Na página podemos utilizar o hook **useParams** para resgatar esta informação;