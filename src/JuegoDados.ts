import { Jugador } from "./Jugador.js";
import { Dado } from "./Dado.js";
import { Jugada } from "./Jugada.js";

export class JuegoDados {
  private cantidadJugadas: number = 0;
  private jugador1: Jugador;
  private jugador2: Jugador;
  private marcadorJugador1: number = 0;
  private marcadorJugador2: number = 0;
  private dado1: Dado = new Dado();
  private dado2: Dado = new Dado();
  public vencedor: Jugador | null = null;

  constructor(nombreJugador1: string, nombreJugador2: string) {
    this.jugador1 = new Jugador(nombreJugador1);
    this.jugador2 = new Jugador(nombreJugador2);
  }

  iniciarJuego(): void {
    while (this.cantidadJugadas < 5) {
      this.iniciarJugada();
      this.cantidadJugadas++;
    }

    this.vencedor = this.determinarVencedor();
    actualizarTabla(this.jugador1, this.jugador2, this.cantidadJugadas, true); // Agrega sumatoria final
  }

  private iniciarJugada(): void {
    const jugadaActual = new Jugada();
    jugadaActual.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2);
    
    this.marcadorJugador1 += this.jugador1.puntoGanado;
    this.marcadorJugador2 += this.jugador2.puntoGanado;

    actualizarTabla(this.jugador1, this.jugador2, this.cantidadJugadas);
  }

  private determinarVencedor(): Jugador | null {
    if (this.marcadorJugador1 === this.marcadorJugador2) {
      return null;
    }
    return this.marcadorJugador1 > this.marcadorJugador2 ? this.jugador1 : this.jugador2;
  }

  obtenerResultado(): string {
    return this.vencedor ? `El vencedor es: ${this.vencedor.nombre}` : "Empate. No hay un vencedor.";
  }
}

function actualizarTabla(j1: Jugador, j2: Jugador, ronda: number, esSumatoriaFinal = false): void {
  const tabla = document.getElementById("tabla-puntajes") as HTMLTableElement;

  if (esSumatoriaFinal) {
    const filaFinal = tabla.insertRow();
    filaFinal.innerHTML = `
      <td><strong>Total</strong></td>
      <td><strong>${j1.getSumaPuntos()}</strong></td>
      <td><strong>${j2.getSumaPuntos()}</strong></td>
      <td>-</td>
      <td>-</td>
    `;
  } else {
    const fila = tabla.insertRow();
    fila.innerHTML = `
      <td>${ronda + 1}</td>
      <td>${j1.historial[ronda]}</td>
      <td>${j2.historial[ronda]}</td>
      <td>${j1.puntoGanado}</td>
      <td>${j2.puntoGanado}</td>
    `;
  }
}
