function param(p) {
  const index = process.argv.indexOf(p);
  return process.argv[index + 1]
}

const nombre = param("--nombre");
const edad = param("--edad");

console.log(`Tu nombre es ${nombre} y tienes ${edad} años`);
