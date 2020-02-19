function mostrar()
{

	var contador=0;
	// declarar variables
	var max;
	var min;
	var primeraVez = true;

	while(contador > -1) {
		contador ++;
		var numero = parseInt (numero);
		numero = prompt ("Ingrasar Nùmeros");

		if (isNaN(numero)) {
			alert ("No Ingresar Más Números");
			break;
		}
		
		if (primeraVez) {
		primeraVez = false;

		max = numero;
		min = numero;
}	else {
	if (numero > max){
		max = numero;
	} if (numero < min){
		min = numero;
	}
}

	}

document.getElementById("maximo").value = max;
document.getElementById("minimo").value = min;



}//FIN DE LA FUNCIÓN