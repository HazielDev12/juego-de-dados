export class Jugador {
    constructor(nombre) {
        this.puntoGanado = 0;
        this.historial = [];
        this.nombre = nombre;
    }
    lanzaDados(dado1, dado2) {
        dado1.lanzar();
        dado2.lanzar();
        const resultado = dado1.puntos + dado2.puntos;
        this.historial.push(resultado);
        return resultado;
    }
}
