/* Recomendado */
// Condicional
const body1 = document.querySelector("body");
if (body1) body1.style.backgroundColor = "red";

//Type assertion
const body2 = document.querySelector("body") as HTMLBodyElement;
body2.style.backgroundColor = "red";

// HTMLElement
const input = document.querySelector(".input") as HTMLInputElement;
input.value = "Qualqer coisa";
input.focus();

/* Não recomendade */
//Type assertion
const body3 = document.querySelector("body") as unknown as number;

// Non-null assertion
const body4 = document.querySelector("body")!;
body4.style.backgroundColor = "red";
