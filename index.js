// ARRAY. PROBLEMA A RESOLVER:
// 1- Crea un array con 5 estudiantes y luego mostrarlos en el documento html
let estudiantes = ["Isaac", "Luz", "Agostina", "Lautaro", "Sol"];
document.writeln(estudiantes);


// 2- Acceder al array y mostrar en la consola el estudiante que está en el último lugar
console.log(estudiantes[4]);



// 3- El preceptor se confundió de un nombre por lo que debes cambiarle el nombre al tercer
// estudiante
estudiantes[2] = "Agustina";
console.log(estudiantes)



// 4- Se sumo un nuevo integrante al grupo llamado Alberto, debes añadirlo a la lista y mostrarlo
// mediante un alert
estudiantes.push("Alberto");
alert(`Se agregó el estudiante: ${estudiantes[estudiantes.length -1]}`);



// 5- Ahora, escribe el método que te permita quitar el último ingresante
estudiantes.pop();
console.log(estudiantes);



// 6- Vuelvelo a poner pero al inicio de la lista
estudiantes.unshift("Alberto");
console.log(estudiantes);



// 7- Finalmente se cambia de sección por lo que se lo debe quitar del inicio de la lista
estudiantes.shift();
console.log(estudiantes);



// 8- Crea un nuevo array llamado ingresantes2023 que contenga 3 nombres nuevos
// Une el primer array con el segundo, en uno nuevo llamado nuevoAño. Recurriendo a .concat()
let ingresantes2023 = ["Nelson", "Milton", "Andrés"];
let nuevoAño = [estudiantes.concat(ingresantes2023)];
console.log(nuevoAño);



// 9- Ordena a través de un método, alfabéticamente el array nuevoAño
nuevoAño.sort();
console.log(nuevoAño);



// 10- Crear una lista de artículos para el supermercado de 5 ítems.
// Con el método prompt pedir al usuario que ingrese un artículo para agregar a la lista.
// Si el artículo ya está en la lista (método array.includes()) avisarle al usuario que el artículo ya está
// Si no agregar el artículo a la lista y mostrarle al usuario la lista de todo lo que tiene que comprar.
let lista = ["coca-cola", "leche", "queso", "bife", "lechuga"];
let articulo = prompt("Ingrese un artículo para agregar: ");
if (lista.includes(articulo)) {
    alert("El artículo ya está en la lista");
} else {
    alert("La lista posee ahora todo lo que necesita");
}