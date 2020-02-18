function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

while (contador < 100){
		contador++;
		
		var numero = prompt("Ingrese Número:");

		numero = parseInt(numero);

			if (isNaN(respuesta)){
				alert ("No se pedirá más números");
				break;
			} else {
				alert ("Error");
				break;
			}

		acumulador += numero;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN