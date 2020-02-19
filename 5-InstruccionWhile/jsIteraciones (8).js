function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

	contador = parseInt(contador);
	positivo = parseInt(positivo);
	negativo = parseInt(negativo);

		while (contador > -1) {
			contador ++;

			prompt ("Escribir Número, para salir presione una letra");

			if (isNaN(contador)) {
				alert ("No Escribir Más");
				break;
			}

			

		}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN