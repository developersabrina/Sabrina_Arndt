let meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

let num = prompt("ingrese un numero del 1 al 12 para obtener el nombre del mes:");

num = parseInt(num);

let Mes;
switch(num) {
    case 1:
        Mes = meses[0];
        break;
    case 2:
        Mes = meses[1];
        break;
    case 3:
        Mes = meses[2];
        break;
    case 4:
        Mes = meses[3];
        break;
    case 5:
        Mes = meses[4];
        break;
    case 6:
        Mes = meses[5];
        break;
    case 7:
        Mes = meses[6];
        break;
    case 8:
        Mes = meses[7];
        break;
    case 9:
        Mes = meses[8];
        break;
    case 10:
        Mes = meses[9];
        break;
    case 11:
        Mes = meses[10];
        break;
    case 12:
        Mes = meses[11];
        break;
    default:
        Mes = "numero de mes invalido, intentelo segun el rango";
}

alert(Mes);

/* OTRA MANERA 
let meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

let num;
do {
    num = prompt("Ingrese un número del 1 al 12 para obtener el nombre del mes:");
    num = parseInt(num);
} while(isNaN(num) || num < 1 || num > 12);

let Mes = meses[num - 1];
alert(Mes);   */