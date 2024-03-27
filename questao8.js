/*
Como você pode usar uma declaração if, else if, else para 
determinar se uma idade corresponde a bebê, criança, adolescente, adulto ou 
idoso em JavaScript?
*/
var idade = 25;

if (idade <= 2) {
    console.log("Bebê");
} else if (idade <= 12) {
    console.log("Criança");
} else if (idade <= 19) {
    console.log("Adolescente");
} else if (idade <= 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}