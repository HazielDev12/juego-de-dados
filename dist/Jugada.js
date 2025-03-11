export class Jugada {
    iniciarJugada(jugador1, jugador2, dado1, dado2) {
        const puntosJ1 = this.turnarJugador(jugador1, dado1, dado2);
        const puntosJ2 = this.turnarJugador(jugador2, dado1, dado2);
        this.determinarGanador(jugador1, puntosJ1, jugador2, puntosJ2);
    }
    turnarJugador(jugador, dado1, dado2) {
        return jugador.lanzaDados(dado1, dado2);
    }
    determinarGanador(j1, pJ1, j2, pJ2) {
        j1.puntoGanado = pJ1 === 7 ? 1 : 0;
        j2.puntoGanado = pJ2 === 7 ? 1 : 0;
    }
}
