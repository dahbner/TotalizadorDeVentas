import {
  mostrarCantidad, mostrarPrecioNeto, mostrarPrecioUnitario, 
  mostrarImpuesto, calcularImpuesto, calcularDescuento, mostrarDescuento, 
  calcularPrecioTotal, mostrarImpuestoCategoria, mostrarDescuentoCategoria, 
  mostrarCostoEnvio, calcularCostoEnvio, calcularPrecioConDescuento, mostrarDescuentoEnvioCliente
} from "./ventas.js";

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
  it("deberia calcular el impuesto para TX", () => {
    expect(calcularImpuesto(100, "TX")).toEqual(6.25);
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

  //mostrar porcentaje descuento
  it("deberia mostrar 0% de descuento si el precio neto es menor a 1000", () => {
    expect(mostrarDescuento(999)).toEqual(0);
  });
  it("deberia mostrar 3% de descuento si el precio neto es mayor o igual a 1000", () => {
    expect(mostrarDescuento(1000)).toEqual(3); 
  });
  it("deberia mostrar 5% de descuento si el precio neto es mayor o igual a 3000", () => {
    expect(mostrarDescuento(3000)).toEqual(5); 
  });
  it("deberia mostrar 7% de descuento si el precio neto es mayor o igual a 7000", () => {
    expect(mostrarDescuento(7000)).toEqual(7); 
  });
  it("deberia mostrar 10% de descuento si el precio neto es mayor o igual a 10000", () => {
    expect(mostrarDescuento(10000)).toEqual(10); 
  });
  it("deberia mostrar 15% de descuento si el precio neto es mayor o igual a 30000", () => {
    expect(mostrarDescuento(30000)).toEqual(15); 
  });

  //precio total
it("deberia calcular el precio total con descuento e impuesto", () => {
    expect(calcularPrecioTotal(60, 3.75, 0, 0)).toEqual(63.75);
  });

  //Impuesto Adicional
  it("deberia mostrar 7% de impuesto adicional para Bebidas alcoholicas", () => {
    expect(mostrarImpuestoCategoria("Bebidas alcoholicas")).toEqual(7);
  });

  it("deberia mostrar 3% de impuesto adicional para Muebles", () => {
    expect(mostrarImpuestoCategoria("Muebles")).toEqual(3);
  });

  it("deberia mostrar 4% de impuesto adicional para Electronicos", () => {
    expect(mostrarImpuestoCategoria("Electronicos")).toEqual(4);
  });

  it("deberia mostrar 2% de impuesto adicional para Vestimenta", () => {
    expect(mostrarImpuestoCategoria("Vestimenta")).toEqual(2);
  });

  //Descuento adicional
  it("deberia mostrar 2% de descuento adicional para Alimentos", () => {
    expect(mostrarDescuentoCategoria("Alimentos")).toEqual(2);
  });

  it("deberia mostrar 1.5% de descuento adicional para Material de escritorio", () => {
    expect(mostrarDescuentoCategoria("Material de escritorio")).toEqual(1.5);
  });

  it("deberia mostrar 1% de descuento adicional para Electronicos", () => {
    expect(mostrarDescuentoCategoria("Electronicos")).toEqual(1);
  });
  
  //Descuento e Impuesto Total
  it("deberia calcular el descuento total sumando el % base y el % de categoria", () => {
    expect(calcularDescuento(1000, "Alimentos")).toEqual(50);
  });

  it("deberia calcular el impuesto total sumando el % de estado y el % de categoria", () => {
    expect(calcularImpuesto(100, "CA", "Muebles")).toEqual(11.25);
  });

  //Costo envio 
  it("deberia mostrar $0 de envio si el peso esta entre 0 y 10", () => {
    expect(mostrarCostoEnvio(5)).toEqual(0);
  });
  it("deberia mostrar $3.5 de envio si el peso esta entre 11 y 20", () => {
    expect(mostrarCostoEnvio(15)).toEqual(3.5);
  });
  it("deberia mostrar $5 de envio si el peso esta entre 21 y 40", () => {
    expect(mostrarCostoEnvio(30)).toEqual(5);
  });
  it("deberia mostrar $6 de envio si el peso esta entre 41 y 80", () => {
    expect(mostrarCostoEnvio(50)).toEqual(6);
  });
  it("deberia mostrar $6.5 de envio si el peso esta entre 81 y 100", () => {
    expect(mostrarCostoEnvio(90)).toEqual(6.5);
  });
  it("deberia mostrar $8 de envio si el peso esta entre 101 y 200", () => {
    expect(mostrarCostoEnvio(150)).toEqual(8);
  });
  it("deberia mostrar $9 de envio si el peso es mayor a 200", () => {
    expect(mostrarCostoEnvio(250)).toEqual(9);
  });

  it("deberia calcular el costo total de envio multiplicando cantidad por costo unitario", () => {
    expect(calcularCostoEnvio(11, 1, 3.5)).toEqual(3.5);
  });

  //precio con descuento
  it("deberia calcular el precio con descuento restando el descuento al precio neto", () => {
    expect(calcularPrecioConDescuento(100, 20)).toEqual(80);
  });

  //costo de envio
  it("deberia mostrar 0.5% de descuento en envio para cliente Recurrente", () => {
    expect(mostrarDescuentoEnvioCliente("Recurrente")).toEqual(0.5);
  });
});