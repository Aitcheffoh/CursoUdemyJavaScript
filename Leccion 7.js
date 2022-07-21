//Declaracion Funcion
function miFuncion(a, b){
    console.log('Suma :' + (a + b))
}
//Declaracion Funcion con Return
function miReturn2(a, b){
    return a + b;
}
//Resultado de la Funcion
let resultado = miReturn2(2,3);
console.log(resultado);

//Llamando la funcion
miFuncion(2, 3);

//Declaracion de Funcion de tipo Exprecion
let sumar = function(a = 4, b = 5){
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    return a + b + arguments[2]
};

resultado = sumar(3, 2, 7);
console.log(resultado);
resultado = sumar(6, 4, 7);
console.log(resultado);

//Funcion de tipo SelfInvoking
(function(a, b){
    console.log('Ejecutando la funcion: ' + (a + b) + ' ' + arguments.length)
})(3, 4)

console.log(typeof miFuncion)

var miFuncionTexto = miFuncion.toString()
console.log(miFuncionTexto)

const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(2, 10)
console.log(resultado)

resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado)

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}

//Tipos Primitivos
let x = 10;

function cambiarValor (a){
    a = 20;
}

//Paso por Valor
cambiarValor (x);
console.log(x)

//Paso por Referencia
const persona = {
    nombre : 'Juan ',
    apellido : 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}