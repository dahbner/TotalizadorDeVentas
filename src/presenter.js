import { mostrarCantidad, mostrarPrecioUnitario, mostrarPrecioNeto, calcularImpuesto, mostrarImpuesto, calcularDescuento, mostrarDescuento, calcularPrecioTotal, mostrarImpuestoCategoria, mostrarDescuentoCategoria, mostrarCostoEnvio, calcularCostoEnvio } from "./ventas.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoInput = document.querySelector("#estado");
const categoriaInput = document.querySelector("#categoria");
const pesoInput = document.querySelector("#peso");
const clienteInput = document.querySelector("#cliente");
const botonTotalizar = document.querySelector("#btn-j1");
const divResultado = document.querySelector("#resultado");

botonTotalizar.addEventListener("click", () => {
    const cantidad = Number(cantidadInput.value);
    const precio = Number(precioInput.value);
    const estado = estadoInput.value;
    const categoria = categoriaInput.value;
    const cliente = clienteInput.value;

    const cantidadValidada = mostrarCantidad(cantidad);
    const precioValidado = mostrarPrecioUnitario(precio);
    const precioNeto = mostrarPrecioNeto(cantidad, precio);

    const porcentajeDescuento = mostrarDescuento(precioNeto);
    const porcentajeDescuentoCategoria = mostrarDescuentoCategoria(categoria);
    const descuento = calcularDescuento(precioNeto, categoria);

    const precioConDescuento = precioNeto - descuento;
    
    const porcentajeImpuesto = mostrarImpuesto(estado);
    const porcentajeImpuestoCategoria = mostrarImpuestoCategoria(categoria);
    const impuesto = calcularImpuesto(precioConDescuento, estado,categoria);

    const peso = Number(pesoInput.value);
    const costoEnvioUnitario = mostrarCostoEnvio(peso);
    const costoEnvioTotal = calcularCostoEnvio(peso, cantidad, costoEnvioUnitario);
    
    const total = calcularPrecioTotal(precioNeto, impuesto, descuento) + costoEnvioTotal;

    divResultado.innerHTML = `
        <p>Tipo de Cliente: ${cliente}</p>
        <p>Categoría: ${categoria}</p>
        <p>Precio neto (${cantidadValidada}*$${precioValidado}): $${precioNeto}</p>
        <p>Descuento (${porcentajeDescuento}% base + ${porcentajeDescuentoCategoria}% adicional): $${descuento.toFixed(2)}</p>
        <p>Impuesto para ${estado} (${porcentajeImpuesto}% base + ${porcentajeImpuestoCategoria}% adicional): $${impuesto.toFixed(2)}</p>
        <p>Costo envio por unidad: $${costoEnvioUnitario}</p>
        <p>Costo envio total: $${costoEnvioTotal}</p>
        <p>Precio total (descuento e impuesto): $${total.toFixed(2)}</p>`;
});