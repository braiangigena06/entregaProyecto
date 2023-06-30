const parEImpar = (numero) => {
    if (numero % 2 == 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
}

parEImpar(8);

const esMayor = (numero1 , numero2) => {
    if( numero1 === numero2) return console.log("Ambos numeros son iguales");

    if(numero1 > numero2){
        console.log(numero1 + " es mayor que " + numero2);
    } else{
        console.log(numero2 + " es mayor que " + numero1);
    }
}

esMayor(5,10);

const multiploCinco = (numero) => {
    if(numero % 5 == 0){
        console.log(numero + " es multiplo de 5");
    } else {
        console.log(numero + " no es multiplo de 5");
    }
}

multiploCinco(83);

const ceroAlNumero = (numero) => {
    for( let i = 0; i <= numero; i++){
        console.log(i);
    }
}

ceroAlNumero(5);

const repitePalabra = (palabra, numero) => {
    for( let i = 0 ; i <= numero; i++){
        console.log(palabra);
    }
}

repitePalabra("argentina", 3);

const mostrarArray = (array) => {
    for (const elemento of array) {
            console.log(elemento);
    }
}

let dia = ["lunes", "martes", "miercoles", "jueves", "viernes"];

mostrarArray(dia);

const noMonstrarCinco = (array) => {
    for(let i = 0; i <= array.length; i++){
        if(i != 4){
            console.log(array[i]);
        }
    }
}

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

noMonstrarCinco(arrayNumeros);

const arrayMultiplicado = (array, numero) => {
    for (const elemento of array) {
        console.log("la multiplicacion de " + elemento + " X " + numero + " es " + elemento*numero);
    }
}

arrayMultiplicado(arrayNumeros, 4);