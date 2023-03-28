const inputTexto = document.querySelector("#name-input");
const outputTexto = document.querySelector("#name-output");

outputTexto.textContent = "anónimo";

inputTexto.addEventListener("input", () => {
  outputTexto.textContent = inputTexto.value || "anónimo";
});
