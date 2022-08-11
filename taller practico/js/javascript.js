var dias;
    categorialibro = null;
    usuario = null;

do {usuario = prompt("Ingrese el número conforme a su rango: \n \n 1- Alumno \n 2- Maestro \n 3- Otro\n");
    if (usuario == null ||  (usuario != 1 && usuario !=2 && usuario !=3)) {
        alert("Número inválido, porfavor siga indicaciones."); }

} while (usuario == null ||  (usuario != 1 && usuario !=2 && usuario !=3));
do {categorialibro = prompt("Ingrese el número de la categoria de libro que usted desea:\n \n 1- Ciencias básicas y tecnología \n 2- Tesis \n 3- Obra literaria \n 4- Otros \n");
    if (categorialibro == null && categorialibro != 1 && categorialibro!=2 && categorialibro !=3 && categorialibro !=4) {
        alert("Número de libro inválido."); }

} while (categorialibro == null || 
     (categorialibro != 1 && categorialibro!=2 && categorialibro !=3 && categorialibro !=4));
