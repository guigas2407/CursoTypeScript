import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = "show-error-message";

const form = document.querySelector("form") as HTMLFormElement;
const username = document.querySelector("#username") as HTMLInputElement;
const password = document.querySelector("#password") as HTMLInputElement;
const password2 = document.querySelector("#password2") as HTMLInputElement;
const email = document.querySelector("#email") as HTMLInputElement;

form.addEventListener("submit", function (event: Event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, password, password2, email);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  if (shouldSendForm(this)) console.log("Formulário enviado");
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, "This field is required");
    }
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, "Invalid email");
}

function checkPasswordsMatch(
  input1: HTMLInputElement,
  input2: HTMLInputElement
): void {
  if (input1.value !== input2.value) {
    showErrorMessage(input2, "Passwords do not match");
  }
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach((item) => {
    item.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    ".error-message"
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}
showErrorMessage(username, "Username is required");

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach(() => {
    send = false;
  });
  return send;
}
