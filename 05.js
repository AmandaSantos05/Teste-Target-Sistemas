function inverterString(input) {
    let strInvertida = ''
    for (let i = input.length - 1; i >= 0; i--) {
        strInvertida += input[i]
    }

    return strInvertida;

}

let stringOriginal = 'Amanda'
let stringInvertida = inverterString(stringOriginal)
console.log(stringOriginal)
console.log(stringInvertida)