// High Order Functions
// funciones de orden superior
// son funciones que reciben como parametro otra funcion
//parametros 
const suma =(a,b)=>a+b;
const resta =(a, b)=>a-b;

const operation=(a,b, callback)=>{
    const result = callback(a, b);
    console.log("resultado es: "+ result);
}
operation(12, 5, suma);
operation(12, 5, resta);
operation(12, 5, (a, b)=>a*b);

const car = ['vocho','athos','pointer','tsuru','bmw']
cars.forEach(car=>{console.log(car)});
let filtrados=cars.filter(car => car === 'tsuru');
console.log(filtrados);

filtrados=cars.filter(car => car.includes ('o'));
console.log(filtrados);

filtrados=cars.filter(car => car.startsWith ('a'));
console.log(filtrados);
 
filtrados=cars.filter(car => car.endsWith ('u'));
console.log(filtrados);

filtrados=cars.filter(car => car.length <= 5 );
console.log(filtrados);

//metodo map
const CARS=cars.map(car=>car.toUpperCase());
console.log(CARS);
console.log(cars);

const reversa=cars.map(car=>car.split('').reverse().join());
console.log(reversa);

const cars = ['vocho','athos','pointer','tsuru','bmw']

function wrapping(gifts) {
    return gifts.map(gift=>{
        let tapa='*'.repeat(gift.length+2);
        let g = `${tapa}\n*${gift}\n${tapa}`;
        return g;


    })
}
const carsEnvueltos=wrapping(cars);
carsEnvueltos.forEach(car=>console.log(car));

const numbers=[1,2,3,4,5,6,7,8,9,10];
const sumatoria = numbers.reduce((a,b)=>a+b);
console.log(sumatoria);
console.log(numbers);
const factorial = numbers.reduce((a, b)=>a*b);
console.log(factorial);
// every regresa verdadero si todos cumplen
const ages=[23,14,37,19,22,27];
const olders= ages.every(age=>age>18);
const youngers= ages.every(age=>age<18);
console.log(olders);
console.log(youngers);

//some regresa verdadero si al menos uno cumple
const olders2= ages.some(age=>age>=18);
const youngers2= ages.some(age=>age<18);
console.log(olders2);
console.log(youngers2);

const number=[1,2,3,4,5,6,7,8,9,10];
const squa=numbers.map(num=>num*num);