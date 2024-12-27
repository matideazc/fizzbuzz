// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
function parte1(){
    for (let i=3;i<=22;i+=3) {
        console.log(i)
    }
}
parte1();
// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

function parte2(){
    let i=11;
    while(i > 1){
        i--;
        console.log(i);
    }
}
parte2();
// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

// for (let numero=3;numero>=3 && numero<22 ; numero++);
// console.log(numero);

// function fizzbuzz(){
//     for(i=1;i<=50;i++){
//         let texto="";

//         if(i%3===0 ){
//              texto="fizz";
//         }
//         if(i%5===0){
//              texto="buzz"
//         }
//         console.log (texto || i);
//     }
// }
// fizzbuzz();

function fizzbuzzclasico(){
    for(i=1;i<=50;i++){
        if(i%3===0 && i%5===0){
            console.log("fizzbuzz");
        }
        else if(i%3===0){
            console.log("fizz");
        }
        else if(i%5===0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
    }
}
fizzbuzzclasico();
