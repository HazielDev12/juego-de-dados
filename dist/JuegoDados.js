import { Jugador } from "./Jugador.js";
import { Dado } from "./Dado.js";
import { Jugada } from "./Jugada.js";
export class JuegoDados {
    constructor(nombreJugador1, nombreJugador2) {
        this.cantidadJugadas = 0;
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.dado1 = new Dado();
        this.dado2 = new Dado();
        this.vencedor = null;
        this.jugador1 = new Jugador(nombreJugador1);
        this.jugador2 = new Jugador(nombreJugador2);
    }
    iniciarJuego() {
        while (this.cantidadJugadas < 5) {
            this.iniciarJugada();
            this.cantidadJugadas++;
        }
        this.vencedor = this.determinarVencedor();
    }
    iniciarJugada() {
        const jugadaActual = new Jugada();
        jugadaActual.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2);
        this.marcadorJugador1 += this.jugador1.puntoGanado;
        this.marcadorJugador2 += this.jugador2.puntoGanado;
        actualizarTabla(this.jugador1, this.jugador2, this.cantidadJugadas);
    }
    determinarVencedor() {
        if (this.marcadorJugador1 === this.marcadorJugador2) {
            return null;
        }
        return this.marcadorJugador1 > this.marcadorJugador2 ? this.jugador1 : this.jugador2;
    }
    obtenerResultado() {
        return this.vencedor ? `El vencedor es: ${this.vencedor.nombre}` : "Empate. No hay un vencedor.";
    }
}
function actualizarTabla(j1, j2, ronda) {
    const tabla = document.getElementById("tabla-puntajes");
    const fila = tabla.insertRow();
    fila.innerHTML = `
    <td>${ronda + 1}</td>
    <td>${j1.historial[ronda]}</td>
    <td>${j2.historial[ronda]}</td>
    <td>${j1.puntoGanado}</td>
    <td>${j2.puntoGanado}</td>
  `;
}
