type HaveName = { name: string };
type HaveLastName = { lastName: string };
type HaveYears = { years: number };
type Person = HaveName & HaveLastName & HaveYears;

type AB = "A" | "B";
type AC = "A" | "C";
type AD = "A" | "D";
type Intersection = AB & AC & AD;

const person: Person = {
  name: "Guilherme",
  lastName: "Soares",
  years: 30,
};

console.log(person);

export { person };
