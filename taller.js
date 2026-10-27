


// // Ejercicio 1.
// // Encontrar el número mayor y menor

// let list = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];


// let mayor = list[0];
// let menor = list[0];

// for (let i = 1; i < list.length; i++) {
//   if (list[i] > mayor) {
//     mayor = list[i];
//   }
//   if (list[i] < menor) {
//     menor = list[i];
//   }
// }

// console.log("Número mayor:", mayor);
// console.log("Número menor:", menor);


// // Ejercicio 2. 
// // Tabla de multiplicar del 7


// const numero = 7;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${numero} x ${i} = ${numero * i}`);
// }





// Ejercicio 3. 
// Función para sumar cantidades variables de números


// function sumar(...numeros){

//     let total = 0;

//     for (const numero of numeros) {

//         total = total + numero;
//     }

//     return total;
// }

// console.log(sumar(10,5));
// console.log(sumar(1,5,3,));
// console.log(sumar(25,5,10,3));
// console.log(sumar(1,3,9,12,15));



// Ejercicio 4. 
// Invertir un array

let frutas = ['durazno', 'guanabana', 'uva', 'naranja'];
let invertidas = [];

for (let i = frutas.length - 1; i >= 0; i--) {
  invertidas.push(frutas[i]);
}

console.log(invertidas) ; 
