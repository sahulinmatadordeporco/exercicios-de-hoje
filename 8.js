// Criando uma matriz com duas linhas e três colunas
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  // Exibindo a matriz no console
  console.log("Matriz original:");
  console.log(matriz);
  
  // Acessando o valor do elemento na segunda linha, terceira coluna
  const elemento = matriz[1][2];
  console.log("Elemento na segunda linha, terceira coluna:", elemento);
  
  // Modificando o valor do elemento na primeira linha, segunda coluna para 99
  matriz[0][1] = 99;
  
  // Exibindo a matriz atualizada
  console.log("Matriz atualizada:");
  console.log(matriz);
  