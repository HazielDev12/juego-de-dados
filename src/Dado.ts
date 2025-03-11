export class Dado {
  public puntos: number = 0;

  lanzar(): void {
    this.puntos = Math.floor(Math.random() * 6) + 1; // Genera un número entre 1 y 6
  }
}
