// console.log( false === '0' );
// console.log( null === undefined );
// console.log( " \t\r\n" === 0 );
// console.log( ' ' === 0 );

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '15';

function comparaVariaveis(variavel1,variavel2){
    if(variavel1 == variavel2){
        console.log(`As variáveis ${variavel1} e ${variavel2} tem o mesmo valor, mas tipos diferentes`);
    }
    else {
        console.log(`As variáveis ${variavel1} e ${variavel2} não tem o mesmo valor`);
    }
}

comparaVariaveis(numeroUm, stringUm);
comparaVariaveis(numeroTrinta, stringTrinta);
comparaVariaveis(numeroDez, stringDez);

