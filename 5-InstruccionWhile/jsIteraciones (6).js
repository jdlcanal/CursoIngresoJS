function mostrar()
{

	var contador=0;
	var acumulador=0;


	while (contador < 5){
		contador++;
		
		var numero = prompt("Ingrese Número:");

		numero = parseInt(numero);

			if (isNaN(numero)){
				alert ("Error");
				break;
			}

		acumulador += numero;
	}
	
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN