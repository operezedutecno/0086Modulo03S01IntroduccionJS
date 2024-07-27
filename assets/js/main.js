var apellido = "Pérez";
var porcentaje;

var persona = {
    nombre: "Osman",
    apellido: apellido,
    edad: 34,
    activo: false,
    departamento: null
}

console.log(persona);
console.log("Salario", persona.salario); //Ejemplo de undefined
console.log("Porcentaje", porcentaje); //Ejemplo de undefined


// var n1 = Number(prompt("Ingrese el primer número"))
// var n2 = prompt("Ingrese el segundo número")

// console.log(n1, n2, n1+n2); // Al recibir valores por el prompt los trató como letras
// console.log("Ejemplo con conversión", Number(n1), Number(n2), Number(n1)+Number(n2)); // Al recibir valores por el prompt convertimos (Casting) el valor para realizar la adición o suma
// console.log("Ejemplo de conversión con error", Number(n1), Number(n2), Number(n1+n2)); // Error común, esto no resuelve la garantía de hacer la adición

console.log("José"+" "+"Martínez"); //Ejemplo de concatenación
console.log(5 + 8 + 9); //Ejemplo de adición o suma
console.log(5 + "8" + 9); //Ejemplo de concatenación
console.log(5 + 8 + "9"); //Ejemplo de adición o suma

console.log("Number", Number(15.5555555));
console.log("ParseInt", parseInt(15.5));
console.log("ParseFloat", parseFloat(15.5555555));


console.log("Conversión a String", String(10));

console.log("Conversión a Booleano", Boolean("Javascript"));
console.log("Conversión a Booleano", Boolean("true"));
console.log("Conversión a Booleano con error", Boolean("false"));
console.log("Conversión a Booleano cadena vacía", Boolean(""));
console.log("Conversión a Booleano con cero", Boolean(0));
console.log("Conversión a Booleano con 1", Boolean(1));


console.log("comparación número con letra no estricta", 5 == "5");
console.log("comparación número con letra estricta",  5 === "5");
console.log("comparación número con número estricta",  5 === 5);
console.log("comparación letra con letra estricta",  "5" === "5");


// Objeto Number
// var num = new Number(15)
// console.log(num);