## A importância do useEffect

- O **useEffect** faz com que determinada ação seja executada apenas uma vez;
- Isso é interessante pois os componentes estão sempre se **re-renderizando**, então precisamos ter **ações únicas** às vezes;
- O useEffect ainda possui um **array de dependências**, que deve conter os dados que ativem a execução da função de forma automática;
- O useEffect estará presente sempre nas **requisições assíncronas**!