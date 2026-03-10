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

export function mostrarCostoEnvio(peso){
    if (peso >= 0 && peso <= 10) return 0;
    if (peso > 10 && peso <= 20) return 3.5;
    if (peso > 20 && peso <= 40) return 5;
    if (peso > 40 && peso <= 80) return 6;
    if (peso > 80 && peso <= 100) return 6.5;
    if (peso > 100 && peso <= 200) return 8;
    if (peso > 200) return 9;
}

export function calcularCostoEnvio(peso, cantidad, costoEnvio) {
    const costoUnitario = mostrarCostoEnvio(peso);
    return cantidad * costoUnitario;
}

export function calcularImpuesto(precioConDescuento, estado, categoria) {
    const porcentajeEstado = mostrarImpuesto(estado);
    const porcentajeAdicional = mostrarImpuestoCategoria(categoria);
    const porcentajeTotal = porcentajeEstado + porcentajeAdicional;
    
    return Number((precioConDescuento * (porcentajeTotal / 100)).toFixed(2));
}

export function calcularPrecioConDescuento(precioNeto, descuento) {
    return precioNeto - descuento;
}

export function calcularPrecioTotal(precioNeto, impuesto, descuento, costoEnvio) {
    return precioNeto + impuesto - descuento + costoEnvio;
}