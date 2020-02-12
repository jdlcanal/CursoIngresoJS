function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var min;
	var max;

	min = 1;
	max = 11;
	numeroRandom = Math.floor(Math.random() * (max - min)+ min);

	if (numeroRandom >= 9) {
		alert ("Excelente!! " + numeroRandom);
	} else {
		if (numeroRandom > 4) {
			alert ("Aprobado!! " + numeroRandom);
		} else {
			alert ("Vamos la próxima se puede! " + numeroRandom);
		}
	}

}//FIN DE LA FUNCIÓN