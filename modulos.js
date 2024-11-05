let path = require("path");
let util = require("util")
let v8 = require("v8")
//console.log();
let nombre = "marco";
let edad = 25;
let texto = util.format("hola %s, tienes %d años", nombre, edad)
console.log(texto);

console.log(v8.getHeapStatistics());

