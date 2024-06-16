//  texto introducido por el usuario
let texto = prompt("ingrese un texto:");

// buscar posicion de la primera vocal ( esto es una expresion regular)
let match = texto.match(/[aeiou]/i);

// mostrar resultado
if (match) {
    var posicion = match.index + 1 ; 
    alert("La primera vocal en el texto '" + texto + "' esta en la letra numero" + posicion + " ");
} else {
    alert("no hay vocales en el texto  '" + texto + "'.");
}
