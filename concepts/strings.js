//Strings en javascript
// hello, I'm Carlos and I'm from Bravo
let name = "Carlos"
let city = "bravo"
let message = "hello, I'm " + name + " and I'm from " + city;
console.log(message);

message = 'hello, I\'m ' + name + ' and I\'m from ' + city;
console.log(message);

//templates literals
message = `Hello, I'm ${ name } and I'm from ${city}`;
console.log(message);

 //funciones para Strings
console.log(message.toLowerCase()); 
console.log(message.length); 
console.log(message.toUpperCase()); 
console.log(message.includes('from')); 
console.log(message.startsWith('hello')); 
console.log(message.endsWith('.')); 
