import {mostrarCantidad, mostrarPrecioNeto, mostrarPrecioUnitario, mostrarImpuesto, calcularImpuesto} from "./ventas.js";

describe("Totalizador Ventas", () => {
  it("deberia mostrar la cantidad de items ingresada", () => {
    expect(mostrarCantidad(20)).toEqual(20);
  });

  it("deberia mostrar el precio unitario del item", () => {
    expect(mostrarPrecioUnitario(7)).toEqual(7);
  });

  it("deberia mostrar el precio neto", () => {
    expect(mostrarPrecioNeto(10, 7)).toEqual(70);
  });

  //mostrar impuestos
  it("deberia mostrar el procentaje de impuesto para CA", () => {
    expect(mostrarImpuesto("CA")).toEqual(8.25);
  });
  it("deberia mostrar el procentaje de impuesto para AL", () => {
    expect(mostrarImpuesto("AL")).toEqual(4.00);
  });
  it("deberia mostrar el procentaje de impuesto para NV", () => {
    expect(mostrarImpuesto("NV")).toEqual(8.00);
  });
  it("deberia mostrar el procentaje de impuesto para UT", () => {
    expect(mostrarImpuesto("UT")).toEqual(6.65);
  });
  it("deberia mostrar el procentaje de impuesto para TX", () => {
    expect(mostrarImpuesto("TX")).toEqual(6.25);
  });

  //Calcular impuestos
  it("deberia calcular el impuesto para CA", () => {
    expect(calcularImpuesto(60, "CA")).toEqual(4.95);
  });

});