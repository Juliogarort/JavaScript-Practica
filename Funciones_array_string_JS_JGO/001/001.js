// 001transformDegrees.js/.html: Hacer una función que convierta 
// de grados centígrados a Farenheit. ¿Podrías hacerlo con una 
// función flecha?


let grados = prompt("Introduce una temperatura en grados Celsius para convertirla a Fahrenheit:");

// Convierte el valor de la entrada del usuario a un número
const celsius = parseFloat(grados);

// Calcula la temperatura equivalente en Fahrenheit
const fahrenheit = celsius * 9 / 5 + 32;

console.log(fahrenheit);