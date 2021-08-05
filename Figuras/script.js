function perimetroCuadrado(lado){
    return 4*lado;
}
function areaCuadrado(lado){
    return lado*lado;
}

function perimetroCirculo(radio){
    var pi = Math.PI;
    return pi*radio;
}
function areaCirculo(radio){
    var pi = Math.PI;
    return pi*radio*radio;
}

function perimetrotriangulo(lado1, lado2, lado3){
    return lado1+lado2+lado3;
}
function areaTriangulo(lado1, lado2, lado3){

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    var area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    var perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    var area1 = areaCirculo(value);
    alert(area1);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    var perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("input1Triangulo");
    const value1 = input1.value;
    const input2 = document.getElementById("input2Triangulo");
    const value2 = input2.value;
    const input3 = document.getElementById("input3Triangulo");
    const value3 = input3.value;
    var area = areaTriangulo(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("input1Triangulo");
    const value1 = input1.value;
    const input2 = document.getElementById("input2Triangulo");
    const value2 = input2.value;
    const input3 = document.getElementById("input3Triangulo");
    const value3 = input3.value;
    var perimetro = perimetroTriangulo(value);
    alert(perimetro);
}