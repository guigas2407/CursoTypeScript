//declaratioin merging

interface Pessoa {
  nome: string;
}

interface Pessoa {
  sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: "Guilherme",
  sobrenome: "Soares",
  enderecos: ["Av. Paulista", "Av. Brigadeiro Faria Lima"],
  idade: 30,
};
