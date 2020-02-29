
function mostrar()
{
var nombre;
var cantidadPersonas;
var cantidadDias;
var formaPago;
var respuesta;

respuesta="s";
respuesta=prompt("Desea Ingresar al Sistema? Presione s")
while(respuesta=="s"){
nombre=prompt("Ingresar su Nombre");
console.log("Nombre del huesped: " + nombre);
cantidadPersonas=prompt("Ingresar la cantidad de personas");
cantidadPersonas=parseInt(cantidadPersonas);

while(isNaN(cantidadPersonas)||cantidadPersonas<1){
    alert("INGRESAR UN NÚMERO vÁLIDO!!!");

    cantidadPersonas=prompt("Ingresar la cantidad de personas");
    cantidadPersonas=parseInt(cantidadPersonas);

}
console.log("Viene con "+cantidadPersonas+" personas");
cantidadDias=prompt("Ingresar la cantidad de días");
cantidadDias=parseInt(cantidadDias);

while(isNaN(cantidadDias)||cantidadDias<1){
    alert("INGRESAR UN NÚMERO vÁLIDO!!!");

    cantidadDias=prompt("Ingresar la cantidad de días");
    cantidadDias=parseInt(cantidadDias);

}
console.log("Se queda/n "+cantidadDias+" días");

formaPago=prompt("Ingresar la forma de pago (efectivo, tarjeta o qr)");

while(!(formaPago=="efectivo"||formaPago=="tarjeta"||formaPago=="qr")){
    alert("INGRESAR UNA FORMA VÁLIDA!!!");
    formaPago=prompt("Ingresar la forma de pago (efectivo, tarjeta o qr)");

}
console.log("Abona con "+formaPago);

respuesta=prompt("Desea Ingresar otra vez al Sistema? Presione s")
} //fin del while




}
