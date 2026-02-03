interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const pessoa1: PessoaProtocolo<string, number> = {
  nome: "Guilherme",
  sobrenome: "meyer soares",
  idade: 18,
};

const pessoa2: PessoaProtocolo<number, string> = {
  nome: 123,
  sobrenome: "meyer soares",
  idade: "18",
};

const pessoa3: PessoaProtocolo = {
  nome: "Guilherme",
  sobrenome: "meyer soares",
  idade: 18,
};

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
