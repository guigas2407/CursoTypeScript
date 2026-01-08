export function multiplicaArgs(...args: number[]) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]) {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]) {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3, 4, 5);
const result2 = concatenaString("a", "b", "c");
const result3 = toUpperCase("a", "b", "c");

console.log(result);
console.log(result2);
console.log(result3);
