import { mostrarCantidad, mostrarPrecioUnitario, mostrarPrecioNeto } from "./ventas.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const botonTotalizar = document.querySelector("#btn-j1");
const divResultado = document.querySelector("#resultado");

botonTotalizar.addEventListener("click", () => {
    const cantidad = Number(cantidadInput.value);
    const precio = Number(precioInput.value);

    const cantidadValidada = mostrarCantidad(cantidad);
    const precioValidado = mostrarPrecioUnitario(precio);
    
    const precioNeto = mostrarPrecioNeto(cantidad, precio);

    divResultado.innerHTML = `<p>Precio neto (${cantidadValidada}*$${precioValidado}): $${precioNeto}</p>`;
});