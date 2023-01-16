## Refatorando o POST

- Podemos **utilizar o mesmo hook** para incluir uma etapa de POST;
- **Vamos criar um novo useEffect** que mapeia uma outra mudança de estado;
- Após ela ocorrer executamos a adição de produto;
- **Obs:** nem sempre reutilizar um hook é a melhor estratégia;