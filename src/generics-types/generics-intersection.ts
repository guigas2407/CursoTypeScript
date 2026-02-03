export function unirObjetos<o1, o2>(obj1: o1, obj2: o2): o1 & o2 {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { nome: "Luiz" };
const obj2 = { sobrenome: "Miranda" };
const unir = unirObjetos(obj1, obj2);
console.log(unir);
