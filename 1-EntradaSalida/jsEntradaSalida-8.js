/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var ingreseDividendo;
    var ingreseDivisor;
    var resultado;
    
    ingreseDividendo = document.getElementById("numeroDividendo").value;
    ingreseDivisor = document.getElementById("numeroDivisor").value;

    ingreseDividendo = parseInt (ingreseDividendo);
    ingreseDivisor = parseInt (ingreseDivisor);

    resultado = ingreseDividendo / ingreseDivisor;

    alert ("el resto es " + resultado);


}
