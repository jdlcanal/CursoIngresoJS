function mostrar()
{

	var contador=0;
	var acumulador=0;
    
    
while (contador > -1){
		contador++;
		
		var numero = prompt("Ingrese Número, para terminar escriba cualquier letra");
        
    		numero = parseInt(numero);

			if(isNaN(numero)){
                alert("No escribir más números");
                break;
            }
		acumulador += numero;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN