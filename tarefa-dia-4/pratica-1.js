function legalAgeOrNot (age) {
    // escreva aqui a solução de código que verifica se a idade da pessoa é maior ou não que 18 anos (veja que a idade virá através da variável 'age' que está como parâmetro da função)
    // Se for maior ou igual, você deve exibir na tela "A idade é maior ou igual a 18 anos. Pode entrar na boate".
    // Se for menor, você deve exibir na tela "A idade é menor que 18 anos, entrada não permitida!"
    let age1 = 13
    if (age1 >= 18) {

        console.log ('A idade é maior ou igual a 18 anos. Pode entrar na boate')
    }   else {

        console.log ('A idade é menos que 18 anos, entrada não permitida!')
    }
    
    let age2 = 18
    if (age2 >= 18) {

        console.log ('A idade é maior ou igual a 18 anos. Pode entrar na boate')
    } else {

        console.log ('A idade é menos que 18 anos. Entrada não permitida!')
    }

    let age3 = 20
    if (age3 >= 18) {

        console.log ('A idade é maior ou igual a 18 anos. Pode entrar na boate')
    } else {

        console.log ('A idade é menos que 18 anos. Entrada não permitida!')
    }
}

let age1 = 13
let age2 = 18
let age3 = 20

legalAgeOrNot ()
// chame a função legalAgeOrNot que você construiu logo abaixo deste comentário para cada uma das idades em age1, age2, age3.