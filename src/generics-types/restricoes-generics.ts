type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

console.log(obterChave({ nome: "Guilherme", idade: 25 }, "nome"));

const animal = {
  cor: "preto",
  vacinas: ["gripe", "raiva"],
  peso: 20,
};

const vacinas = obterChave(animal, "vacinas");
const cor = obterChave(animal, "cor");

console.log(vacinas, cor, obterChave(animal, "peso"));
