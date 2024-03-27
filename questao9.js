/*
Como você pode usar uma declaração if, else if, else para 
classificar um triângulo em equilátero, isósceles ou escaleno com base em 
seus lados em JavaScript?
*/
var lado2 = 1;
function Triangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero"; 
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "isoceles" ;
    } else {
        return "Escaleno"; 
    }
    }