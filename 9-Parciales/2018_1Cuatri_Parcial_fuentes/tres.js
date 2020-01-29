function mostrar()
{
    var precio;
    var descuento;
    var descuentoFinal;
    var precioFinal;

    precio=parseInt(precio);
    descuento=parseInt(descuento);
    descuentoFinal=parseInt(descuentoFinal);
    precioFinal=parseInt(precioFinal);

    precio=prompt("Introducir Precio");
    descuento=prompt("Introducir Descuento");

    descuentoFinal = descuento /100;
    precioFinal = precio-(precio * descuentoFinal);

    document.getElementById("elPrecioFinal").value=precioFinal;

}
