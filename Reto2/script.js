// var array = [1,5,6,7,8];
var array = [4,8,13,7,0,5,2,8,10];
// var array = [-6,7,0,-5];
// var array = [19,5,7,2,27,10,0,0,1,5];

var matriz = [];

var cuadradoArray = Math.sqrt(array.length);

if (Number.isInteger(cuadradoArray)) {
    var aux = new Array();  //Array auxiliar
    array.forEach((element, index) => {  
        if (aux.length < cuadradoArray) {
            aux.push(element);
        }
        if (aux.length == cuadradoArray) {
            matriz.push(aux);
            aux = new Array();
        }
    });
    var izquierda = 0;
    var diagIzq = 0;
    var derecha = matriz.length - 1;
    var diagDer = 0;

    //Suma de diagonales
    matriz.forEach(element => {
        diagIzq += element[izquierda];
        izquierda++;
        diagDer += element[derecha];
        derecha--;
    });
    console.log(`Total diagonal izquierda ${diagIzq}`);
    console.log(`Total diagonal derecha ${diagDer}`);
    //Diferencia
    var diferencia = diagIzq - diagDer;
    diferencia = (diferencia < 0) ? diferencia * (-1) : diferencia;
    console.log(`Diferencia entre diagonales ${diferencia}`);
}
else
    console.log("No existe matriz cuadrada o es imposible hacerla");