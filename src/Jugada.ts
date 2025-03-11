import { Jugador } from "./Jugador.js";
import { Dado } from "./Dado.js";

export class Jugada {
  iniciarJugada(jugador1: Jugador, jugador2: Jugador, dado1: Dado, dado2: Dado): void {
    const puntosJ1 = this.turnarJugador(jugador1, dado1, dado2);
    const puntosJ2 = this.turnarJugador(jugador2, dado1, dado2);

    this.determinarGanador(jugador1, puntosJ1, jugador2, puntosJ2);
  }

  private turnarJugador(jugador: Jugador, dado1: Dado, dado2: Dado): number {
    return jugador.lanzaDados(dado1, dado2);
  }

  private determinarGanador(j1: Jugador, pJ1: number, j2: Jugador, pJ2: number): void {
    j1.puntoGanado = pJ1 === 7 ? 1 : 0;
    j2.puntoGanado = pJ2 === 7 ? 1 : 0;
  }
}
