function mostrar()
{
var planetas;
planetas = prompt("Ingrese el nombre del Planeta(en minuscula)");

switch (planetas) {
    case "mercurio":
    case "venus":
        alert("Acá hace más calor");
        break;
    case "tierra":
        alert("Acá vivimos");
        break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
        alert("Acá hace más frío");
        break;
    default:
        alert("Escribir un planeta válido");
        break;
}
}
