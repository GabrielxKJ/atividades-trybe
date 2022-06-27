import readline from "readline-sync";
import estacoes from "./src/estações";
import meses from "./src/mesesDoAno";

const mesesNome = Object.values(meses);

const escolhaSeuMes = readline.keyInSelect(mesesNome, "escolha um mês do ano");

const estacoesSul = {
    [estacoes.outono]: [meses.março, meses.abril, meses.maio, meses.junho],
    [estacoes.inverno]: [ meses.junho, meses.julho, meses.agosto, meses.setembro],
    [estacoes.verão]: [ meses.dezembro, meses.janeiro, meses.fevereiro, meses.março ],
    [estacoes.primavera]: [ meses.setembro, meses.outubro, meses.novembro, meses.dezembro]
};

const estacoesNorte = {
    [estacoes.primavera]: estacoesSul[estacoes.outono],
    [estacoes.verão]: estacoesSul[estacoes.inverno],
    [estacoes.outono]: estacoesSul[estacoes.primavera],
    [estacoes.inverno]: estacoesSul[estacoes.verão]
}

const hemisferios = {
    "Norte": estacoesNorte,
    "Sul": estacoesSul
}


const escolhaHemisferio = readline.keyInSelect(Object.keys(hemisferios), "escolha um hemisfério");

const month = Object.values(meses)[escolhaHemisferio]

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n{hemiferios}`);
console.log(`Estações:`);

const escolheEstaçõesHemisferios = Object.values(hemisferios)[escolhaHemisferio];
Object.entries(escolheEstaçõesHemisferios).map((entry) => {
    const season = entry[0];
    const months = entry[1];
    if(months.includes(month)) console.log(estacoes);
});