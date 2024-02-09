const faturamentoMensal = [
    ["SP", 67836.43],
    ["RJ", 36678.66],
    ["MG", 29229.88],
    ["ES", 27165.48],
    ["outros", 19849.53]
]


function calcularPercentualRepresentacao(faturamentoPorEstado) {
    let totalFaturamento = 0

    const percentuais = {}

    for (const [, valor] of faturamentoPorEstado) {
        totalFaturamento += valor
    }

    for (const [estado, valor] of faturamentoPorEstado) {
        const percentual = (valor / totalFaturamento) * 100
        percentuais[estado] = percentual.toFixed(2) + '%'
    }

    return percentuais;

}

const percentuais = calcularPercentualRepresentacao(faturamentoMensal)
console.log(percentuais)
