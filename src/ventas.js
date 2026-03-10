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
    if(estado === "TX") return precioNeto * 0.0625;
}

export function calcularDescuento(precioNeto) {
    if (precioNeto >= 30000) {
        return Number((precioNeto * 0.15).toFixed(2));
    }
    
    if (precioNeto >= 10000) {
        return Number((precioNeto * 0.10).toFixed(2));
    }

    if (precioNeto >= 7000) {
        return Number((precioNeto * 0.07).toFixed(2));
    }
    if (precioNeto >= 3000) {
        return Number((precioNeto * 0.05).toFixed(2));
    }
    if (precioNeto >= 1000) {
        return Number((precioNeto * 0.03).toFixed(2));
    }
    return 0;
}

export function mostrarDescuento(precioNeto) {
    if (precioNeto >= 30000) return 15;
    if (precioNeto >= 10000) return 10;
    if (precioNeto >= 7000) return 7;
    if (precioNeto >= 3000) return 5;
    if (precioNeto >= 1000) return 3;
    if(precioNeto < 1000) return 0;        
}

export function calcularPrecioTotal(precioNeto, impuesto, descuento)
{
    return precioNeto + impuesto - descuento;
}

export function mostrarImpuestoCategoria(categoria) {
    if (categoria === "Bebidas alcoholicas") {
        return 7;
    }
    if (categoria === "Muebles") {
        return 3;
    }
    if (categoria === "Electronicos") {
        return 4;
    }
    if (categoria === "Vestimenta") {
        return 2;
    }
    return 0;
}