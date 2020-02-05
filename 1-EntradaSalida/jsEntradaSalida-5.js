/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    var mensaje;

    nombre = document.getElementById("elNombre").value; //para sacar el id hay q inspeccionar el html
    edad = document.getElementById("laEdad").value;

    //console.log(nombre, edad);
    
    mensaje = "Usted se llama " + nombre + " y tiene " + edad + " años de edad";

    alert(mensaje);


}

