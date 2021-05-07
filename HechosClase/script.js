console.log("HolaMundo")
var saludo = "Hola Mundo"
document.getElementById('saludo').innerHTML = saludo

x = 1
y = "Hola"
    //var res = 0

x + y
console.log("hola mi edad es " + x)
console.log((x == 1) && (x == 1) ? "true" : "False")
    //ternario sobre un ternario

var patas = 5
var accion = "ladra"
// console.log((patas == 4) && (accion == "ladra") ? "es un perro" : "no es un perro")

let total = 0
let num = 5

for (let i = 0; i <= num; i++) {
    total += i; //total = total + i 
}
console.log(total)

var nombre = 'miguel'

// const array = [1,2]
const array2 = [1,2]
array2.push(34)
console.log(array == array2)
console.log(array === array2)
// console.log(array)
// console.log(array2)


for (index in array){
    if (i == 3)
      break;
    if (i == 3)
      continue;
    console.log(array[index])
}

array.forEach(function(valor, index, array){
    console.log(index + valor)
})

const matriz = [[1,2],[3,4]]

for(let i = 0; i <= matriz.length; i++){
    for( let j = 0; j<= matriz.length; j++){
        console.log(matriz[i][j])
    }
}




