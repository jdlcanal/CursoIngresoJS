function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch (mesDelAño) {

    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio": 
        alert ("Falta para el Invierno");
        break;
    
    case "Julio":
    case "Agosto":
        alert ("Abrigate que hace frío");
        break;
    default:
        alert ("Ya paso el frío, ahora calor");
        break;



}


}//FIN DE LA FUNCIÓN