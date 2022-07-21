let condicion = false;

if (condicion){
    console.log("Condicion verdadera")
}else{
    console.log("Condicion falsa")
}

let numero = 4;
let numeroTexto = 'Valor Desconocido';

switch ( numero ){
    case 1:
        numeroTexto = 'Numero 1';
        break;
    case 2:
        numeroTexto = 'Numero 2';
        break;
    case 3:
        numeroTexto = 'Numero 3';
        break;
    case 4:
        numeroTexto = 'Numero 4';
        break;
    default:
        numeroTexto;
}

console.log(numeroTexto);

let mes = 1;
let estacion;

switch (mes) {
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor Incorrecto'
}
console.log(estacion)

let contador = 0;

while (contador < 3){
    console.log(contador)
    contador++;
}
console.log('Fin ciclo While')

contador = 0;
do {
    console.log(contador)
    contador ++
}while ( contador < 3);
console.log('Fin ciclo Do While')

for (contador = 0; contador < 3; contador++){
    console.log(contador)
}
console.log('Fin ciclo For')

for (contador = 0; contador <= 10; contador++){
    if (contador % 2 == 0){
        console.log(contador)
        break;
    }
}
console.log('Fin ciclo For')

for (contador = 0; contador <= 10; contador++){
    if (contador % 2 !== 0){
    continue //Ir a la siguiente iteracion
    }else {
        console.log(contador)
    }
}

incio:
    for (contador = 0; contador <= 10; contador++){
    if (contador % 2 !== 0){
        continue incio;//Ir a la siguiente iteracion
    }else {
        console.log(contador)
    }
}