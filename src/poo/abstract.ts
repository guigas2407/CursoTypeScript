export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(
      `${this.nome} ataca ${personagem.nome} com força ${this.ataque}`
    );
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida.`);
  }

  abstract bordao(): void;
}

export class Guerreiro extends Personagem {
  protected emoji = "⚔️";

  bordao(): void {
    console.log(this.emoji + ` Guerreiro diz: "Agora vai ver o que acontece!"`);
  }
}

export class Monstro extends Personagem {
  protected emoji = "👹";

  bordao(): void {
    console.log(this.emoji + ` Monstro diz: "Agora vai ver o que acontece!"`);
  }
}

const guerreiro = new Guerreiro("Guerreiro", 10, 1000);
const monstro = new Monstro("Monstro", 20, 1000);

guerreiro.atacar(monstro);
monstro.atacar(guerreiro);
