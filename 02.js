function sequenciaFibonacci(num) {
    let fibSequencia = [0, 1];

    for (let i = 2; i <= num; i++) {
        fibSequencia[i] = fibSequencia[i - 1] + fibSequencia[i - 2]
    }

    return fibSequencia;
}



function pertenceSequenciaOuNao(n) {
    let fib = sequenciaFibonacci(n)

    for (let i = 0; i <= fib.length; i++) {
        if (fib[i] === n) {
            return true;
        }
    }

    return false;
}


let input = 14
let ehFibonacci = pertenceSequenciaOuNao(input);

if (ehFibonacci) {
    console.log(`${input} pertence à sequência de Fibonacci.`)
} else {
    console.log(`${input} não pertence à sequência de Fibonacci.`)
}