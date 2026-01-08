//tuple
const dadosCliente1: readonly [number, string] = [1, "Luiz"];
const dadosCliente2: [number, string, string] = [1, "Guilherme", "Meyer"];
const dadosCliente3: [number, string, string?] = [1, "Otávio", "Otávio"];
const dadosCliente4: [number, string, ...string[]] = [1, "Otávio", "Otávio"];

//dadosCliente1[0] = 100;
//dadosCliente1[1] = "Otávio";

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array1: readonly string[] = ["a", "b", "c"];
const array2: ReadonlyArray<string> = ["a", "b", "c"];

console.log(array1);
console.log(array2);
