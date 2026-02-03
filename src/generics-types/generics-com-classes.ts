export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idasde: U
  ) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: T[] = [];

  push(elemento: T): void {
    this.elementos.push(elemento);
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    console.log(this.elementos);
    console.log(this.contador);
  }
}

const pilha = new Pilha<string>();
pilha.push("Luiz");
pilha.push("Maria");
pilha.push("João");
pilha.mostrarPilha();
console.log(pilha.pop());
pilha.mostrarPilha();
