export class Dado {
    constructor() {
        this.puntos = 0;
    }
    lanzar() {
        this.puntos = Math.floor(Math.random() * 6) + 1; // Genera un número entre 1 y 6
    }
}
