function mostrar()
{
var nombre;
var edad;
var sexo;
var nota;
var respuesta;
var contadorV=0;
var acumuladorV=0;

respuesta="s";
respuesta=prompt("Si Quiere Ingresar al Sistema Presione: s");
while(respuesta=="s"){
    nombre=prompt("Ingrese el Nombre del Alumno:");

    edad=prompt("Ingrese la Edad del Alumno:");
    while(isNaN(edad)){
        alert("INGRESE UNA EDAD VÁLIDA!!!");
        edad=prompt("Ingrese la Edad del Alumno:");

    }//edad
    
    sexo=prompt("Ingrese m o f para el Sexo del Alumno"); 
    while(!isNaN(sexo)||!(sexo=="f"||sexo=="m")){
        alert("INGRESAR UN SEXO VÁLIDO!!!");
        sexo=prompt("Ingrese m o f para el Sexo del Alumno");
    
    }//sexo 

    nota=prompt("Ingrese la Nota del Final");
    while(isNaN(nota)||(nota<0||nota>10)){
        alert("INGRESE UNA NOTA VÁLIDA");
        nota=prompt("Ingrese la Nota del Final");

    }//nota
    
respuesta=prompt("Si Quiere Ingresar al Sistema Presione: s");
}//fin del while

if(sexo=="m"){
    contadorV++;
    sexo=contadorV;
    contadorV=parseInt(contadorV);
    acumuladorV=alert("La cantidad de varones son "+contadorV);
}






}
