function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");


	while (numero < 0 || numero > 9 || isNaN(numero)) {

		numero = prompt("Numero no válido!!");
		
		numero = parseInt (numero);
		break;
	} 

	if (numero > 0 && numero < 10) {
	document.getElementById("Numero").value = numero;
}
}//FIN DE LA FUNCIÓN