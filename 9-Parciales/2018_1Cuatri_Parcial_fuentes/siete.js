function mostrar()
{
    var notas;
    var sexo;
    var nombre;
    var contador;
    var acumuladorNotas;
    var minNotas;
    var sexMin;
    var contadorM;
    
    contador=0;
    acumuladorNotas=0;
    minNotas=10;
    contadorM=0;
    
    while(contador<5){
        contador++;
        nombre=prompt("Ingrse el nombre del alumno");
        
        notas=prompt("Ingrese la Nota del alumno");
        notas=parseInt(notas);
        while(isNaN(notas)||notas>10||notas<0){
            notas=prompt("INGRESE UNA NOTA VÁLIDA!!!");
            notas=parseInt(notas);
        }//nota
        
        sexo=prompt("Ingrese el sexo del alumno (m o f)");
        
        while(!isNaN(sexo)||sexo!="m"&&sexo!="f"){
            sexo=prompt("INGRESAR UNA LETRA VÁLIDA!!!");
        }//sexo
        
        acumuladorNotas=notas+acumuladorNotas;
        
        if(notas<minNotas){
            minNotas=notas;
            sexMin=sexo;
        }
        if(sexo=="m" && notas>5){
            contadorM++;
        }
        
        }//fin del while
    
     alert("El promedio de las notas totales es: "+ acumuladorNotas/5);
     alert("La nota más baja es "+minNotas+" y el sexo es "+sexMin);
     alert("La cantidad de varones que superaron o igualaron el 6 "+contadorM);
    
    
    
    
    
}
