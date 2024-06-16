let valores = [true, false, 2, "hola", "mundo", 3, "char"];

// filtrar los elementos de texto del array
let elementotext = valores.filter(function(item) {
    return typeof item === 'string';
});

// encontrar el elemento de texto con mas letras
let elementoMayor = elementotext.reduce(function(a, b) {
    return a.length > b.length ? a : b;
}, "");

// mostrar elementos de texto ordenados de menor a mayor longitud
elementotext.sort(function(a, b) {
    return a.length - b.length;
});

console.log("Elementos de texto ordenados de menor a mayor:");
console.log(elementotext);

// Op mat
let nums = valores.filter(function(item) {
    return typeof item === 'number';
});

let suma = nums.reduce(function(a, b) {
    return a + b;
});

let resta = nums.reduce(function(a, b) {
    return a - b;
});

let multiplicacion = nums.reduce(function(a, b) {
    return a * b;
});

let division = nums.reduce(function(a, b) {
    return a / b;
});

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicacion:", multiplicacion);
console.log("Division:", division);
