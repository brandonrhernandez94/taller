


// Ejercicio 1.
// Encontrar el número mayor y menor

let list = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];


let mayor = list[0];
let menor = list[0];


for(let i = 1; i < list.length; i++){
    if (list[i] > mayor){
        mayor = list[i];
    }

    if(list[i] < menor ){
        menor = list[i];
    }
}

console.log("El numero mayor es:" , mayor);
console.log("El numero menor  es:" , menor);