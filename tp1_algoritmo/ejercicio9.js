//  se guardara en un array ñas notas
let notas = [];

//recorremos array 
for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt("ingresa la nota " + (i+1) + ":"));  //el usuario ingresara las notas, el tipo de dato es float

    // chequear q la nota sea un numero y este en el rango valido/correcto
    while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = parseFloat(prompt("ingrese una nota valida para la nota " + (i+1) + ":"));
    }
    notas.push(nota);
}

// calcular el promedio de las notas
let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}
let promedio = suma / notas.length;

// mostrar resultado
console.log("promedio de las notas es: " + promedio.toFixed(2));  //con tofilex el promedio se convierte en una cadena de 2 posiciones/decimales

// establecer condicion, evaluar y mostrar en consola 
if (promedio <= 5) {
    console.log("Reprobado");
} else if (promedio >= 6 && promedio <= 8) {
    console.log("Aprobado");
} else if (promedio > 8 ){
    console.log("Sobresaliente");
}
