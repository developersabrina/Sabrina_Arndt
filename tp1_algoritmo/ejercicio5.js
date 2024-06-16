//se declararo la variable dato, no se utiliza 
//cambiar dato por val1 y val2
let val1, val2, resultado;
val1 = window.prompt("Introduce tu nombre", "..."); //se abrira una ventana donde el usuario escribira su nombre y apellido y se guardara en las variables val1 y val2
val2 = window.prompt("Introduce tu apellido", "...");
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;   //se concatenara/unira los datos y se guardara en resultado
document.write(resultado); //el document.write mostrara el resultado final en el index