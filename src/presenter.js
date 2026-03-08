import { mostrarCantidad, mostrarPrecioUnitario, mostrarPrecioNeto, calcularImpuesto, mostrarImpuesto } from "./ventas.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoInput = document.querySelector("#estado");
const botonTotalizar = document.querySelector("#btn-j1");
const divResultado = document.querySelector("#resultado");

botonTotalizar.addEventListener("click", () => {
    const cantidad = Number(cantidadInput.value);
    const precio = Number(precioInput.value);
    const estado = estadoInput.value;
    const impuesto = calcularImpuesto(precioNeto, estado);
    const porcentaje = mostrarImpuesto(estado);
    const total = precioNeto + impuesto;

    const cantidadValidada = mostrarCantidad(cantidad);
    const precioValidado = mostrarPrecioUnitario(precio);
    
    const precioNeto = mostrarPrecioNeto(cantidad, precio);

    divResultado.innerHTML = `<p>Precio neto (${cantidadValidada}*$${precioValidado}): $${precioNeto}</p>
    <p>Impuesto para ${estado} (%${porcentaje}): $${impuesto.toFixed(2)}</p>
    <p>Precio total (+impuesto): $${total.toFixed(2)}</p>`
    ;
});