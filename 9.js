function multiplica(a, b) {
    return a * b;
}

const resultadoMultiplicacao = multiplica(7, 8);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

function quadrado(numero) {
    return numero * numero;
}

const arrayOriginal = [1, 2, 3, 4, 5];
const arrayQuadrados = arrayOriginal.map(quadrado);
console.log("Array com os quadrados:", arrayQuadrados);