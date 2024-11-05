let preguntas = [
  "¿Cual es tu nombre?",
  "¿Cuantos años tienes?",
  "¿Lenguaje de priogramacion favorito?",
];

let respuestas = [];

function pregunta(i) {
  process.stdout.write(preguntas[i]);
}
process.stdin.on("data", function (data) {
  respuestas.push(data.toString().trim());

  if (respuestas.length < preguntas.length) {
    pregunta(respuestas.length);
  } else {
    process.exit();
  }
});

pregunta(0);
