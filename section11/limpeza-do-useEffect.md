## Limpeza do useEffect

- Alguns efeitos precisam ter uma **técnica de cleanup (limpeza)** para garantir o seu funcionamento;
- Não fazer isso pode gerar **erros ou comportamentos indesejados**;
- **Exemplo:** um timeout que ao mudar de página pode continuar a ser executado, pela falta desta limpeza;