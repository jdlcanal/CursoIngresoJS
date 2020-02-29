
function mostrar()
{
    var ancho;
    var largo;

    ancho=prompt("Inserte el Ancho:");

    ancho=parseInt(ancho);

    while(isNaN(ancho) || ancho <=0) {
        alert("Ingresar un número!!");

        ancho=prompt("Inserte el Ancho:");
     
        ancho=parseInt(ancho);
    }

    largo=prompt("Inserte el largo");

    largo=parseInt(largo);

    while(isNaN(largo) || largo<=0){
        alert("Ingresar un número!!");

        largo=prompt("Inserte el largo");

        largo=parseInt(largo);
    }

    alert("El Perimetro es: "+ (ancho*2 + largo *2));
}
