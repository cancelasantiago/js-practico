var piedra = 1;
var papel = 2;
var tijera = 3;
function jugar(usr, pc){
    if (usr != pc){
        switch(true){
            case ((usr===1)&&(pc===2)):
                console.log("GANÓ PC CON PAPEL");
                break
            case ((usr===1)&&(pc===3)):
                console.log("GANÓ USUARIO CONTRA TIJERAS");
                break
            case ((usr===2)&&(pc===1)):
                console.log("GANÓ USUARIO CONTRA PIEDRA");
                break
            case ((usr===2)&&(pc===3)):
                console.log("GANÓ PC CON TIJERAS");
                break
            case ((usr===3)&&(pc===1)):
                console.log("GANÓ PC CON PIEDRA");
                break
            case ((usr===3)&&(pc===2)):
                console.log("GANÓ USUARIO CONTRA PAPEL");
                break
        }

    }
    else{
        console.log("EMPATE")
    }
}