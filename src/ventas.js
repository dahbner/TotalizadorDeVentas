export function mostrarCantidad(cantidad)
{
    return cantidad;
}

export function mostrarPrecioUnitario(precioUnitario)
{
    return precioUnitario;
}

export function mostrarPrecioNeto(cantidad, precioUnitario)
{
   return cantidad * precioUnitario;
}

export function mostrarImpuesto(estado){
    if(estado === "CA") return 8.25;
    if(estado === "AL") return 4.00;
}