import { mostrarCantidad, mostrarPrecioUnitario, mostrarPrecioNeto, calcularImpuesto, mostrarImpuesto, calcularDescuento } from "./ventas.js";

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

    const descuento = calcularDescuento(precioNeto);

    let porcentajeDescuento = 0;
    if (precioNeto >= 10000) {
        porcentajeDescuento = 10;
    } else if (precioNeto >= 7000) {
        porcentajeDescuento = 7;
    } else if (precioNeto >= 3000) {
        porcentajeDescuento = 5;
    } else if (precioNeto >= 1000) {
        porcentajeDescuento = 3;
    }

    const precioConDescuento = precioNeto - descuento;

    const impuesto = calcularImpuesto(precioConDescuento, estado);
    const porcentajeImpuesto = mostrarImpuesto(estado);
    const total = precioConDescuento + impuesto;

    divResultado.innerHTML = `
    <p>Precio neto (${cantidadValidada}*$${precioValidado}): $${precioNeto}</p>
    <p>Descuento (%${porcentajeDescuento}): $${descuento.toFixed(2)}</p>
    <p>Impuesto para ${estado} (%${porcentajeImpuesto}): $${impuesto.toFixed(2)}</p>
    <p>Precio total (+impuesto): $${total.toFixed(2)}</p>`
    ;
});