


// Ejercicio 1.
// Encontrar el número mayor y menor

let list = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];


let mayor = list[0];
let menor = list[0];

for (let i = 1; i < list.length; i++) {
  if (list[i] > mayor) {
    mayor = list[i];
  }
  if (list[i] < menor) {
    menor = list[i];
  }
}

console.log("Número mayor:", mayor);
console.log("Número menor:", menor);


// Ejercicio 2. 
// Tabla de multiplicar del 7

