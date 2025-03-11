import { JuegoDados } from "./JuegoDados.js";
document.getElementById("gameForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const jugador1Input = document.getElementById("jugador1").value;
    const jugador2Input = document.getElementById("jugador2").value;
    if (!jugador1Input || !jugador2Input) {
        alert("Por favor, ingrese los nombres de ambos jugadores.");
        return;
    }
    limpiarTabla();
    const juego = new JuegoDados(jugador1Input, jugador2Input);
    juego.iniciarJuego();
    document.getElementById("output").innerText = juego.obtenerResultado();
});
document.getElementById("reiniciar").addEventListener("click", () => {
    location.reload();
});
function limpiarTabla() {
    const tabla = document.getElementById("tabla-puntajes");
    tabla.innerHTML = `<tr>
    <th>Ronda</th>
    <th>Puntos J1</th>
    <th>Puntos J2</th>
    <th>Victorias J1</th>
    <th>Victorias J2</th>
  </tr>`;
}
