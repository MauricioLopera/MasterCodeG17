//variables
let miArray = [];

//mostrar cantidad de elementos el array
console.log(miArray.length);

//agregamos valores al array
miArray.push(prompt('Ingresa el nombre de una fruta'));
console.log(miArray);
miArray.push(prompt('Ingresa el nombre de otra fruta'));
console.log(miArray);

//agregar elemento al inicio del array
miArray.unshift('Mandarina');
console.log(miArray);

//eliminar el ultimo elemento del array
miArray.pop();
console.log(miArray);

//eliminar el primer elemento del array
miArray.shift();
console.log(miArray);

//extraer palabras de un string y convertirlas en un array
let nombreCompleto = 'Mauricio Alexander Lopera Rivera';
let arregloNombre = nombreCompleto.split(' ');
console.log(arregloNombre);

//eliminar elementos de un array a partir de su indice
let arregloApellidos = arregloNombre.slice(2);
console.log(arregloApellidos);
let arregloPrimerApellido = arregloNombre.slice(2,2);
console.log(arregloPrimerApellido);

//agregar elementos al array en una posicion especifica y reemplazar si queremos
arregloApellidos.splice(1,0, arregloNombre);
console.log(arregloApellidos);

//ordenar los elementos de un array alfabeticamente
let arrayOrdenado = arregloNombre.sort();
console.log(arrayOrdenado);

//modificar el array a la inversa
arrayOrdenado.reverse();
console.log(arrayOrdenado);

let arregloConcatenado = arregloNombre.concat(arrayOrdenado, arregloApellidos);
console.log(arregloConcatenado);

/*Desafio:
    1. Solicitar los nombres completos de los miembros de la familia separados por (,)
    2. Convertir esos nombres a un array de nombres de la familia y mostrarlo en consola.
    3. Combinar los dos arrays en uno solo y reodenarlo de atras hacia adelante y lo vamos a mostrar al usuario.
    4. Agregar las validaciones que crean necesarias.
*/

