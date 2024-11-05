let readline = require("readline");
let util = require("util");

let rl = readline.createInterface(process.stdin, process.stdout);

let persona = {
  nombre: "",
  comentarios: [],
};
rl.question("cual es tu nombre? ", (respuesta) => {
  persona.nombre = respuesta;

  rl.setPrompt("dime un comentario: ");
  rl.prompt();
});

rl.on("line", (input) => {
  if (input.trim() === "salir") {
    let mensaje = util.format("te llamas %s y esto me dijiste: %j", persona.nombre, persona.comentarios)
    console.log(mensaje);
    
    process.exit()
  }
    persona.comentarios.push(input.trim());

    rl.setPrompt("dime un comentario: ");
    rl.prompt();
});

/*
rl.question("Cual es tu nombre'", (respuesta) => {
  console.log((`Hola, ${respuesta}!`));
  process.exit();
})
  */
