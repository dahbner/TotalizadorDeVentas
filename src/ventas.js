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

export function mostrarDescuento(precioNeto) {
    if (precioNeto >= 30000) return 15;
    if (precioNeto >= 10000) return 10;
    if (precioNeto >= 7000) return 7;
    if (precioNeto >= 3000) return 5;
    if (precioNeto >= 1000) return 3;
    if(precioNeto < 1000) return 0;        
}

export function mostrarDescuentoCategoria(categoria) {
    if (categoria === "Alimentos") {
        return 2;
    }
    
    if (categoria === "Material de escritorio") {
        return 1.5;
    }
    
    if (categoria === "Electronicos") {
        return 1;
    }
    return 0;
}

export function calcularDescuento(precioNeto, categoria) {
    const porcentajeBase = mostrarDescuento(precioNeto);
    const porcentajeAdicional = mostrarDescuentoCategoria(categoria);
    const porcentajeTotal = porcentajeBase + porcentajeAdicional;
    
    return Number((precioNeto * (porcentajeTotal / 100)).toFixed(2));
}

export function mostrarImpuesto(estado){
    if(estado === "CA") return 8.25;
    if(estado === "AL") return 4.00;
    if(estado === "NV") return 8.00;
    if(estado === "UT") return 6.65;
    if(estado === "TX") return 6.25;
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

export function calcularImpuesto(precioConDescuento, estado, categoria) {
    const porcentajeEstado = mostrarImpuesto(estado);
    const porcentajeAdicional = mostrarImpuestoCategoria(categoria);
    const porcentajeTotal = porcentajeEstado + porcentajeAdicional;
    
    return Number((precioConDescuento * (porcentajeTotal / 100)).toFixed(2));
}


export function calcularPrecioTotal(precioNeto, impuesto, descuento)
{
    return precioNeto + impuesto - descuento;
}