let a = 3, b = 2, c =1;
let z = a + b;
console.log("Resultado de la suma: "+ z)

z = a - b;
console.log("Resultado de la resta: "+ z)

z= a * b;
console.log("Resultado de la multiplicacion: "+ z)

z = a / b;
console.log("Resultado de la division: "+ z)

z = a % b;
console.log("Residuo de la division: " + z)

z = a ** b;
console.log ("Resultado de operador de la operacion: "+ z);

//incremento
//pre incremento (++) antes de la operacion
z = ++a;
console.log(a)
console.log(z)

//post incremento (++) despues de la operacion
z = b++;
console.log(b)
console.log(z)

//decremento
//pre decremento (--) antes de la operacion
z = --a;
console.log(a)
console.log(z)

//post decremento (--) despues de la operacion
z = b--;
console.log(b)
console.log(z)

a =3, b =2, c = "3";
z = a == b;
console.log(z)
z = a == c; // == solo verifica los valores
console.log(z)
z = a === c; // == verifica el tipo de dato primero, luego los valores
console.log(z)

z = a != c; // == solo verifica los valores
console.log(z)
z = a !== c; // == verifica el tipo de dato primero, luego los valores
console.log(z)

//Operador Ternario
let resultado = (3 > 2)? "Verdadero" : "Falso";
console.log (resultado)

//String a Numero
let miNumero = "18x";
console.log(typeof miNumero)
 let edad = Number(miNumero);
console.log (typeof edad)
if (edad >= 18){
    console.log("Es mayor de edad, puede votar")
} else {
    console.log ("Es menor de edad, aun no puede votar")
}

resultado = (edad >= 18) ? "Es mayor de edad, puede votar" : "Es menor de edad, aun no puede votar";
console.log(resultado)

// NaN (no es un numero)
if(isNaN(miNumero)){
    console.log("Este dato no es un numero")
} else{
    if(edad >= 18){
        console.log("Puede votar")}
    else
        {
            console.log("Muy joven para votar")
        }
    }

x = 5, y = 10, z = ++x + y--;
console.log(z)
console.log(x)
console.log(y)