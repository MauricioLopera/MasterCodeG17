//Primer Paso: Definir las variables
let nombreCompleto;
let anioActual, anioNacimiento;
let edad;

//Segundo Paso: Solicitar los datos
nombreCompleto = prompt('Digita tu nombre completo');
anioActual = prompt('Digita el año actual');
anioNacimiento = prompt('Digita el año de tu nacimiento');

//Tercer Paso: Desarrollo de la logica
edad = Number(anioActual) - Number(anioNacimiento);

//Cuarto Paso: Mostrar los resultados
document.write('Hola ' + nombreCompleto + ', tu edad aproximada es: ' + edad);