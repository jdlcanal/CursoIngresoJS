function mostrar()
{
var letra;
var numero;
var respuesta;
var pares;
var impares;
var ceros;
var positivos;
var negativos;
var maxNum;
var minNum;
pares=0;
impares=0;
ceros=0;
positivos=0;
negativos=0;
contador=0;
maxNum=-100;
minNum=100;
    
respuesta=prompt("Desea ingresar al sistema? Escriba 'si'");
while(respuesta=="si"){
    contador++;
    letra=prompt("Escriba una letra");
    
    numero=prompt("Ingresar un número del -100 al 100");
    numero=parseInt(numero);
    while(numero<-100 || numero>100){
        numero=prompt("ERROR!! Ingresar un número del -100 al 100");
        numero=parseInt(numero);
    }//numero
    
    if(numero%2==0){
        pares++;
    } else{
        impares++;
    }
    if(numero==-100 || numero==100){
        ceros = ceros + 2;
        }else{
        if(numero%10==0){
        ceros++;
    }
    }
    if(numero>0){
        positivos=numero+positivos;
    }else{
        negativos=numero+negativos;
    }
    if(numero<minNum){
        minNum=numero;
    }
    if(numero>maxNum){
        maxNum=numero;
    }
    
    
    respuesta=prompt("Desea continuar? Escriba 'si'");
    
    
    
}//fin del while

    alert("Numeros pares: "+ pares);        
    alert("Numeros impares: "+ impares);
    alert("La cantidad de Ceros: "+ceros);
    alert("El promedio de positivos: "+positivos/contador);
    alert("El promedio de negativos: "+negativos/contador);
    alert("El numero minimo es: "+minNum);
    alert("El numero maximo es: "+maxNum);
    
    
    
    
}
