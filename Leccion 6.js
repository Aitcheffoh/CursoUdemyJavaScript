let carros = new Array('BMW', 'Volvo', 'Mercedes Benz');
const autos = ['BMW', 'Volvo', 'Mercedes Benz'];
console.log(autos)
console.log(autos[0])

for (let i = 0; i < autos.length; i++) {
    console.log( i + ': ' + autos[i])
}

autos[2] = 'MercedesBenz';
console.log(autos[2])

autos.push('Audi');
console.log(autos)

console.log(autos.length)
autos[autos.length] = 'Cadillac';
console.log(autos)

autos[6] = 'Porshe';
console.log(autos)

console.log(typeof autos)
console.log(Array.isArray(autos))
console.log( autos instanceof Array)
