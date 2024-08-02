const chave1 = Symbol('minhaChave');
const chave2 = Symbol('minhaChave');

console.log(chave1 === chave2); // Resultado: false

const usuario = {};
usuario[chave1] = 'Valor da propriedade';

console.log(usuario[chave1]); // Resultado: Valor da propriedade