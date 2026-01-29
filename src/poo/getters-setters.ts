export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    protected _cpf: string
  ) {}

  set cpf(cpf: string) {
    console.log("Setando CPF");
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log("Obtendo CPF");
    return this._cpf;
  }
}

const pessoa = new Pessoa("Guilherme", "Soares", 25, "123.456.789-00");
pessoa.cpf = "123.456.789-00";
console.log(pessoa.cpf);
