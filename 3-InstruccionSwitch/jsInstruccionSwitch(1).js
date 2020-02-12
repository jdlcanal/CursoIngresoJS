function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {

    case "Enero":
        alert ("Que comiences bien el año!!");
    break;
    case "Marzo":
        alert ("Se vienen las clases!!");
    break;
    case "Julio":
        alert("Se vienen las vacaciones!!");
    break;
    case "Diciembre":
        alert ("Felices Fiestas!!!");
    break;
    default:
        alert ("mes comun");
    break;

}



}//FIN DE LA FUNCIÓN