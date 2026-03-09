import {mostrarCantidad, mostrarPrecioNeto, mostrarPrecioUnitario, mostrarImpuesto, calcularImpuesto, calcularDescuento} from "./ventas.js";

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
  it("deberia calcular el impuesto para AL", () => {
    expect(calcularImpuesto(100, "AL")).toEqual(4.00);
  });
  it("deberia calcular el impuesto para NV", () => {
    expect(calcularImpuesto(100, "NV")).toEqual(8.00);
  });
  it("deberia calcular el impuesto para UT", () => {
    expect(calcularImpuesto(100, "UT")).toEqual(6.65);
  });

  //Calcular descuentos
  it("deberia calcular 0 de descuento si el precio neto es menor a 1000", () => {
    expect(calcularDescuento(999)).toEqual(0);
  });
  it("deberia calcular 3% de descuento si el precio neto es mayor o igual a 1000", () => {
    expect(calcularDescuento(1000)).toEqual(30); 
  });

  it("deberia calcular 5% de descuento si el precio neto es mayor o igual a 3000", () => {
    expect(calcularDescuento(3000)).toEqual(150); 
  });

  it("deberia calcular 7% de descuento si el precio neto es mayor o igual a 7000", () => {
    expect(calcularDescuento(7000)).toEqual(490); 
  });

  it("deberia calcular 10% de descuento si el precio neto es mayor o igual a 10000", () => {
    expect(calcularDescuento(10000)).toEqual(1000); 
  });

  it("deberia calcular 15% de descuento si el precio neto es mayor o igual a 30000", () => {
    expect(calcularDescuento(30000)).toEqual(4500); 
  });
});