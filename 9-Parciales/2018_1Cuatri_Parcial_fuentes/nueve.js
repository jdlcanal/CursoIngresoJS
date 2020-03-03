function mostrar()
{
    var marca;
    var peso;
    var temp;
    var respuesta;
    var tempPar;
    var pesoMax;
    var nombreMax;
    var tempCero;
    var pesoP;
    var pesoMin;
    var contador;
    
    respuesta="si";
    tempPar=0;
    pesoMax=0;
    tempCero=0;
    pesoMin=100;
    pesoP=0;
    contador=0;
    
    respuesta=prompt("Para ingresar datos, escriba 'si'");
    while(respuesta=="si"){
        contador++;
        marca=prompt("Ingresar el nombre de la Marca");
        
        peso=prompt("Ingresar Peso");
        peso=parseInt(peso);
        while(isNaN(peso) || peso<1 || peso>100){
            peso=prompt("ERROR!!! Ingresar un Peso válido!!!");
            peso=parseInt(peso);
        }//peso
        
        temp=prompt("Ingresar Temperatura");
        while(isNaN(temp) || temp<-30 || temp> 30){
            temp=prompt("ERROR!!! Ingresar una Temperatura válida!!!");
        }//temp
        
        pesoP=peso+pesoP;//promedio peso
        
        if(temp%2==0){
            tempPar++;
        }//temp pares
        
        if(peso>pesoMax){
            pesoMax=peso;
            nombreMax=marca;
        }//peso y marca max
        
        if(temp<0){
            tempCero++;
        }//bajo cero
        
        if(peso<pesoMin){
            pesoMin=peso;
        }//peso min
        
        
        respuesta=prompt("Para continuar ingresando, escriba 'si'");
    }//fin while
    
    alert("La cantidad de Temperaturas pares: "+tempPar);
    alert("La marca del producto más pesado es: "+nombreMax);
    alert("La cantidad de productos bajo cero: "+tempCero);
    alert("El promedio de peso es de: "+pesoP/contador);
    alert("El peso minimo es: "+pesoMin);
    alert("El peso maximo es: "+pesoMax);
    
    
    
    
    
    
    
    
}
