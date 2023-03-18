// Declarativas

function miFuncion() {
    return 3;
}

miFuncion();

//Expresión

var miFuncion = function(a,b) {
    return a + b;
}

miFuncion();


// !Ejemplo Function Declarativa

function saludarEstudiantes(estudiante) {
    console.log(estudiante);
}

saludarEstudiantes("JCode"); // llamo o ejecuto la funcion

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("JCode"); // llamo o ejecuto la funcion


function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

sumar (1,2); // llamo o ejecuto la funcion

function sumar(a,b) {
    return a + b;
}

sumar(1,2);


// * Ejemplo Function Expresiva

let suscribe2 = () => {
    console.log("Me voy a suscribir!!!!");
}

suscribe2()