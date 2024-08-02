// Declare a variável 'numStr' com o valor "123.45" (string)
let numStr = "123.45";

// Converta 'numStr' para um número
let num = Number(numStr);

// Arredonde o número para o inteiro mais próximo
let numArredondado = Math.round(num);

// Converta o número arredondado para uma string com 3 casas decimais
let numStringFormatada = numArredondado.toFixed(3);

// Verifique se 'numStr' é NaN (Not-a-Number)
let isNan = isNaN(num);

// Exiba os resultados no console
console.log("Número convertido:", num);
console.log("Número arredondado:", numArredondado);
console.log("Número formatado:", numStringFormatada);
console.log("É NaN?", isNan);