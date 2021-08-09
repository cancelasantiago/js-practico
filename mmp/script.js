var asalariados = [];

function guardar(){

    var n = document.getElementById("asalariado_nombre").value;
    var s = document.getElementById("asalariado_salario").value;
    document.getElementById("asalariado_nombre").value = "";
    document.getElementById("asalariado_salario").value = "";
    var dato = {
        nombre: n,
        salario: s,
    }
    if (n!="" && s!=""){
        asalariados.push(dato);
    }
    else{
        alert("Llenar los campos.");
    }
}

function listar(){
    asalariados.forEach(function imprimir(val, index){
        console.log(val);
    })
}

function mediana(){
    asalariados.sort(function ordenar(a, b){
        if (a.salario>b.salario) return 1;
        if (a.salario==b.salario) return 0;
        if (a.salario<b.salario) return -1;
    })
    if (parseInt(asalariados.length)%2 == 0 && parseInt(asalariados.length) > 0){
        var promedio, index1, index2;
        index2 = Math.trunc(parseInt(asalariados.length)/2);
        index1 = index2 - 1;
        console.log(asalariados[index1]);
        console.log(asalariados[index2]);
        promedio = (parseInt(asalariados[index1].salario) + parseInt(asalariados[index2].salario))/2;
        console.log(promedio);
    }else{
        var index = Math.trunc(parseInt(asalariados.length)/2);
        console.log(asalariados[index].salario);
    }
}

function moda(){

}

function promedio(){
    var total = 0;
    var cant = 0;
    var promedio = 0;
    asalariados.forEach(function sumar(val, index){
        total = total + parseInt(val.salario);
        cant ++;
    })
    if (cant!=0){
        promedio = total/cant;
        console.log(promedio);
    } else{alert('No hay datos.');}
}