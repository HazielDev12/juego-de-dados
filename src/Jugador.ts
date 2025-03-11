import { Dado } from "./Dado.js";

export class Jugador {
  public nombre: string;
  public puntoGanado: number = 0;
  public historial: number[] = [];

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  lanzaDados(dado1: Dado, dado2: Dado): number {
    dado1.lanzar();
    dado2.lanzar();
    const resultado = dado1.puntos + dado2.puntos;
    this.historial.push(resultado);
    return resultado;
  }
}
