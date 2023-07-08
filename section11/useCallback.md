## useCallback

- O hook **useCallback** pode ser utilizado para duas situações;
- Ele basicamente **memoriza uma função**, fazendo ela **NÃO ser reconstruída a cada renderização** de um componente;
- O primeiro caso é quando estamos prezando pela **performance**, então queremos que uma função muito complexa não seja reconstruída toda vez;
- Já o segundo é quando **o próprio React nos indica que uma função deveria estar contida em um useCallback**, para evitar problemas de performance;