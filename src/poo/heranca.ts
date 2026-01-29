export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return "ALUNO: " + super.getNomeCompleto();
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return "CLIENTE: " + super.getNomeCompleto();
  }
}

const pessoa = new Pessoa("Guilherme", "Soares", 22, "111.111.111-11");
const aluno = new Aluno("Guilherme", "Soares", 22, "111.111.111-11");
const cliente = new Cliente("Maria", "Silva", 22, "222.222.222-22");

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
