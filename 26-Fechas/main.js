
//? Objeto date
//* Te permite crear un reloj, calendario, hora, minutos, segundos,
//* Guardar fechas, cuanto tiempo paso, programar recordatorios...etc.

let fechaActual = new Date();

console.log(fechaActual.getFullYear())
console.log(fechaActual.getMonth())
console.log(fechaActual.getDate())
console.log(fechaActual.getDay())
console.log(fechaActual.getHours())
console.log(fechaActual.getMinutes())
console.log(fechaActual.getSeconds())
console.log(fechaActual.getMilliseconds())


console.log(`FechaCompleta : ${fechaActual.getDate()}/${fechaActual.getMonth()+1}/${fechaActual.getFullYear()}`)