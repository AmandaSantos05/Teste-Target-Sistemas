let fs = require('fs');


function calcularEstatisticasDeFaturamento(faturamento) {
    let menorFaturamento = faturamento[0].valor
    let maiorFaturamento = faturamento[0].valor
    let somaFaturamento = 0

    for (let i = 0; i < faturamento.length; i++) {
        let dados = faturamento[i].valor;
        if (dados > 0) {
            if (dados < menorFaturamento) {
                menorFaturamento = dados;
            }

            if (dados > maiorFaturamento) {
                maiorFaturamento = dados;
            }

            somaFaturamento += dados
        }
    }

    let mediaMensal = somaFaturamento / faturamento.length
    let diasAcimaDaMedia = 0

    for (let i = 0; i < faturamento.length; i++) {
        let dadoAtual = faturamento[i].valor
        if (dadoAtual > mediaMensal) {
            diasAcimaDaMedia++
        }
    }

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    }

}


const dadosFaturamento = JSON.parse(fs.readFileSync('dados.json'))

let estatisticas = calcularEstatisticasDeFaturamento(dadosFaturamento)

console.log(estatisticas)