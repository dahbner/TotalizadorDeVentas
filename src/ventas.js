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
    if(estado === "NV") return 8.00;
    if(estado === "UT") return 6.65;
    if(estado === "TX") return 6.25;
}

export function calcularImpuesto(precioNeto, estado){
    if(estado === "CA") return precioNeto * 0.0825;
    if(estado === "AL") return precioNeto * 0.04;
    if(estado === "NV") return precioNeto * 0.08;
    if(estado === "UT") return precioNeto * 0.0665;
}

export function calcularDescuento(precioNeto) {
    if (precioNeto >= 3000) {
        return precioNeto * 0.05;
    }
    if (precioNeto >= 1000) {
        return precioNeto * 0.03;
    }
    return 0;
}