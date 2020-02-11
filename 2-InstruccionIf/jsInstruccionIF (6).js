function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

if (edad < 13) {
    alert("Menor de Edad");
} else if (edad >= 13 && edad <= 17) {
    alert ("Adolescente");
} else {
    alert ("Adulto");
}



}//FIN DE LA FUNCIÓN