let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


if (produtoA.internacional == true) {

        let preco = produtoA.valor

        let imposto = 0.2

        let valorcomimposto = preco + preco * imposto

        newFunction(valorcomimposto)

}   else {

        let preco = produtoB.valor
        
        let imposto = 0.12

        let valorcomimposto = preco + preco * imposto

        newFunction_1(valorcomimposto);
} 

if (produtoB.internacional == true) {

    let preco = produtoB.valor

        let imposto = 0.2

        let valorcomimposto = preco + preco * imposto

        newFunction (valorcomimposto)

}   else {

        let preco = produtoB.valor
        
        let imposto = 0.12

        let valorcomimposto = preco + preco * imposto

        newFunction_1 (valorcomimposto)

}

if (produtoC.internacional == true) {

    let preco = produtoC.valor

        let imposto = 0.2

        let valorcomimposto = preco + preco * imposto

        newFunction(valorcomimposto);

}   else {

        let preco = produtoC.valor
        
        let imposto = 0.12

        let valorcomimposto = preco + preco * imposto

        newFunction_1 (valorcomimposto)
}

function newFunction_1(valorcomimposto) {
    console.log('O produto é nacional');
    console.log('O valor com imposto é:', valorcomimposto);
}

function newFunction(valorcomimposto) {
    console.log('O produto é internacional');
    console.log('O valor com imposto é:', valorcomimposto);
}
