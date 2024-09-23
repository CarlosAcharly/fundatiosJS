// funciones y funciones de flecha

// function nameFunction(params){
//     body
//     return
//  }

// Arrow Function = (params) => {
// body
// return
// }

function sayHello(){
    console.log('Hello');
}
sayHello();
const sayHelloInSpanish =() => console.log('Hola');
sayHelloInSpanish();

function sayHelloTo1(name){
    console.log('Hello'+ name);
}
sayHelloTo1('Batman');
const sayHelloto =name => console.log(`Hello ${ name}`);
sayHelloto('Spiderman');

