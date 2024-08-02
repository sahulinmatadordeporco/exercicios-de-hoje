const primeiroDiaDoAno = new Date(new Date().getFullYear(), 0, 1);
console.log("Primeiro dia do ano:", primeiroDiaDoAno);

const diaDeHoje = new Date();
console.log("Dia de hoje:", diaDeHoje);

const diferencaEmMilissegundos = diaDeHoje - primeiroDiaDoAno;
const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
console.log("Diferença em dias:", diferencaEmDias);

function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

const dataFormatada = formatarData(diaDeHoje);
console.log("Data formatada:", dataFormatada);