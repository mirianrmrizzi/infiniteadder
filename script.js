let numero = 1
let soma = 0

while (numero !== 0) {
    numero = parseInt(prompt("Entre com um número. Digite 0 para sair"), 10)
    console.log(numero, typeof(numero))
    if (typeof(numero) != 'number' && numero != NaN){
        alert ("Insira um número sua mula "+ typeof(numero) + " " + numero);
    } else {
        soma = (numero + soma)
        alert ("O resultado acumulado é " + soma)   
    }
}
