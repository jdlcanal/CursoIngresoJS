function mostrar()
{

	var contador=0;
	var sumaPositivos=0;
	var sumaNegativos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	//declarar contadores y variables 
	
while(contador > -1) {
		contador ++;
		var numero;
		numero = prompt ("Ingrasar Nùmeros");
		numero = parseInt (numero);
		if (isNaN(numero)) {
			alert ("No Ingresar Más Números");
			break;
		}


		if (numero > 0) {
			
			sumaPositivos += numero;
		
			contadorPositivos ++;
		} else if (numero < 0) {

			sumaNegativos += numero;
			contadorNegativos ++;
		} else {
			contadorCeros ++;
		}
		if (numero % 2 == 0) {
			contadorPares ++;
		}
		
	}	

	document.write("Suma de Positivos "+ sumaPositivos);

}//FIN DE LA FUNCIÓN