import obtenerMarcador from "./tennis.js";

describe("Juego de Tenis", () => {
  it("deberia mostrar 'Love-Love' al empezar el set", () => {
    expect(obtenerMarcador(0, 0)).toEqual("Love-Love");
  });

  it("deberia mostrar '15-Love' cuando el jugador 1 anota un punto", () => {
    expect(obtenerMarcador(1, 0)).toEqual("15-Love");
  });

  it("deberia mostrar '15-15' cuando ambos jugadores han anotado un punto", () => {
    expect(obtenerMarcador(1, 1)).toEqual("15-15");
  });

  it("deberia mostrar '30-15' cuando el jugador 1 anota su segundo punto", () => {
    expect(obtenerMarcador(2, 1)).toEqual("30-15");
  });

  it("deberia mostrar '30-30' cuando el jugador 2 empata", () => {
    expect(obtenerMarcador(2, 2)).toEqual("30-30");
  });

  it("deberia mostrar '40-30' cuando el jugador 1 anota su tercer punto", () => {
    expect(obtenerMarcador(3, 2)).toEqual("40-30");
  });

  it("deberia mostrar 'Deuce' cuando ambos jugadores empatan a 40 (3 puntos)", () => {
    expect(obtenerMarcador(3, 3)).toEqual("Deuce");
  });

  it("deberia mostrar 'Advantage Player 1' cuando el jugador 1 anota despues de Deuce", () => {
    expect(obtenerMarcador(4, 3)).toEqual("Advantage Player 1");
  });
  
  it("deberia mostrar 'Game for Player 1' cuando anota el punto ganador", () => {
  expect(obtenerMarcador(4, 2)).toEqual("Game for Player 1");
  });

  it("deberia mostrar 'Advantage Player 2' cuando el jugador 2 anota despues de Deuce", () => {
    expect(obtenerMarcador(3, 4)).toEqual("Advantage Player 2");
  });

  it("deberia mostrar 'Game for Player 2' cuando anota el punto ganador", () => {
  expect(obtenerMarcador(2, 4)).toEqual("Game for Player 2");
  });
});