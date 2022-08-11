var tesis = 15, obras = 7, ciencias = 3, otro = 2;
var dias, user = null, tipolibro = null, textbook = null;


do {
    user = prompt("Por favor digite una opción de acuerdo a lo que se dedica:\n 1. Estudiante\n 2. Profesor\n 3. Otro\n");
    if (user == null ||  (user != 1 && user !=2 && user !=3)) {
        alert("Error, debe ingresar un número válido (1-2-3)");
    }
} while (user == null ||  (user != 1 && user !=2 && user !=3));
do {
    tipolibro = prompt("Digite el tipo de libro que usted desea solicitar:\n 1. Ciencias Básicas y Tecnología\n 2. Tesis\n 3. Obras literarias \n 4. Otros\n");
    if (tipolibro == null && tipolibro != 1 && tipolibro!=2 && tipolibro !=3 && tipolibro !=4) {
        alert("Error, debe ingresar un tipo de libro válido y no vacío o caracter (1-2-3 4)");
    }
   
} while (tipolibro == null || 
     (tipolibro != 1 && tipolibro!=2 && tipolibro !=3 && tipolibro !=4));


document.write("<h1>Quita el contenido viejo"+tipolibro+" - Agrega el contenido nuevo!</h1>");