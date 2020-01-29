function mostrar()
{
    var numeroUno;
    var numeroDos;

    numeroUno = prompt("Ingresar N.1:");
    numeroDos = prompt("Ingresar N.2:");

    if (numeroUno==numeroDos){
        alert("Los numeros son: "+numeroUno+numeroDos);

    } else{
    if (numeroUno>numeroDos){
        numeroUno=parseInt(numeroUno);
        numeroDos=parseInt(numeroDos);
        alert("El numero es: "+(numeroUno - numeroDos));
    }  else {
        numeroUno=parseInt(numeroUno);
        numeroDos=parseInt(numeroDos);
        
        alert("El numero es: "+ (numeroUno + numeroDos));
        if (numeroUno+numeroDos>10){
            numeroUno=parseInt(numeroUno);
            numeroDos=parseInt(numeroDos);
            
        alert("La suma es "+(numeroUno+numeroDos)+" y superó el 10" );
        }
    } }


}
