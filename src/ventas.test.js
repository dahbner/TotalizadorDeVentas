import {mostrarCantidad} from "./ventas.js";

describe("Totalizador Ventas", () => {
  it("deberia mostrar la cantidad de items ingresada", () => {
    expect(mostrarCantidad(20)).toEqual(20);
  });
});