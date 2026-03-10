import { mostrarCantidad, mostrarPrecioUnitario, mostrarPrecioNeto, calcularImpuesto, mostrarImpuesto, calcularDescuento, mostrarDescuento, calcularPrecioTotal } from "./ventas.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoInput = document.querySelector("#estado");
const botonTotalizar = document.querySelector("#btn-j1");
const divResultado = document.querySelector("#resultado");

botonTotalizar.addEventListener("click", () => {
    const cantidad = Number(cantidadInput.value);
    const precio = Number(precioInput.value);
    const estado = estadoInput.value;

    const cantidadValidada = mostrarCantidad(cantidad);
    const precioValidado = mostrarPrecioUnitario(precio);
    const precioNeto = mostrarPrecioNeto(cantidad, precio);

    const porcentajeDescuento = mostrarDescuento(precioNeto);
    const descuento = calcularDescuento(precioNeto);

    const precioConDescuento = precioNeto - descuento;
    
    const porcentajeImpuesto = mostrarImpuesto(estado);
    const impuesto = calcularImpuesto(precioConDescuento, estado);
    
    const total = calcularPrecioTotal(precioNeto, impuesto, descuento);

    divResultado.innerHTML = `
        <p>Precio neto (${cantidadValidada}*$${precioValidado}): $${precioNeto}</p>
        <p>Descuento (${porcentajeDescuento}%): $${descuento.toFixed(2)}</p>
        <p>Impuesto para ${estado} (${porcentajeImpuesto}%): $${impuesto.toFixed(2)}</p>
        <p>Precio total (descuento e impuesto): $${total.toFixed(2)}</p>`;
});