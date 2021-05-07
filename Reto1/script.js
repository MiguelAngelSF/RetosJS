var pMario = 78
var eMario = 1.69
var mIMC = 0

var pLuigi = 92
var eLuigi = 1.95
var lIMC = 0

var marioMayorIMC = Boolean;

console.log("IMC de Mario" , mIMC = (pMario / (eMario * eMario)))
console.log("IMC de Luigi" , lIMC = (pLuigi / (eLuigi * eLuigi)))
console.log(marioMayorIMC = (mIMC > lIMC) ? "true" : "false" )


marioCalcularIMC = document.getElementById("IMC1");
pesoMario = document.getElementById("pesoMario");
estatura = document.getElementById("estaturaMario");
marioIMC = document.getElementById("marioIMC");

luigiCalcularIMC = document.getElementById("IMC2");
pesoLuigi = document.getElementById("pesoLuigi");
estatura = document.getElementById("estaturaLuigi");
luigiIMC = document.getElementById("luigiIMC");

comparar = document.getElementById("comparar");

//IMC = peso / estatura al cuadrado
marioCalcularIMC.onclick = function(){
    valorIMC = (pesoMario.value / (estaturaMario.value * estaturaMario.value));
    marioIMC.innerHTML = valorIMC
    console.log(marioIMC)
}

luigiCalcularIMC.onclick = function(){
    valorIMC2 = (pesoLuigi.value / (estaturaLuigi.value * estaturaLuigi.value));
    luigiIMC.innerHTML = valorIMC2
    console.log(luigiIMC)
}

comparar.onclick = function(){
    marioMayorIMC = marioIMC.value > luigiIMC.value ? " Mario tiene un mayor IMC que Luigi" : " Mario tiene un menor IMC que Luigi"
    console.log(marioMayorIMC)
}


